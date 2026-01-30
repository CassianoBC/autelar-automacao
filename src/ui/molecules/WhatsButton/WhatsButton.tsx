import Icon from "@/ui/atoms/Icons/Whatsapp";
import Link from "next/link";


export default function WhatsButton() {
  const NumeroWhats = "https://api.whatsapp.com/send?phone=5551997240438";

  return (
    <div className="flex fixed justify-center items-center bottom-8 right-8 z-10 cursor-pointer transition-transform hover:scale-110">
      <div className="rounded-full p-4 bg-green-500">
        <Link href={NumeroWhats} target="_blank">
          <Icon width={32} height={32} color="#ffffff" />
        </Link>
      </div>
    </div>
  );
}
