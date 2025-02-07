import { AddUserForm } from "../AddUserForm";
import { HeadAddUser } from "../HeadAddUser";
import './AddUserPage.css'

function AddUserPage() {
    return (
      <div className="app-container containerUserPage">
          <HeadAddUser />
          <AddUserForm/>
      </div>
    );
  }
  
  export default AddUserPage;
  