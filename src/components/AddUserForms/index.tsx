
import { Input } from "@/components/ui/input"
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { InputForms } from "../InputUserForms";



  
export const AddUserForm = () =>{
    const [firstname, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value);
    };
    // console.log("Firsname " , firstname);
    // console.log("LastName " , lastName);
    // console.log("email " , email);
    // console.log("role" , role);

    return(
        <div className="flex flex-col">
        <p className="mx-12 text-xl mt-5">User information</p>
        <form className="grid grid-cols-3 gap-12 " action="">
            <div>
            <label htmlFor=""></label>
            <InputForms
                text="FIRST NAME"
                value={firstname}
                onChange={handleFirstNameChange}
            />
            </div>
           
            <InputForms
                text="LAST NAME"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <InputForms
                text="EMAIL"
                value={email}
                onChange={handleEmailChange}
            />
                <div className="justify-center items-center   ">
                    <label className='text-xs m-5  text-[#9FA3B9]' htmlFor="role">Role</label>
                    <select
                        id="role"
                        className='focus:outline-0 focus-visible:shadow-2xl flex p-3 px-4 border-1 border-[#8F92A133] rounded mx-5 px-12 '
                        name="Select Role"
                        value={role}
                        onChange={handleRoleChange}
                        required
                    >
                        <option value="">Select Role</option>
                        <option value="admin">Administrator</option>
                        <option value="regular">Regular User</option>
                    </select>
                </div>
        </form>
    </div>
);
};