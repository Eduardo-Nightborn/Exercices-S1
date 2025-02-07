import { NavItems } from "../NavItem";



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
    <div className="flex flex-col p-6 justify-between h-screen ">
        <div >
          <img className="p-1"  src="/icons/logo.svg" alt="logo" />
            {navItemsList.map((item, index) => (
                <NavItems key={index} url={item.url} icon={item.icon} />
            ))}
        </div>
        <div className="flex">
          <NavItems url={'/'} icon={{path:'/icons/sign-out.svg' ,alt:'Sign Out Icon'}} />
      </div>
    </div>
  );
}

  
  export default SideBar;
  