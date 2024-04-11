import { memo } from "react"



const UserCard = memo(({name, email, phone,website,address})=>{
    return(
        <div className="flex items-center mb-4  justify-center">
    
    <div className="max-w-md">
        <div className="bg-white shadow-xl rounded-lg py-3 px-6">
            <div className="photo-wrapper p-2">
                <img className="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
            </div>
            <div className="p-2">
                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>
                <div className="text-center text-gray-400 text-xs font-semibold">
                    <p>{website}</p>
                </div>
                <table className="text-xs my-3">
                    <tbody><tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                        <td className="px-2 py-2">{address}</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                        <td className="px-2 py-2">{phone}</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                        <td className="px-2 py-2">{email}</td>
                    </tr>
                </tbody></table>
    
                <div className="text-center my-3">
                    <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                </div>
    
            </div>
        </div>
    </div>
    
    </div>
    )
})

UserCard.displayName="UserCard"
export default UserCard