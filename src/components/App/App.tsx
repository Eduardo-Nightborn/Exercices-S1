import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <SidebarProvider>
      <main className="flex flex-row ">
        <AppSidebar/>
        <Outlet />
      </main>
    </SidebarProvider>
    
  );
}

export default App;