import type { Metadata, Viewport } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mayiwei.top"),
  title: "Mayiwei — Portfolio",
  description: "Personal portfolio of Mayiwei.",
  openGraph: {
    title: "Mayiwei — Portfolio",
    description: "Personal portfolio of Mayiwei.",
    url: "https://mayiwei.top",
    siteName: "Mayiwei",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f1f0ea",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${archivo.variable} ${newsreader.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
