import Link from "next/link";
import ButtonContact from "../ButtonContact";



export default function NavHeader() {
    return (
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
                <ButtonContact value="Peça um orçamento" />
            </ul>
        </nav>
    )
}
