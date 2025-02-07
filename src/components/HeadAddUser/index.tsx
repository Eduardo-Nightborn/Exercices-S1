import './HeadAddUser.css'

export const HeadAddUser = () => {
    return(
        <div className="headUserContainer">
            <div className="containerTxtImg" >
                <img className='arrowIcon' src="/icons/user-card-btn.svg" alt="Arrow Left Icon" />
                <p className='textHeader'>Add new user</p>
            </div>
                <button className='addBtn'>
                    <p>save and add</p>
                </button>
        </div>
    )
}