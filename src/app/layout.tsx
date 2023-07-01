import "../styles.css";

export const metadata = {
  title: "UI",
  description: "A bunch of reusable React Components.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
