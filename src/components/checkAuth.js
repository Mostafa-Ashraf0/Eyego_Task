"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../features/reducers/authSlice";
import { auth } from "@/firebase";

const CheckAuth = ({children})=>{
    const dispatch = useDispatch();

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
            }
        });

        return () => unsubscribe();
        }, [auth, dispatch]);
    return(
        <>
            {children}
        </>
    )
};

export default CheckAuth;