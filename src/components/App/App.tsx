import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <SidebarProvider >
      <main className="flex flex-row w-screen h-screen">
        <AppSidebar/>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
    
  );
}

export default App;