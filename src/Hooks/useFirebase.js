import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [successMsg, setSuccessMsg] = useState('')
    const [errorMsg, setErrorMsg] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    useEffect( () => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if(user) {
                // console.log(user);
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })

    }, [])

    // Custom registration process ...
    const handleCustomRegistration = (fullName, email, password) => {
        if(password.length < 6) {
            setErrorMsg("Password should be at leasts 6 character's")
            return;
        }
        if(!/(?=.*[a-z].*[a-z])/.test(password)) {
            setErrorMsg("Password should be at leasts 2 lower case character's")
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setErrorMsg("Password should be at leasts 2 upper case character's")
            return;
        }
    
        return createUserWithEmailAndPassword(auth, email, password)


    }

    // Update User full name ...
    const setUserFullName = (fullName) => {
        setIsLoading(true)
        updateProfile(auth.currentUser, {
            displayName: fullName
        })
        .then(() => {

        })

    }

    // Send email verification link ...
    const sendLinkToEmailForVerify = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            setSuccessMsg('The verify link has been sent to your mail, please click to verified & keep login...')
        })
    }


    // Custom Login process ...
    const customSignInProcess = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    // Password reset link send to email addresses ...
    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


    // User logout process ...
    const signOutUsingGoogle = () => {
        setIsLoading(true)
        
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => {
            setIsLoading(false)
        })
        .catch((error) => {
            setErrorMsg("Something wrong with user logout!")
        })
    }


    return {
        signInUsingGoogle,
        user,
        setUser,
        handleCustomRegistration,
        setUserFullName,
        sendLinkToEmailForVerify,
        customSignInProcess,
        successMsg,
        setSuccessMsg,
        errorMsg,
        setErrorMsg,
        isLoading,
        setIsLoading,
        signOutUsingGoogle,
        forgotPassword
    }
}

export default useFirebase