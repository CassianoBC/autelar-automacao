import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center h-24  w-full bg-white sticky top-0 z-10">
            <div className="flex justify-between items-center w-full mx-30">
                <Image className="" width={300} height={250} src="/logo.png" alt="autelar-logo" />
                <nav>
                    <ul className="gap-20 [&>*:last-child]:mr-0 flex items-center">
                        <li className="text-[#05245F] hover:text-[#2596be]">
                            <a href="#">Inicio</a>
                        </li>
                        <li className="text-[#05245F] hover:text-[#2596be]">
                            <a href="/sobre">Sobre</a>
                        </li>
                        <li className="text-[#05245F] hover:text-[#2596be]">
                            <a href="/servicos">Serviços</a>
                        </li>
                        <li className="text-[#05245F] hover:text-[#2596be]">
                            <a href="/contato">Contato</a>
                        </li>
                        <li className="bg-[#fe9325] hover:bg-[#f4c082] p-4 rounded-full cursor-pointer">
                            <a href="#">Peça um orçamento</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}