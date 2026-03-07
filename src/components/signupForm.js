import Link from "next/link";

const SignupForm = ()=>{
    return(
        <form className="w-[450px] h-[500px] flex flex-col items-center justify-start px-6 py-12 gap-5 shadow-lg rounded-sm bg-white">
            <h1 className="text-3xl">Signup</h1>
            <div className="w-full flex flex-col">
                <label>User Name: </label>
                <input
                className="h-[40px] border border-gray-300 focus:outline-none pl-2"
                minLength={6}
                type="text" 
                required/>
            </div>
            <div className="w-full flex flex-col">
                <label>Email: </label>
                <input
                className="h-[40px] border border-gray-300 focus:outline-none pl-2"
                type="email" 
                required/>
            </div>
            <div className="w-full flex flex-col">
                <label>Password: </label>
                <input 
                className="h-[40px] border border-gray-300 focus:outline-none pl-2"
                type="password" 
                minLength={8} 
                required/>
            </div>
            <button 
            className="w-full bg-blue-800 h-[40px] cursor-pointer text-white"
            type="submit">
                Login
            </button>
            <Link 
            className='text-blue-800 font-bold hover:text-blue-500 underline'
            href="/">
                already have an account
            </Link>
        </form>
    )
};

export default SignupForm;