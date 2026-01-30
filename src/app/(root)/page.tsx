import LogoHero from "@/ui/atoms/LogoHero/LogoHero";
import Hero from "@/ui/organisms/Hero";
import MissionsVisionValues from "@/ui/organisms/MissionsVisionValues";

export default function Home() {
  return (
    <>
      <section className="my-10 lg:min-h-[80vh] flex items-center">
        <main className="flex-1">
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
            <Hero />
            <LogoHero />
          </section>
          <MissionsVisionValues />
        </main>
      </section>
    </>
  );
}
