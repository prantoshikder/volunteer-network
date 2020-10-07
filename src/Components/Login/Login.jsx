import * as firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import google from '../../Image/logos/google.png';
import firebaseConfig from './firebase.config';
import './Login.css';
import logo from '../../Image/logos/Group 1329.png'

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName, email} = result.user;
            const googleSignInUser = {name: displayName, email};
            setLoggedInUser(googleSignInUser);
            history.replace(from);
          })
          .catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }


    return (
        <div className="login-part">
            <div className="container">
                <div className="top-logo">
                    <img className="logo" src={logo} alt=""/>
                </div>
                <div className="login-area">
                    <h3 className="text-center font-weight-bold">Login with</h3>
                    <div className="fireAuth d-flex" onClick={handleGoogleSignIn}>
                        <div className="authLogo"><img src={google} alt="" width="30"/></div>
                        <div className="authTitle"><h5>Continue with Google</h5></div>
                    </div>
                    <p>Don't have an account <span className="createAccount">Create an account</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;