import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';

const Ligin = () => {
    const { signInUsingGoogle, setUser } = useAuth()

    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'
    const handleGoogleSignIn = () => {

        signInUsingGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirect_url)
            })
    }
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={handleGoogleSignIn} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Ligin;