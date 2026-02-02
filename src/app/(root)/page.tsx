"use client";

import LogoHero from "@/ui/atoms/LogoHero/LogoHero";
import TitleSection from "@/ui/atoms/TitleSection/TitleSection";
import CarouselComponent from "@/ui/molecules/CarouselComponent";
import About from "@/ui/organisms/About";
import Form from "@/ui/organisms/Form";
import Hero from "@/ui/organisms/Hero";
import MissionsVisionValues from "@/ui/organisms/MissionsVisionValues";

export default function Home() {
  return (
    <>
      <div className=" flex items-center">
        <main className="flex-1">
          <section id="hero" className="max-w-7xl mx-auto px-4 my-20 lg:min-h-[80vh] sm:px-6 lg:px-8 flex flex-col mt-10 lg:flex-row items-center justify-between gap-8">
            <Hero />
            <LogoHero />
          </section>
          <section id="about" className="scroll-mt-24 relative z-1">
            <TitleSection>Sobre a Autelar</TitleSection>
            <About />
            <hr className="w-[90%] flex mx-auto sm:my-8 border-(--azul)" />
            <MissionsVisionValues />
          </section>
          <section id="services" className="scroll-mt-24 relative z-1">
            <TitleSection>Nossos Serviços</TitleSection>
            <div className="flex flex-col items-center ">
              <div className="text-(--azul) my-16 text-center max-w-3xl">
                <p className="text-lg mx-3">
                  Na Autelar, cada projeto é uma prova do nosso compromisso com o rigor técnico e a inovação. Nosso portfólio reúne soluções personalizadas que transformaram a operação de empresas e o conforto de residências através da automação inteligente e da energia limpa. Navegue pelos nossos cases e veja como integramos tecnologia de ponta para otimizar processos, garantir segurança e, acima de tudo, gerar economia real para nossos clientes. Da concepção à implementação, entregamos eficiência que você pode medir.
                </p>
              </div>
              <CarouselComponent />
            </div>
          </section>
          <section id="contact" className="scroll-mt-24 relative z-1">
            <TitleSection>Fale Conosco</TitleSection>
            <div className="lg:min-h-[80vh] flex flex-col items-center justify-center sm:mx-30 mx-5 my-25">
              <h2 className="mb-10 text-(--azul) font-bold text-3xl">Entre em contato</h2>
              <Form />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
