"use client";
import Link from "next/link";
import { useState } from "react";
import { signup } from "@/features/auth/signup";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "@/features/reducers/authSlice";

const SignupForm = ()=>{
    const dispatch = useDispatch();
    const router = useRouter();

    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: ""
    });

    // input state management
    const handleChange = (e)=>{
        const target = e.target;
        setFormData((prev)=>({
            ...prev,
            [target.name]:target.value
        }))
    }

    // submition function
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const user = await signup(formData.userName, formData.email, formData.password);
        if(user){
            const token = await user.getIdToken();
            dispatch(login({ user, token }));
            router.push("/dashboard")
        }
    }

    return(
        <form 
        onSubmit={handleSubmit}
        className="w-[450px] h-[500px] flex flex-col items-center justify-start px-6 py-12 gap-5 shadow-lg rounded-sm bg-white">
            <h1 className="text-3xl">Signup</h1>
            {/*user name section */}
            <div className="w-full flex flex-col">
                <label>User Name: </label>
                <input
                onChange={handleChange}
                name="userName"
                value={formData.userName}
                className="h-[40px] border border-gray-300 focus:outline-none pl-2"
                minLength={6}
                type="text" 
                required/>
            </div>
            {/*email section */}
            <div className="w-full flex flex-col">
                <label>Email: </label>
                <input
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="h-[40px] border border-gray-300 focus:outline-none pl-2"
                type="email"
                minLength={10} 
                required/>
            </div>
            {/*password section */}
            <div className="w-full flex flex-col">
                <label>Password: </label>
                <input 
                onChange={handleChange}
                name="password"
                value={formData.password}
                className="h-[40px] border border-gray-300 focus:outline-none pl-2"
                type="password" 
                minLength={8} 
                required/>
            </div>
            <button 
            className="w-full bg-blue-800 h-[40px] cursor-pointer text-white"
            type="submit">
                Signup
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