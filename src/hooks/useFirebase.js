import { useEffect, useState } from 'react';
import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import initFirebase from './../Pages/UserManagement/Firebase/Firebase.init';
import serverLocation from './../ServerLocation/serverlocation';

initFirebase()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, displayName, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setAuthError('')
                const newUser = { email, displayName }
                setUser(newUser)
                saveUser(email, displayName, 'POST', 'user')
                updateProfile(auth.currentUser, {
                    displayName,
                }).then(() => {
                }).catch((error) => {
                });
                history.push('/')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    const logInUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                const destination = location?.state?.from || '/'
                history.push(destination)
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => setToken(idToken))
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe
    }, [auth])

    useEffect(() => {
        fetch(`${serverLocation}users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
        }).finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method, role) => {
        const user = { email, displayName, role }
        fetch(`${serverLocation}users`, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then()

    }

    const googleSignIn = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setAuthError('')
                saveUser(result.user.email, result.user.displayName, 'put', 'user')
                const destination = location?.state?.from || '/'
                history.push(destination)
            }).catch((error) => {
                setAuthError(error.message)
            }).finally(() => setIsLoading(false));
    }

    return {
        user,
        admin,
        setUser,
        token,
        registerUser,
        logOut,
        logInUser,
        isLoading,
        authError,
        googleSignIn
    }
}

export default useFirebase
