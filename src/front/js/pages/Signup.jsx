//this page will accept a users email and password
// create a signup action in flux with a POST method


import React, {useState, useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

// needs to navigate to /private

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();

    const handleClick = () => {
        actions.signUp(email, password)
    }
    useEffect(() => {
        if(store.isSignupSuccessful) {
            navigate('/login')
        }
    }, [store.isSignupSuccessful])

    return(
        <>
            <div className="signup text-center mt-5">
                <div>
                    <h1 className="heading">Sign Up</h1>
                    <div>
                        <input 
                            type="text"
                            placeholder="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input 
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            onClick={handleClick}
                        >Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;