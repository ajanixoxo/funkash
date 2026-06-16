import { Metadata } from "next";
import dbConnect from "@/lib/db";
import Essay from "@/models/Essay";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    await dbConnect();
    const { id } = await params;

    const essay = await Essay.findById(id).select("-__v");

    if (!essay || !essay.published) {
      return {
        title: "Essay Not Found | Funkash",
      };
    }

    return {
      title: `${essay.title} | Funkash`,
      description: essay.excerpt,
      openGraph: {
        title: essay.title,
        description: essay.excerpt,
        type: "article",
        publishedTime: essay.publishedDate?.toISOString(),
        authors: [essay.author],
      },
      twitter: {
        card: "summary",
        title: essay.title,
        description: essay.excerpt,
      },
    };
  } catch (error) {
    console.error("Error generating metadata for essay:", error);
    return {
      title: "Essay | Funkash",
    };
  }
}

export default function EssayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
