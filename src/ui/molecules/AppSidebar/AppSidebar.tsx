"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/ui/atoms/Shadcn/sidebar"
import ButtonContact from "../ButtonContact"

const items = [
    {
        title: "Inicio",
        url: "/",
    },
    {
        title: "Sobre",
        url: "#about",
    },
    {
        title: "Serviços",
        url: "#services",
    },
]


export default function AppSidebar() {
    return (
        <Sidebar className="absolute z-1000" side="left">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="mb-5">Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="">
                            {items.map((item) => (
                                <SidebarMenuItem className="mb-5" key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <ButtonContact value="Entre em Contato" />
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
