'use client'

import Form from '@/ui/organisms/Form';

export default function Contato() {
    return (
        <>
            <section className="flex min-h-[80vh] items-center justify-center">
                <div className=" flex flex-col items-center gap-8 sm:mx-30 mx-5 my-5 w-full">
                    <h1 className="sm:text-4xl text-2xl font-bold text-[#05245f]">Entre em contato</h1>
                    <Form />
                </div>
            </section>
        </>
    )
}