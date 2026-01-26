import Image from "next/image";
import Link from "next/link";


export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Image src="/logo_new.png" width={500} height={500} alt="Logo da Autelar" />
            <p className="text-2xl mt-4">Página não encontrada!</p>
            <Link href="/" className="p-2 mt-5 bg-[#05245f] text-white rounded transition-all duration-300 hover:bg-[#2596be]">Voltar para a página inicial</Link>
        </div>
    )
}