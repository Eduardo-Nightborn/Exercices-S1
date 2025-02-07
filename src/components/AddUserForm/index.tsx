import { TextInput } from "../textInput";
import { useState } from "react";

export const AddUserForm = () => {
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
    return (
        <div className="flex flex-col">
            <p className="mx-12 text-xl mt-5">User information</p>
            <form className="flex flex-wrap" action="">
                <TextInput
                    text="FIRST NAME"
                    value={firstname}
                    onChange={handleFirstNameChange}
                />
                <TextInput
                    text="LAST NAME"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
                <TextInput
                    text="EMAIL"
                    value={email}
                    onChange={handleEmailChange}
                />
                <div className="justify-center items-center mt-3 ">
                    <label className='text-xs text-[#9FA3B9] mx-12 ' htmlFor="role">Role</label>
                    <select
                        id="role"
                        className='focus:outline-0 focus-visible:shadow-2xl flex p-3 px-4 border-1 border-[#8F92A133] rounded mx-12 '
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
