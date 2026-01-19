import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Contato() {
    return (
        <>
            <Header />
            <section className="h-[75.5vh]">
                <div className="flex flex-col items-center gap-8 mx-30 my-5">
                    <h1 className="text-4xl font-bold text-[#05245f]">Entre em contato</h1>
                    <form className="flex flex-col gap-8 max-w-2xl w-full [&>input]:border [&>input]:w-full [&>input]:py-2 [&>input]:px-4 [&>input]:outline-none [&>textarea]:outline-none [&>input]:rounded last:gap-4" >
                        <input required type="text" placeholder="Nome:" />
                        <input required type="email" placeholder="E-mail:" />
                        <input required type="tel" placeholder="Telefone:" />
                        <textarea required className="w-full h-36 px-4 py-2 border resize-none rounded" placeholder="Escreva sua mensagem:" cols={30} rows={10}></textarea>
                        <div className="bg-[#05245f] hover:bg-[#2596be] text-white py-2 px-4 w-48 rounded">
                            <label htmlFor="file-upload" className="cursor-pointer">Anexar conta de luz:</label>
                            <input className="hidden" id="file-upload" type="file" placeholder="" accept=".pdf,.doc,.docx" />
                        </div>
                        <button className="bg-[#05245f] text-white py-2 px-4 w-32 rounded cursor-pointer hover:bg-[#2596be]" type="submit">Enviar</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}