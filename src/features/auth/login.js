import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const login = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
};

export {login};