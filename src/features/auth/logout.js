import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const logout = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
    });
};

export {logout};