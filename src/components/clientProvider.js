"use client";
import CheckAuth from "@/components/checkAuth";
import { Provider } from "react-redux";
import store from "../store/store";

const ClientProvider = ({children})=>{
    return(
        <>
            <Provider store={store}>
                    {children}
            </Provider>
        </>
    )
};


export default ClientProvider;