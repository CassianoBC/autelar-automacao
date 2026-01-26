"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

import Autoplay from "embla-carousel-autoplay"

export default function page() {
  return (
    <section>
      <div className="text-center bg-[#05245f] text-white h-30 justify-center items-center flex">
        <h2 className="text-3xl font-bold">Serviços</h2>
      </div>
      <div className="flex flex-col items-center ">
        <div className="text-[#05245f] my-16 text-center max-w-3xl">
          <p className="text-lg">
            Na Autelar, cada projeto é uma prova do nosso compromisso com o rigor técnico e a inovação. Nosso portfólio reúne soluções personalizadas que transformaram a operação de empresas e o conforto de residências através da automação inteligente e da energia limpa. Navegue pelos nossos cases e veja como integramos tecnologia de ponta para otimizar processos, garantir segurança e, acima de tudo, gerar economia real para nossos clientes. Da concepção à implementação, entregamos eficiência que você pode medir.
          </p>
        </div>
        <div className="flex justify-center items-center my-10">
          <Carousel className="w-full flex sm:max-w-2xl" plugins={[Autoplay({ delay: 3000 })]}>
            <CarouselContent>
              {Array.from({ length: 7 }).map((_, index) => (
                <CarouselItem key={index} className="flex items-center justify-center">
                  <Image className="rounded-md object-cover" src={`/carousel-${index + 1}.jpeg`} alt={`Imagem carousel ${index + 1}`} width={640} height={360} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
