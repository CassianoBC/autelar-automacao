import MissionsVisionValues from "@/ui/organisms/MissionsVisionValues";
import About from "@/ui/organisms/About";

export default function page() {
  return (
    <section >
      <div className="text-center bg-[#05245f] text-white h-30 justify-center items-center flex">
        <h2 className="text-3xl font-bold">Sobre a Autelar</h2>
      </div>
      <About />
      <hr className="w-[90%] flex mx-auto my-8 border-[#05245f]" />
      <MissionsVisionValues />
    </section>
  )
}
