"use client";
import Link from 'next/link'
import { useState } from "react";
import { login } from '../features/auth/login';
import { useDispatch,useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { login as loginAction} from "../features/reducers/authSlice";

const LoginForm = ()=>{
    const dispatch = useDispatch();
    const router = useRouter();

    const [formData, setFormData] = useState({
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
        const user = await login(formData.email, formData.password);
        if(user){
            const token = await user.getIdToken();
            dispatch(loginAction({ user:{
                uid: user.uid,
                email: user.email,
                displayName: user.displayName
            }, token }));
            router.push("/dashboard")
        }
    }

    return(
        <form 
        onSubmit={handleSubmit}
        className="w-[450px] h-[500px] flex flex-col items-center justify-start px-6 py-12 gap-5 shadow-lg rounded-sm bg-white">
            <h1 className="text-3xl">Login</h1>
            <div className="w-full flex flex-col">
                <label>Email: </label>
                <input
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="h-[40px] border border-gray-300 focus:outline-none pl-2"
                type="email" 
                required/>
            </div>
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
                Login
            </button>
            <Link 
            className='text-blue-800 font-bold hover:text-blue-500 underline'
            href='/signup'>
                I have no account
            </Link>
            <div className='w-full flex flex-col text-sm'>
                <span className='mb-2'>Demo Account or you can create one:</span>
                <span>Email: mostafaashrof158@gmail.com</span>
                <span>password: 123456789</span>
            </div>
        </form>
    )
};

export default LoginForm;