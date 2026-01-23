import Image from "next/image";


export default function MissionsVisionValues() {
    return (
        <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 justify-between items-center">
            <div>
                <p className="text-lg text-center text-[#05245f]">
                    A Autelar une tecnologia e engenharia para oferecer soluções inteligentes em automação e energias renováveis. Desenvolvemos projetos personalizados com foco em eficiência, segurança e redução de custos. Nosso compromisso é transformar desafios em inovação, promovendo o crescimento sustentável de empresas e residências através do uso consciente de recursos.
                </p>
            </div>
            <div>
                <Image className="rounded-lg shadow-2xl" src="/placas.jpeg" alt="Sobre" width={500} height={200} />
            </div>
        </div>
    )
}
