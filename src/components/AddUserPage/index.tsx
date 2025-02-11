import { HeadAddUser } from "../HeadAddUser"
import { AddUserForm } from "../AddUserForms"
export const AddUserPage = () =>{
    return(
        <div className="flex flex-col align-middle items-center w-screen px-12 bg-[#F7F7F7]">
            <HeadAddUser />
            <AddUserForm />
        </div>
    )
}