import { User } from '../../types/User';

export const CardUser = ( user : User )=>{
    return(
        <div className='flex flex-row justify-around px-12 py-3 mx-20 my-4 bg-white rounded-xl hover:shadow-2xl cursor-pointer'>
            <div className='flex flex-col mr-4'>
                <p className='cardTextName'>{user.firstName} {user.lastName}</p>
                <p className='cardTextRole'>{user.role}</p>
            </div>
            <button className='flex ml-5 items-center '>
                <img className='buttonCardItemImg' src="/icons/user-card-btn.svg" alt="arrow button" />
            </button>
        </div>
    )
}
