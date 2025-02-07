import { UserListInterface } from "../../types/User"
import { CardUser } from "../CardUser"


export const UserList = ({users}:UserListInterface) =>{
    return(
        <div className="flex flex-wrap mx-10 my-10">
             {users.map((user, index) => (
                  <CardUser key={user.userId} {...user}/>
                ))}
        </div>

    )
        
}