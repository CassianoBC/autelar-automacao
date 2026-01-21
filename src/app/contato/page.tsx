'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { InputMask } from '@react-input/mask';
import { useState } from "react";

export default function Contato() {
    const emailSubmit = "https://formsubmit.co/cassianocosta12357@gmail.com"

    const [fileName, setFileName] = useState("");


    return (
        <>
            <Header />
            <section className="flex h-[80vh] items-center justify-center">
                <div className=" flex flex-col items-center gap-8 mx-30 my-5 w-full">
                    <h1 className="text-4xl font-bold text-[#05245f]">Entre em contato</h1>
                    <form action={emailSubmit} encType="multipart/form-data" method="post" className="flex flex-col gap-8 max-w-2xl w-full [&>input]:border [&>input]:w-full [&>input]:py-2 [&>input]:px-4 [&>input]:outline-none [&>textarea]:outline-none [&>input]:rounded last:gap-4" >
                        <input required type="text" name="nome" placeholder="Nome:" />
                        <input required type="email" name="email" placeholder="E-mail:" />
                        <InputMask id="phone" mask="(__) _____-____" replacement={{ _: /\d/ }} name="telefone" placeholder="Telefone:" />
                        <textarea required className="w-full h-40 px-4 py-2 border resize-none rounded" name="mensagem" placeholder="Escreva sua mensagem:" cols={30} rows={10}></textarea>
                        <div>
                            <p className="text-sm">Anexe abaixo sua conta de luz:</p>
                            <div className="text-[#05245f] hover:bg-[#2596be] border border-[#05245f]  py-2 px-4 w-full cursor-pointer rounded">
                                <label htmlFor="file-upload" className="cursor-pointer">Anexar: {fileName}</label>
                                <input className="hidden" id="file-upload" type="file" name="document" accept=".pdf,.doc,.docx, .png, .jpg, .jpeg" onChange={(e) => setFileName(e.target.files ? e.target.files[0].name : "")} />
                            </div>
                        </div>
                        <button className="bg-[#05245f] text-white py-2 px-4 w-32 rounded cursor-pointer hover:bg-[#2596be]" type="submit">Enviar</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}