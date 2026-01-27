import Logo from "@/ui/atoms/Logo";
import ButtonContact from "@/ui/molecules/ButtonContact/ButtonContact";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center gap-2 py-20">
            <Logo width={640} height={360} />
            <p className="text-[#05245f] font-bold sm:text-3xl">Onde seu lar encontra o futuro.</p>
            <div className="flex gap-4 mt-6">
                <ButtonContact value="Entre em contato" />
                <Link href="/sobre" className="border border-[#05245f] text-[#05245F] hover:bg-[#05245f] hover:text-white py-2 px-4 rounded-full cursor-pointer transition-all duration-300">Saiba mais</Link>
            </div>
        </div>
    )
}