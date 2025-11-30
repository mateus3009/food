import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Static App",
  description: "Static Next.js app with Radix UI, Tailwind CSS, React Hook Form, and Zod",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
