import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const signup = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
};

export {signup};