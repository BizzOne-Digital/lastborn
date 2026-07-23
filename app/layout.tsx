import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Last Born Canada Inc. | Air & Sea Freight Canada to Africa",
  description: "LBC – Your trusted freight and logistics partner connecting Canada to Tanzania, Kenya, Uganda & Comoro. Air freight, ocean freight, car shipping and more.",
  keywords: "shipping Canada Tanzania, freight forwarder Canada Africa, air cargo Canada Kenya, sea freight Canada, logistics diaspora",
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
