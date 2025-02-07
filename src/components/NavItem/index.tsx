import { NavItem } from "../../types/Component";
import { useNavigate } from "react-router-dom";

export const NavItems = ({ url, icon }: NavItem) => {
    const navigate = useNavigate();

    return (
        <div 
            className="flex justify-center p-3 rounded bg-[#F7F7F7] m-1 mb-3 hover:bg-[#3E6BEC] transition-all duration-300 ease-in-out cursor-pointer group" 
            onClick={() => navigate(url)}
        >
            <img 
                className="filter invert transition-all duration-300 ease-in-out group-hover:brightness-0" 
                src={icon.path} 
                alt={icon.alt} 
            />
        </div>
    );
};
