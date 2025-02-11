import { UserList } from "../UserList";
import { Searchbar } from "../SearchBar";
import { Role , UserListInterface } from "@/types/User";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"

const usersMOCK = [
    {
      "userId": 1,
      "firstName": "David",
      "lastName": "Leclerq",
      "email": "david.leclerq@nightborn.com",
      "role": "admin"
    },
    {
      "userId": 2,
      "firstName": "Matthieu",
      "lastName": "Bocquet",
      "email": "bob.martin@nightborn.com",
      "role": "admin"
    },
    {
      "userId": 3,
      "firstName": "Sharon",
      "lastName": "Dupont",
      "email": "sharon.dupont@nightborn.com",
      "role": "regular"
    },
    {
      "userId": 4,
      "firstName": "Lisa",
      "lastName": "De Groof",
      "email": "lisa.degroof@nightborn.com",
      "role": "admin"
    }
  ];
  const usersListMock: UserListInterface = {
    users: usersMOCK.map(user => ({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: Role[user.role as keyof typeof Role]
    }))
  };

export const HomePage = () =>{
    const [filterText, setFilterText] = useState('');
    const navigate = useNavigate();

  const filteredUsers = usersListMock.users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      user.lastName.toLowerCase().includes(filterText.toLowerCase())
  );
    return(
        <div  className="flex flex-col align-middle items-center w-screen bg-[#F7F7F7] pt-5">
            <div className="flex flex-wrap lg:justify-around w-screen">
                <div className="flex flex-col">
                    <h1 className="text-xl p-3 text-[#1E1F20]">Our Users</h1>
                    <Searchbar filterText={filterText} onFilterTextChange={setFilterText} />
                </div>
                <div className="flex items-center">
                    <Button onClick={()=> navigate("/addUser")} className="p-5 py-6 bg-white rounded-xl hover:shadow-2xl cursor-pointer"> 
                        <img src="/icons/plus.svg" alt="Plus Icons" />
                        add new user
                    </Button>
                </div>
            </div>
            <UserList users={filteredUsers} />
        </div>
    )
}