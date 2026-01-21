import Logo from "@/ui/atoms/Logo";
import Link from "next/dist/client/link";

export default function Header() {
    return (
        <header className="flex items-center h-24 w-full bg-white sticky top-0 z-10 shadow-md">
            <div className="flex justify-between items-center w-full px-8 md:px-0 max-w-7xl mx-auto">
                <Logo  />
                <nav className="hidden md:block">
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
                        <Link href="/contato">
                            <li className="bg-[#fe9325] hover:bg-[#f4c082] text-white transition-all duration-300 py-2.5 px-4 rounded-full cursor-pointer">Peça um orçamento</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}