import type { Metadata } from "next";
import "./globals.css";
import { SaaSProvider } from "@/components/SaaSProvider";

export const metadata: Metadata = {
  title: "Flyterial - AI Educational Resource Generator",
  description: "Generate structured teaching and assessment materials instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SaaSProvider>
          {children}
        </SaaSProvider>
      </body>
    </html>
  );
}
