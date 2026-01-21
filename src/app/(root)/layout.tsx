import WhatsButton from "@/ui/molecules/WhatsButton";
import Footer from "@/ui/organisms/Footer";
import Header from "@/ui/organisms/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <WhatsButton />
      {children}
      <Footer />
    </>
  );
}
