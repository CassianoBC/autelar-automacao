import Link from "next/link";

type ButtonContactProps = {
    value: string
}

export default function ButtonContact({ value }: ButtonContactProps) {
    return (
        <Link href="/contato">
            <button className="bg-[#fe9325] hover:bg-[#f4c082] text-white transition-all duration-300 py-2.5 px-4 rounded-full cursor-pointer font-bold">{value}</button>
        </Link>
    )
}
