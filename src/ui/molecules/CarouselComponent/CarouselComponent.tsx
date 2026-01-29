"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/ui/atoms/Shadcn/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"


export default function CarouselComponent() {
    return (
        <div className="flex justify-center items-center my-10">
            <Carousel className="w-full flex max-w-52 sm:max-w-2xl" plugins={[Autoplay({ delay: 3000 })]}>
                <CarouselContent>
                    {Array.from({ length: 7 }).map((_, index) => (
                        <CarouselItem key={index} className="flex items-center justify-center">
                            <Image className="rounded-md object-cover" src={`/carousel-${index + 1}.jpeg`} alt={`Imagem carousel ${index + 1}`} width={640} height={360} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
