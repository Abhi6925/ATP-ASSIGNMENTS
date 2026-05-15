function User(props){
    const {user}=props
    return (
        <div className="shadow-2xl m-10 bg-gradient-to-r from-blue-500 via-orange-500 to-red-500 ">
            <img className="m-auto p-5" src={user.image} />
            <h2 className="text-center text-white mb-3 text-4xl">{user.name}</h2>
            <h2 className="text-center mb-3 text-3xl">{user.email}</h2>
        </div>
    )
}

export default User