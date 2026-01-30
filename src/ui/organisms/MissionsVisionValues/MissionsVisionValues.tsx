import ButtonContact from "@/ui/molecules/ButtonContact";
import Image from "next/image";

export default function MissionsVisionValues() {
    return (
        <section id="about" className="mx-auto text-[#05245f]">
            <div className="flex flex-col items-center text-center md:col-span-2 my-20">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Engenharia que transforma tecnologia em eficiência</h3>
                <p className="text-lg max-w-3xl ">Criamos projetos personalizados, focados em eficiência, segurança e redução de custos, sempre alinhados às necessidades de cada cliente.</p>
            </div>
            <div className="bg-zinc-200">
                <div className="mt-12 grid grid-cols-1 items-center md:grid-cols-3 gap-8 w-full mx-auto text-center place-items-center rounded-2xl p-15 max-w-7xl">
                    <div className="flex flex-col max-w-75  items-center p-6 text-center rounded shadow-2xl bg-white transition-all duration-300 hover:scale-105">
                        <Image src="/icons/engineering.png" alt="Engrenagem" width={64} height={64} />
                        <h4 className="font-bold">Missão</h4>
                        <p>Proporcionar inteligência e eficiência por meio de soluções personalizadas em automação e energias renováveis</p>
                    </div>
                    <div className="flex flex-col max-w-75 w-full items-center p-6 text-center rounded shadow-2xl bg-white transition-all duration-300 hover:scale-105">
                        <Image src="/icons/rocket.png" alt="Foguete" width={64} height={64} />
                        <h4 className="font-bold">Visão</h4>
                        <p>Ser referência nacional em inovação e rigor técnico, liderando a transição para um futuro sustentável</p>
                    </div>
                    <div className="flex flex-col max-w-75 w-full items-center p-6 text-center rounded shadow-2xl bg-white transition-all duration-300 hover:scale-105">
                        <Image src="/icons/holding-hand.png" alt="Mão segurando planta" width={64} height={64} />
                        <h4 className="font-bold">Valores</h4>
                        <div className="text-left">
                            <div className="flex items-center gap-1 text-start">
                                <Image src="/icons/yes.png" alt="Valores" width={16} height={16} />
                                <p>Inovação sustentável</p>
                            </div>
                            <div className="flex items-center gap-1 text-start">
                                <Image src="/icons/yes.png" alt="Valores" width={16} height={16} />
                                <p>Foco no cliente</p>
                            </div>
                            <div className="flex items-center gap-1 text-start">
                                <Image src="/icons/yes.png" alt="Valores" width={16} height={16} />
                                <p>Integridade e transparência</p>
                            </div>
                            <div className="flex items-center gap-1 text-start">
                                <Image src="/icons/yes.png" alt="Valores" width={16} height={16} />
                                <p>Eficiência</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className="bg-[#05245f] text-white py-15">
                <div className="max-w-3xl flex flex-col mx-auto gap-15 px-5">
                    <div className="flex flex-col items-start text-start">
                        <div className="flex items-center gap-2 border-b-2">
                            <Image src="/icons/recycle.svg" alt="Mão segurando planta" width={28} height={28} />
                            <h2 className="text-2xl font-bold">Inovação sustentável</h2>
                        </div>
                        <p className="text-lg">Buscar tecnologias modernas que gerem valor a longo prazo com responsabilidade ambiental.</p>
                    </div>
                    <div className="flex flex-col items-start text-start">
                        <div className="flex items-center gap-2 border-b-2">
                            <Image src="/icons/user.svg" alt="Mão segurando planta" width={32} height={32} />
                            <h2 className="text-2xl font-bold">Foco no cliente</h2>
                        </div>
                        <p className="text-lg">Soluções sob medida que transformam desafios em resultados concretos.</p>
                    </div>
                    <div className="flex flex-col items-start text-start">
                        <div className="flex items-center gap-2 border-b-2">
                            <Image src="/icons/shield-checked.svg" alt="Mão segurando planta" width={28} height={28} />
                            <h2 className="text-2xl font-bold">Integridade e transparência</h2>
                        </div>
                        <p className="text-lg">Atuação ética e clara em todos os processos.</p>
                    </div>
                    <div className="flex flex-col items-start text-start">
                        <div className="flex items-center gap-2 border-b-2">
                            <Image src="/icons/RPM.svg" alt="Mão segurando planta" width={32} height={32} />
                            <h2 className="text-2xl font-bold">Eficiência</h2>
                        </div>
                        <p className="text-lg">Otimização para máximo desempenho com menor consumo de recursos.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center text-center my-20 gap-5">
                <p className="text-3xl mb-3">Pronto para transformar sua casa ou empresa com inteligência e eficiência?</p>
                <ButtonContact value="Entre em contato" />
            </div>
        </section>
    )
}
