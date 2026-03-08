"use client";
import logo from '../../public/logout-2-svgrepo-com (1).svg';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from "next/navigation";
import { logout } from '@/features/reducers/authSlice';
import { logout as logoutAction } from '@/features/auth/logout';

const Header = ()=>{
    const user = useSelector((state)=>state.auth.user);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = async()=>{
        await logoutAction();
        dispatch(logout());
        router.push("/")
    }
    return(
        <header className='w-full h-[60px] p-4 flex items-center justify-between'>
            <span className='text-xl'>
                Hello, {user?.displayName}
            </span>
            <span 
            onClick={handleLogout}
            className='flex items-center gap-2 cursor-pointer px-3 py-2 bg-blue-600 text-white rounded-2xl'>
                <Image
                src={logo}
                alt=''
                width={20}
                height={20}
                />
                Logout
            </span>
        </header>
    )
};

export default Header;