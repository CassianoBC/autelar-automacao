import Link from "next/link";
import ButtonContact from "../ButtonContact";



export default function NavHeader() {
    return (
        <nav className="hidden md:block mr-5">
            <ul className="gap-15 [&>*:last-child]:mr-0 flex lg:text-lg items-center">
                <li className="text-[#05245F] hover:text-[#2596be]">
                    <Link href="#hero">Inicio</Link>
                </li>
                <li className="text-[#05245F] hover:text-[#2596be]">
                    <Link href="#about">Sobre</Link>
                </li>
                <li className="text-[#05245F] hover:text-[#2596be]">
                    <Link href="#services">Serviços</Link>
                </li>
                <ButtonContact value="Peça um orçamento" />
            </ul>
        </nav>
    )
}
