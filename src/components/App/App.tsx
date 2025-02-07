import SideBar from "../SideBar";
import { Outlet } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <main className="container">
        <SideBar/>
        <Outlet />
      </main>
    </>
    
  );
}

export default App;
