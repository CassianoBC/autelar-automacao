import Logo from "@/ui/atoms/Logo";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-[url('/hero.png')] bg-cover h-60 md:h-135 max-w-7xl bg-center relative before:absolute before:bg-[rgba(0,0,0,0.9)] before:inset-0 before:z-0 flex justify-start md:justify-center md:text-center px-12 items-center my-5 rounded-2xl before:rounded-2xl mx-4 md:mx-auto">
            <div className="z-2">
                <Logo width={700} height={135} />
                <p className="text-[#05245F] text-3xl font-bold">Onde o seu lar encontra o futuro.</p>

                <div className="flex gap-2 justify-start md:justify-center">
                    <Link href="#" className="mt-4 bg-[#fe9325] hover:bg-[#f4c082] text-white py-2 px-4 rounded-full cursor-pointer transition-all duration-300">Saiba mais</Link>
                    <Link href="/contato" className="mt-4 border border-white text-white py-2 px-4 rounded-full cursor-pointer transition-all duration-300">Entre em contato</Link>
                </div>
            </div>
        </section>
    )
}