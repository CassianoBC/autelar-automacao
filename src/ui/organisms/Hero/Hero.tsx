import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-[url('/hero.png')] bg-cover h-60 md:h-135 max-w-7xl bg-center relative before:absolute before:bg-[rgba(0,0,0,0.8)] before:inset-0 before:z-0 flex justify-start md:justify-center md:text-center px-12 items-center my-5 rounded-2xl before:rounded-2xl mx-4 md:mx-auto">
            <div className="z-2">
                <h1 className="text-white text-2xl md:text-4xl font-semibold">Título</h1>
                <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <div className="flex gap-2 justify-start md:justify-center">
                    <Link href="#" className="mt-4 bg-[#fe9325] hover:bg-[#f4c082] text-white py-2 px-4 rounded-full cursor-pointer transition-all duration-300">Saiba mais</Link>
                    <Link href="/contato" className="mt-4 border border-white text-white py-2 px-4 rounded-full cursor-pointer transition-all duration-300">Entre em contato</Link>
                </div>
            </div>
        </section>
    )
}