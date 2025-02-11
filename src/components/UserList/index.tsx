import { UserListInterface } from "@/types/User"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  

export const UserList = ({users}:UserListInterface) => {
    return(

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row justify-between ">
             {users.map((user, index) => (
                  <Card key={index} className="flex flex-row mx-5 my-5 border-none hover:shadow-xl cursor-pointer"> 
                    <CardHeader>
                        <CardTitle>{user.firstName} {user.lastName}</CardTitle>
                        <CardDescription className="text-xs text-[#7F85A2]">{user.role}</CardDescription>
                    </CardHeader>
                    <CardContent className='flex flex-auto justify-center align-middle items-center '>
                        <button className='flex  justify-center' >
                            <img className='buttonCardItemImg' src="/icons/user-card-btn.svg" alt="arrow button" />
                        </button>
                    </CardContent>
                  </Card>
                ))}

        </div>
    )

}