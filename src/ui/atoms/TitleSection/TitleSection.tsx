
type Props = {
    children: string;
}

export default function TitleSection({ children }: Props) {
    return (
        <div className="text-center bg-(--azul) text-white h-30 justify-center items-center flex">
            <h2 className="text-3xl font-bold">{children}</h2>
        </div>
    )
}
