import { NavItems } from "../NavItem";

import './SideBar.css'


const navItemsList = [
  
{
  url:'/',
  icon: {path:'/icons/clients.svg' ,alt:'Clients Icon'}
},
{
  url:'/addUser',
  icon: {path:'/icons/profile.svg' ,alt:'Profile Icon'}
},
{
  url:'/',
  icon: {path:'/icons/settings.svg' ,alt:'Settings Icon'}
},
{
  url:'/',
  icon: {path:'/icons/money.svg' ,alt:'money Icon'}
},
]



function SideBar() {
  return (
    <div className="sideBarContainer">
        <div className="smallContainerNavItem" >
          <img  src="/icons/logo.svg" alt="logo" />
            {navItemsList.map((item, index) => (
                <NavItems key={index} url={item.url} icon={item.icon} />
            ))}
        </div>
        <div className="signOut">
          <NavItems url={'/'} icon={{path:'/icons/sign-out.svg' ,alt:'Sign Out Icon'}} />
      </div>
    </div>
  );
}

  
  export default SideBar;
  