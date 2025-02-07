import React, { useState } from "react";
import { UserList } from "../UserList";
import { UserListInterface , Role , User} from "../../types/User";
import { SearchBar } from "../SearchBar";
import { useNavigate } from "react-router-dom";

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

console.log(usersListMock);


const HomePage: React.FC = () => {

  const [filterText, setFilterText] = useState('');
  const navigate = useNavigate();

  const filteredUsers = usersListMock.users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      user.lastName.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="w-screen flex flex-col align-middle bg-[#F7F7F7]">
      <div className="flex flex-row mt-7  justify-around">
        <div>
          <h1 className="m-3 text-2xl">Our Users</h1>
          <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow"></div> {/* Spacer */}
            <button
              className="flex flex-row justify-center items-center bg-white p-3 rounded-2xl hover:shadow-2xl cursor-pointer"
              onClick={() => navigate("/addUser")}
            >
              <img src="/icons/plus.svg" alt="Add Button" />
              <p className="ml-3">add new user</p>
          </button>
      </div>
              
      </div>
      <UserList users={filteredUsers}/>
    </div>
  );
};

export default HomePage;
