import Link from "next/dist/client/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center h-24 w-full bg-white sticky top-0 z-10 shadow-md">
            <div className="flex justify-between items-center w-full px-8 max-w-7xl mx-auto">
                <Image className="" width={300} height={250} src="/logo.png" alt="autelar-logo" />
                <nav>
                    <ul className="gap-20 [&>*:last-child]:mr-0 flex items-center">
                        <li className="text-[#05245F] hover:text-[#2596be]">
                            <Link href="/">Inicio</Link>
                        </li>
                        <li className="text-[#05245F] hover:text-[#2596be]">
                            <Link href="/sobre">Sobre</Link>
                        </li>
                        <li className="text-[#05245F] hover:text-[#2596be]">
                            <Link href="/servicos">Serviços</Link>
                        </li>
                        <Link href="/pages/contato">
                            <li className="bg-[#fe9325] hover:bg-[#f4c082] p-4 rounded-full cursor-pointer">Peça um orçamento</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}