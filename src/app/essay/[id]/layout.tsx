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

    const fallbackImage = "/logo.png"; // Standard Funkash logo as fallback
    const imageUrl = essay.coverImage || fallbackImage;

    return {
      title: `${essay.title} | Funkash`,
      description: essay.excerpt,
      openGraph: {
        title: essay.title,
        description: essay.excerpt,
        type: "article",
        publishedTime: essay.publishedDate?.toISOString(),
        authors: [essay.author],
        images: [{ url: imageUrl }],
      },
      twitter: {
        card: "summary_large_image",
        title: essay.title,
        description: essay.excerpt,
        images: [imageUrl],
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
