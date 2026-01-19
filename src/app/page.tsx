import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Autelar Automação',
  description: 'Empresa especializada em automação residencial e comercial.',
}


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
