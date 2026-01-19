

export default function Hero() {
    return (
        <section className="bg-[url('/hero.png')] bg-cover h-[calc(100vh-192px)] bg-center relative before:absolute before:bg-[rgba(0,0,0,0.8)] before:inset-0 before:z-0 flex justify-center items-center mx-30 my-5 rounded-4xl before:rounded-4xl">
            <div className="z-2">
                <h1 className="text-white">HERO</h1>
            </div>
        </section>
    )
}