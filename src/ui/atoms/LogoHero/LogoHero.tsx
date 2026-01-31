import Image from "next/image";

export default function LogoHero() {
    return (
        <div className="bg-(--azul) p-4 rounded-full">
            <Image src="/casa-moderna.png" alt="Casa Moderna" width={500} height={360} />
        </div>
    )
}
