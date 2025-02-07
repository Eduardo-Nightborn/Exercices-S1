

export const HeadAddUser = () => {
    return(
        <div className="flex flex-row justify-between bg-white p-8 rounded-xl">
            <div className="flex flex-row " >
                <img className='m-1 rotate-180 ' src="/icons/user-card-btn.svg" alt="Arrow Left Icon" />
                <p className='m-2 text-xl'>Add new user</p>
            </div>
                <button className=' px-6 py-1 rounded-xl text-white hover:shadow-2xl bg-[#52D8B0] cursor-pointer'>
                    <p className="text-xs">save and add</p>
                </button>
        </div>
    )
}