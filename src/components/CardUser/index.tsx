import { User } from '../../types/User';
import './CardUser.css';

export const CardUser = ( user : User )=>{
    return(
        <div className='containerCardUser'>
            <div className='containerFR'>
                <p className='cardTextName'>{user.firstName} {user.lastName}</p>
                <p className='cardTextRole'>{user.role}</p>
            </div>
            <button className='buttonCardItem'>
                <img className='buttonCardItemImg' src="/icons/user-card-btn.svg" alt="arrow button" />
            </button>
        </div>
    )
}
