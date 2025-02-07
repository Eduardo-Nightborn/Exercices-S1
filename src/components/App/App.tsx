import SideBar from "../SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main className="flex flex-row">
        <SideBar/>
        <Outlet />
      </main>
    </>
    
  );
}

export default App;
