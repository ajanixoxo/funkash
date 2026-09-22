import { Metadata } from "next";
import { headers } from "next/headers";
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
        title: "Publication Not Found | Tharwa Funkash Technology",
      };
    }

    const headersList = await headers();
    const host = headersList.get("host") || "tharwafunkash.com";
    const protocol = host.includes("localhost") ? "http" : "https";
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || `${protocol}://${host}`;
    
    const fallbackImage = `${baseUrl}/logo.png`;
    const imageUrl = essay.coverImage ? `${baseUrl}/api/essays/${essay._id}/cover` : fallbackImage;

    return {
      title: `${essay.title} | Tharwa Funkash Technology`,
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
    console.error("Error generating metadata for media:", error);
    return {
      title: "Media | Tharwa Funkash Technology",
    };
  }
}

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
