import Logo from "@/ui/atoms/Logo";
import NavHeader from "@/ui/molecules/NavHeader";

export default function Header() {
    return (
        <header className="flex items-center h-24 w-full bg-white sticky top-0 z-10 shadow-md">
            <div className="flex justify-between items-center w-full px-8 md:px-0 max-w-7xl mx-auto">
                <Logo width={240} height={49} />
                <NavHeader />
            </div>
        </header>
    )
}