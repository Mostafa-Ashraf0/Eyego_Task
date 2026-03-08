"use client";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout, setLoading } from "../features/reducers/authSlice";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";


const CheckAuth = ({children})=>{
    const dispatch = useDispatch();
    const router = useRouter();
    const { user, loading } = useSelector((state) => state.auth);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
            const token = await user.getIdToken();
            dispatch(login({ user: { 
                uid: user.uid, 
                email: user.email, 
                displayName: user.displayName 
            }, token }));
            } else {
            dispatch(logout());
            router.push("/");
            }
            dispatch(setLoading(false));
        });
        return () => unsubscribe();
        }, [auth, dispatch]);

        if(loading) return null;
        return children
};

export default CheckAuth;