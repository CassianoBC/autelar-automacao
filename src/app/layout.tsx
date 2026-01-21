import WhatsButton from "@/ui/molecules/WhatsButton";
import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Autelar Automação',
  description: 'Empresa especializada em automação residencial e comercial.',
  icons: {
    icon: [
      { url: '/icone_autelar.png', type: 'image/png' }
    ],
    shortcut: '/icone_autelar.png',
    apple: '/icone_autelar.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
