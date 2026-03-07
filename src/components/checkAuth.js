"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../features/reducers/authSlice";


const CheckAuth = ({children})=>{
    const dispatch = useDispatch();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
            const token = await user.getIdToken();
            dispatch(login({ user, token }));
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