import React, { useState } from "react";
import "./index.scss";
import Ball from "../../assets/images/invertedBall.png";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { validateEmail } from '../../utils/helpers';

// import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "../../utils/mutations";
// import Auth from "../../utils/auth";

// background color, for some reason I can only get it to render using css enclosed javascript


const Login = () =>
{

	// form input default state
	const [ formState, setFormState ] = useState( { email: '', password: '' } );
	const { email, password } = formState;

	// validation error initial states
	const [ emailErrMsg, setEmailErrMsg ] = useState( '' );
	// const [ serverErrMsg, setServerErrMsg ] = useState( '' );
	const [ pwdErrMsg, setPwdErrMsg ] = useState( '' );

	// password validation state
	const [ validPassword, setValidPassword ] = useState( '' );
	const [ validEmail, setValidEmail ] = useState( '' );

	// function to handle input change. contains email validation and password verification
	const handleChange = ( e ) =>
	{
		if( e.target.name === 'email' ) {
			const isEmailValid = validateEmail( e.target.value );

			if( !isEmailValid ) {
				setValidEmail( '' );
				setEmailErrMsg( 'Not a valid email' )
			} else {
				setValidEmail( 'true' );
				setEmailErrMsg( '' );
			}
		}

		if( e.target.name === 'password' ) {
			const isPasswordValid = e.target.value.length > 4;

			if( !isPasswordValid ) {
				setValidPassword( '' );
				setPwdErrMsg( 'Not a valid password' );
			} else {
				setValidPassword( 'true' );
				setPwdErrMsg( '' );
			}
		}

		if( !emailErrMsg || validPassword ) {
			setFormState( { ...formState, [ e.target.name ]: e.target.value } );
		}
	};


	return (
		<>
			{/* The container in layout.scss style from css enclosed javascript above */}
			<div className="container login-page page">
				<div className="logo-zone">
					{/* The tennis ball logo */}
					<h1>
						{" "}
						<img src={Ball} alt="white tennis ball" />
						Fetch
					</h1>
				</div>
				<div className="login-form">
					{/* {error && <h2 style={{textAlign: 'center', fontFamily:'Bold', color: 'white', fontSize:'2.5vh'}}>Please check your email and password.</h2>} */}
					<form
					>
					<div className='input-container'>
                            {/* email input container */}
                            <div className='email'>
                                <h2 className='email-label'>Email</h2>
                                {/* conditional styling based on validation error */}
                                <div className='input-box' style={{ border: emailErrMsg ? '2px solid #f20d17' : '', borderRadius: emailErrMsg ? '5px' : '' }}>
                                    <FontAwesomeIcon icon={faUser} color='#7068ce' />
                                    <input
                                        type='email'
                                        name='email'
                                        maxLength={50}
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                        defaultValue={email}
                                        placeholder='ilovedogs@gmail.com' />
                                </div>
                                {/* email error message */}
                                {emailErrMsg && (
                                    <p className="error-text">{emailErrMsg}</p>
                                )}
                            </div>
                            {/* password input container */}
                            <div className='password'>
                                <h2 className='password-label'>Password</h2>
                                {/* conditional styling based on validation error */}
                                <div className='input-box' style={{ border: pwdErrMsg ? '2px solid #f20d17' : '', borderRadius: pwdErrMsg ? '5px' : '' }}>
                                    <FontAwesomeIcon icon={faLock} color='#7068ce' />
                                    <input
                                        type='password'
                                        name='password'
                                        maxLength={16}
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                        defaultValue={password}
                                        placeholder='Must be at least 4 characters' />
                                </div>
                                {/* password error message */}
                                {pwdErrMsg && (
                                    <p className="error-text">{pwdErrMsg}</p>
                                )}
                            </div>

                            {/* login button, disabled if inputs do not pass all verification */}
                            <button
                                data-test-id="button"
                                disabled={!password || !email || !validPassword || !validEmail}
                                type='submit'
                                className='signIn'>
                                Login
                            </button>

                            {/* server error message */}
                            {/* {serverErrMsg && (
                                <p className='error-text2'>{serverErrMsg}</p>
                            )} */}
                        </div>
						{/* link to signup component */}
						<div className="createAccount">
							<Link to="/Signup">Create Account</Link>
						</div>

						<p>
							By tapping "Create Account" or "Login", you agree to our Terms
							of Service.
						</p>
					</form>
				</div>
			</div>
			{/* the loader in between screens */}
			<Loader type="ball-pulse-sync" />
		</>
	);
};

export default Login;