import Image from "next/image";

export default function MissionsVisionValues() {
    return (
        <div className="mx-auto text-[#05245f]">
            <div className="flex flex-col items-center text-center md:col-span-2">
                <h3 className="text-2xl font-bold">Engenharia que transforma tecnologia em eficiência</h3>
                <p className="text-lg max-w-3xl ">Criamos projetos personalizados, focados em eficiência, segurança e redução de custos, sempre alinhados às necessidades de cada cliente.</p>
            </div>
            <div className="bg-zinc-200">
                <div className="mt-12 grid grid-cols-1 items-center md:grid-cols-3 gap-8 w-full mx-auto text-center place-items-center rounded-2xl p-5 max-w-7xl">
                    <div className="flex flex-col max-w-75 w-full items-center p-6 text-center rounded shadow-2xl bg-white transition-all duration-300 hover:scale-105">
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
            <div className="bg-[#05245f] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-8 w-full mx-auto text-center place-items-center rounded-2xl p-5 py-10 max-w-7xl">
                        <div className="flex flex-col max-w-75 w-full items-center p-6 text-center rounded shadow-2xl bg-yellow-500 transition-all duration-300 hover:scale-105">
                            <Image src="/icons/engineering.png" alt="Engrenagem" width={64} height={64} />
                            <h4 className="font-bold">Missão</h4>
                            <p>Proporcionar inteligência e eficiência por meio de soluções personalizadas em automação e energias renováveis</p>
                        </div>
                        <div className="flex flex-col max-w-75 w-full items-center p-6 text-center rounded shadow-2xl bg-yellow-500 transition-all duration-300 hover:scale-105">
                            <Image src="/icons/engineering.png" alt="Engrenagem" width={64} height={64} />
                            <h4 className="font-bold">Missão</h4>
                            <p>Proporcionar inteligência e eficiência por meio de soluções personalizadas em automação e energias renováveis</p>
                        </div>
                        <div className="flex flex-col max-w-75 w-full items-center p-6 text-center rounded shadow-2xl bg-yellow-500 transition-all duration-300 hover:scale-105">
                            <Image src="/icons/engineering.png" alt="Engrenagem" width={64} height={64} />
                            <h4 className="font-bold">Missão</h4>
                            <p>Proporcionar inteligência e eficiência por meio de soluções personalizadas em automação e energias renováveis</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto px-50 place-items-center">
                        <div className="flex flex-col max-w-75 w-full items-center p-6 text-center rounded shadow-2xl bg-yellow-500 transition-all duration-300 hover:scale-105">
                            <Image src="/icons/engineering.png" alt="Engrenagem" width={64} height={64} />
                            <h4 className="font-bold">Missão</h4>
                            <p>Proporcionar inteligência e eficiência por meio de soluções personalizadas em automação e energias renováveis</p>
                        </div>
                        <div className="flex flex-col max-w-75 w-full items-center p-6 text-center rounded shadow-2xl bg-yellow-500 transition-all duration-300 hover:scale-105">
                            <Image src="/icons/engineering.png" alt="Engrenagem" width={64} height={64} />
                            <h4 className="font-bold">Missão</h4>
                            <p>Proporcionar inteligência e eficiência por meio de soluções personalizadas em automação e energias renováveis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
