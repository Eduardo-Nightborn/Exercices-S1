import { NavItem } from "../../types/Component";
import { useNavigate } from "react-router-dom";
import './NavItem.css';

export const NavItems = ({ url, icon }: NavItem) => {
    const navigate = useNavigate();

    return (
        <div className="navItem" onClick={() => navigate(url)}>
            <img className="img" src={icon.path} alt={icon.alt} />
        </div>
    );
};
