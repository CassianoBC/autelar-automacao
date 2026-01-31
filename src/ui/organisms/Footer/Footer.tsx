import IconInsta from "@/ui/atoms/Icons/Instagram";
import IconWhats from "@/ui/atoms/Icons/Whatsapp";
import Link from "next/link";

export default function Footer() {
    const instaAutelar = "https://www.instagram.com/autelar_";
    const LinkdinDev = "https://www.linkedin.com/in/cassianobc";
    const NumeroWhats = "https://api.whatsapp.com/send?phone=5551997240438"

    return (
        <footer className="py-5 bg-(--azul) text-white">
            <div className="max-w-7xl mx-auto flex flex-col mt-5 items-center justify-center h-full">
                <div className="flex items-center gap-3 my-2">
                    <Link href={instaAutelar} target="_blank">
                        <IconInsta />
                    </Link>
                    <Link href={NumeroWhats} target="_blank">
                        <IconWhats width={32} height={32} />
                    </Link>
                </div>
                <p className="text-sm my-4 hover:text-(--laranja)"><a href={LinkdinDev} target="_blank" >Desenvolvido por: @Cassiano</a></p>
                <p className="my-3">© 2026 Autelar Automação</p>
            </div>
        </footer>
    )
}