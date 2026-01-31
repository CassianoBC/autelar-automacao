import { InputMask } from "@react-input/mask"
import { useState } from "react";



export default function Form() {
    const emailSubmit = "https://formsubmit.co/atendimento.autelar@gmail.com"

    const [fileName, setFileName] = useState("");

    return (
        <form action={emailSubmit} encType="multipart/form-data" method="post" className="flex flex-col gap-8 max-w-2xl w-full [&>input]:border [&>input]:w-full [&>input]:py-2 [&>input]:px-4 [&>input]:sm:my-0 [&>input]:outline-none [&>textarea]:outline-none [&>input]:rounded last:gap-4" >
            <input required type="text" name="nome" placeholder="Nome:" />
            <input required type="email" name="email" placeholder="E-mail:" />
            <InputMask id="phone" mask="(__) _____-____" replacement={{ _: /\d/ }} name="telefone" placeholder="Telefone: ex (99) 99999-9999" />
            <textarea required className="w-full h-40 px-4 py-2 border resize-none rounded" name="mensagem" placeholder="Escreva sua mensagem:" cols={30} rows={10}></textarea>
            <div className="w-full flex flex-col gap-1">
                <p className="text-sm">Clique abaixo para anexar sua conta de luz:</p>
                <label htmlFor="file-upload" className="cursor-pointer w-full text-(--azul) hover:bg-[#2596be] border border-(--azul) py-2 px-4 rounded ">Anexar: {fileName}</label>
                <input className="hidden" id="file-upload" type="file" name="document" accept=".pdf,.doc,.docx, .png, .jpg, .jpeg" onChange={(e) => setFileName(e.target.files ? e.target.files[0].name : "")} />
            </div>
            <button className="bg-[#fe9325] hover:bg-[#f4c082] transition-all duration-300 text-white py-2 px-4 w-32 rounded cursor-pointer" type="submit">Enviar</button>
        </form>
    )
}
