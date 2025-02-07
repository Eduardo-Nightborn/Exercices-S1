import { AddUserForm } from "../AddUserForm";
import { HeadAddUser } from "../HeadAddUser";

function AddUserPage() {
    return (
      <div className="w-screen bg-[#F7F7F7] p-8">
          <HeadAddUser />
          <AddUserForm/>
      </div>
    );
  }
  
  export default AddUserPage;
  