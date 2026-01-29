import Image from "next/image";

export default function Footer() {
    const instaAutelar = "https://www.instagram.com/autelar_";
    const LinkdinDev = "https://www.linkedin.com/in/cassianobc";
    const NumeroWhats = "https://api.whatsapp.com/send?phone=5551997240438"

    return (
        <footer className="py-5 bg-[#05245f] text-white">
            <div className="max-w-7xl mx-auto flex flex-col mt-5 items-center justify-center h-full">
                <div className="flex items-center gap-3">
                    <a href={instaAutelar} target="_blank"><Image src="/icons/instagram.png" alt="Instagram" width={48} height={48} className="ml-4" /></a>
                    <a href={NumeroWhats} target="_blank" className="">(51) 99724-0438</a>
                </div>
                <p className="">atendimento.autelar@gmail.com</p>
                <p className="my-3">© 2026 Autelar Automação</p>

                <p className="text-sm"><a href={LinkdinDev} target="_blank" >Dev: @Cassiano</a></p>
            </div>
        </footer>
    )
}