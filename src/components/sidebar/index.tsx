import { useNavigate } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: "/icons/profile.svg",
  },
  {
    url: "/addUser",
    icon: "/icons/clients.svg",
  },
  {
    title: "Settings",
    url: "#",
    icon: "/icons/settings.svg",
  },
  {
    title: "Coin",
    url: "#",
    icon: "/icons/money.svg",
  },
]

export function AppSidebar() {

  const navigate = useNavigate();

  return (
    <Sidebar className="flex flex-col bg-white border-none h-screen">
      <SidebarContent>
        <SidebarGroup className="flex flex-col h-screen ">
          <img onClick={() => navigate("/")} className="my-4 cursor-pointer" src="/icons/logo.svg" alt="" />
            <SidebarMenu>
              {items.map((item) => (
               <SidebarMenuItem
               key={item.title}
               onClick={() => navigate(item.url)}
               className="flex justify-center p-3 rounded bg-[#F7F7F7] m-1 mb-3 hover:bg-[#3E6BEC] transition-all duration-300 ease-in-out cursor-pointer"
             >
               <img
                 className="filter invert transition-all duration-300 ease-in-out hover:brightness-0"
                 src={item.icon}
                 alt={item.title}
               />
             </SidebarMenuItem>
              ))}
            </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarMenuItem
                className="flex justify-center p-3 rounded bg-[#F7F7F7] m-1 mb-3 hover:bg-[#3E6BEC] transition-all duration-300 ease-in-out cursor-pointer"
              >
                <img
                  className="filter invert transition-all duration-300 ease-in-out hover:brightness-0"
                  src="/icons/sign-out.svg"
                  alt="Sing Out Icon"
                />
           </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
