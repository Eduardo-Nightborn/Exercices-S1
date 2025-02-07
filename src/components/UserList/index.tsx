import { UserListInterface } from "../../types/User"
import { CardUser } from "../CardUser"
import './UserList.css'


export const UserList = ({users}:UserListInterface) =>{
    return(
        <div className="containerUserList">
             {users.map((user, index) => (
                  <CardUser key={user.userId} {...user}/>
                ))}
        </div>

    )
        
}