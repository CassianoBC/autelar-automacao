import Image from "next/image";

export default function Footer() {
    const instaAutelar = null;
    const instaDev = "https://www.instagram.com/cassiano__borges";

    return (
        <footer className="h-30 bg-[#05245f] text-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-full gap-1">
                <a href={instaDev} target="_blank"><Image src="/instagram.png" alt="Instagram" width={32} height={32} className="ml-4"/></a>
                <p className="text-[#FE9325]">© 2026 Autelar Automação</p>
                <p className="text-sm text-[#FE9325]"><a href={instaDev} target="_blank" >Desenvolvido por: @Cassiano</a></p>
            </div>
        </footer>
    )
}