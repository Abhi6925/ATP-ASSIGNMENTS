function Navbar(){
    return(
        <div className="flex justify-between p-8 bg-gray-800 text-white">
            <h1>LOGO</h1>
            <ul className="flex gap-20">
                <li>Home</li>
                <li>Register</li>
                <li>Login</li>
            </ul>
        </div>
    )
}

 export default Navbar