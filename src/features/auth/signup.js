import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase";

const signup = async (userName, email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    
    await updateProfile(user, { displayName: userName });

    return user; 
  } catch (error) {
    console.error(error.code, error.message);
    return null;
  }
};

export { signup };