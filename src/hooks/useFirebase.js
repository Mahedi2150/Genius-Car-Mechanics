import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isloading, setIsloading] = useState(true)

    const auth = getAuth();


    const signInUsingGoogle = () => {
        setIsloading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

            .finally(() => setIsloading(false))

    }
    const logOut = () => {
        setIsloading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsloading(false))
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsloading(false)
        });
        return () => unsubscribed;
    }, [])

    return {
        user,
        setUser,
        isloading,
        signInUsingGoogle,
        logOut,

    }
}
export default useFirebase;