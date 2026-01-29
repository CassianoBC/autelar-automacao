import CarouselComponent from "@/ui/molecules/CarouselComponent/CarouselComponent"


export default function page() {
  return (
    <section>
      <div className="text-center bg-[#05245f] text-white h-30 justify-center items-center flex">
        <h2 className="text-3xl font-bold">Serviços</h2>
      </div>
      <div className="flex flex-col items-center ">
        <div className="text-[#05245f] my-16 text-center max-w-3xl">
          <p className="text-lg mx-3">
            Na Autelar, cada projeto é uma prova do nosso compromisso com o rigor técnico e a inovação. Nosso portfólio reúne soluções personalizadas que transformaram a operação de empresas e o conforto de residências através da automação inteligente e da energia limpa. Navegue pelos nossos cases e veja como integramos tecnologia de ponta para otimizar processos, garantir segurança e, acima de tudo, gerar economia real para nossos clientes. Da concepção à implementação, entregamos eficiência que você pode medir.
          </p>
        </div>
        <CarouselComponent />
      </div>
    </section>
  )
}
