import { SidebarProvider } from "@/ui/atoms/Shadcn/sidebar";

import AppSidebar from "@/ui/molecules/AppSidebar/AppSidebar";
import WhatsButton from "@/ui/molecules/WhatsButton";
import Footer from "@/ui/organisms/Footer";
import Header from "@/ui/organisms/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider defaultOpen={false} className="flex flex-col">
        <AppSidebar />
        <Header />
        <WhatsButton />
        {children}
        <Footer />
      </SidebarProvider>
    </>
  );
}
