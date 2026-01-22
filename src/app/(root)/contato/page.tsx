'use client'

import Form from '@/ui/organisms/Form';

export default function Contato() {
    return (
        <>
            <section className="flex h-[80vh] items-center justify-center">
                <div className=" flex flex-col items-center gap-8 mx-30 my-5 w-full">
                    <h1 className="text-4xl font-bold text-[#05245f]">Entre em contato</h1>
                    <Form />
                </div>
            </section>
        </>
    )
}