import Logo from "@/ui/atoms/Logo";
import ButtonContact from "@/ui/molecules/ButtonContact/ButtonContact";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center gap-2 py-20 pt-0">
            <Logo width={640} height={360} />
            <p className="text-(--azul) font-bold sm:text-3xl">Onde seu lar encontra o futuro.</p>
            <div className="flex gap-4 mt-6">
                <ButtonContact value="Entre em contato" />
                <Link href="#sobre" className="border border-(--azul) text-(--azul) hover:bg-(--azul) hover:text-white py-2 px-4 text-xs lg:text-lg rounded-full cursor-pointer transition-all duration-300">Saiba mais</Link>
            </div>
        </div>
    )
}