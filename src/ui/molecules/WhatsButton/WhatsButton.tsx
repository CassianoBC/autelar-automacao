import Image from "next/image";

export default function WhatsButton() {
    const NumeroWhats = "https://api.whatsapp.com/send?phone=5551997240438"

    return (
        <div className="flex fixed justify-center items-center bottom-8 right-8 z-10 cursor-pointer transition-transform hover:scale-110">
            <a href={NumeroWhats} target="_blank">
                <Image src="/whatsapp.png" alt="WhatsApp" width={64} height={64} />
            </a>
        </div>
    )
}