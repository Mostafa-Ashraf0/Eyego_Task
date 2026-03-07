import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
const login = async(email, password)=>{
    try{
        const {user} = await signInWithEmailAndPassword(auth, email, password);
        return user;
    }catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    };
};

export {login};