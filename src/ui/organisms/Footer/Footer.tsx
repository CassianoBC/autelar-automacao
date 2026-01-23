import Image from "next/image";

export default function Footer() {
    const instaAutelar = null;
    const instaDev = "https://www.instagram.com/cassiano__borges";

    return (
        <footer className="h-40 bg-[#05245f] text-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-full gap-1">
                <a href={instaDev} target="_blank"><Image src="/icons/instagram.png" alt="Instagram" width={48} height={48} className="ml-4"/></a>
                <p className="">© 2026 Autelar Automação</p>
                <p className="text-sm"><a href={instaDev} target="_blank" >Desenvolvido por: @Cassiano</a></p>
            </div>
        </footer>
    )
}