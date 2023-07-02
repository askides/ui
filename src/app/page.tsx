import { Markdown } from "@/_comp/docs/Markdown";
import { fetchDocOrFail } from "@/lib/content";

export const metadata = {
  metadataBase: new URL("https://ui.renatopozzi.me"),
  title: "askides/ui",
  description: "Extensible React component library built with TailwindCSS.",
  icons: {
    icon: "/icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "askides/ui",
    description: "Extensible React component library built with TailwindCSS.",
    url: "/",
    siteName: "askides/ui",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  const doc = fetchDocOrFail("segments/homepage");

  return (
    <div className="h-full flex-1 overflow-y-auto bg-white px-5 md:px-10 py-6 md:py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">{doc.title}</h2>
        <p className="mt-1 text-lg font-light text-zinc-600">
          {doc.description}
        </p>
      </div>

      <Markdown mdx={doc.body.code} />
    </div>
  );
}
