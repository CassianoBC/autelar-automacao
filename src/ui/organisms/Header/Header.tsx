"use client";

import Logo from "@/ui/atoms/Logo";
import NavHeader from "@/ui/molecules/NavHeader";

import { useEffect, useState } from 'react'
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/ui/atoms/Shadcn/sidebar";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();
    const isHomePage = pathname === '/';


    useEffect(() => {
        if (!isHomePage) return;

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    const logoVisible = !isHomePage || scrolled;


    return (
        <header className="flex items-center h-24 w-full bg-white sticky top-0 z-10 shadow-md">
            <div className="flex justify-between items-center w-full px-8 md:px-0 max-w-7xl mx-auto">
                <div className={logoVisible ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 transition-opacity duration-500'}>
                    <Logo width={240} height={49} />
                </div>
                <div className="flex items-center">
                    <div className="block md:hidden">
                        <SidebarTrigger size="icon-sm" />
                    </div>
                    <div className="hidden md:flex">
                        <NavHeader />
                    </div>
                </div>
            </div>
        </header>
    )
}

