import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"
export const HeadAddUser = () =>{
    const navigate = useNavigate();
    return(
        <div className="flex flex-row justify-between align-middle items-center bg-white rounded-xl w-8/9 my-5 p-6 ">
            <div className="flex flex-row">
                <img onClick={()=>navigate("/")} className="rotate-180 mr-3 cursor-pointer" src="/icons/user-card-btn.svg" alt="Arrow BTN" />
                <p>Add new user</p>
            </div>
            <div className="mx-5">
                <Button className="bg-[#52D8B0] text-white text-xs hover:shadow-2xl cursor-pointer">Save and Add</Button>
            </div>
        </div>
    )
}