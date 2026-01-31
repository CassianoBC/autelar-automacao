import Link from "next/link";

type ButtonContactProps = {
    value: string
}

export default function ButtonContact({ value }: ButtonContactProps) {
    return (
        <Link href="#contact">
            <button className="bg-(--laranja) hover:bg-(--laranja-claro) text-white text-xs lg:text-lg transition-all duration-300 py-2.5 px-4 rounded-full cursor-pointer font-bold">{value}</button>
        </Link>
    )
}
