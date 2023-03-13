/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import validator from "validator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

function PasswordInfo ( { nextStep, handleFormData, prevStep, values } )
{
    //creating error state for validation
    const [ errorPassword, setErrorPassword ] = useState( false );

    const [ passReqMessage, setPassReqMessage ] = useState( false );

    const [ passConfirmed, setPassConfirmed ] = useState( false );

    const [ matchError, setMatchError ] = useState( false );

    // after form submit validating the form data using validator
    const submitFormData = ( e ) =>
    {
        e.preventDefault();

        nextStep();

    };

    const validPassword = ( e ) =>
    {
        // checking if value of first name and last name is empty show error else take to next step
        if( validator.isEmpty( values.password ) ) {
            setErrorPassword( true );
        } else if( validator.isStrongPassword( values.password, [] ) ) {
            // handleFormSubmit();
            console.log( values )
            setErrorPassword( false );

        } else {
            setErrorPassword( true );
        }
    }

    // const handleFormSubmit = async ( event ) =>
    // {
    //     try {
    //         const { data } = await addUser( {
    //             variables: { ...values },
    //         } );

    //             Auth.login( data.addUser.token );

    //     } catch( e ) {
    //         console.error( e );
    //     }
    // };


    const handleMatchPass = ( e ) =>
    {


        if( e.target.name === 'confirmPassword' ) {
            if( e.target.value === values.password ) {
                setPassConfirmed( true );
                setMatchError( false );
            } else {
                setPassConfirmed( false );
                setMatchError( true );
            }
        }

        if( e.target.name === 'password' ) {
            if( e.target.value === values.confirmPassword ) {
                setPassConfirmed( true );
                setMatchError( false );
            } else {
                setPassConfirmed( false );
                setMatchError( true );
            }
        }
    }

    return (
        <div className="form-container">
            <form className="body" onSubmit={submitFormData}>
                <div className="other-info-container">
                    <div className="header">
                    <h1>Enter a password.</h1>
                </div>
                    {passReqMessage && <p className="passwordText">Password must contain 8-12 characters,<br /> minimum of one uppercase character (A-Z),<br />minimum of one lowercase character (a-z), <br />and one non-alphanumeric character ($%&!).</p>}
                    <div className="input-container">
                        <input
                            className="password"
                            placeholder="Password"
                            name="password"
                            type="password"
                            id="pwd"
                            onClick={() => { setPassReqMessage( true ); }}
                            defaultValue={values.password}
                            onInput={validPassword}
                            onChange={handleMatchPass}
                            onChangeCapture={handleFormData( "password" )}
                            style={{ color: !errorPassword ? '#fefefe' : '#f20d17' }}
                        />
                        {errorPassword ? ( <FontAwesomeIcon icon={faXmark} color='#f20d17' /> ) :
                            <></>
                        }
                    </div>
                    <div className="input-container">
                        <input
                            className="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            id="pwd2"
                            onChange={handleMatchPass}
                            defaultValue={values.confirmPassword}
                            style={{color: passConfirmed === false ?  '#f20d17' : '#fefefe'}}
                        />
                        {matchError ? ( <FontAwesomeIcon icon={faXmark} color='#f20d17' /> ) :
                            <></>
                        }
                    </div>

                    {/* {error && <p className="errorText" style={{textAlign:'center'}}>An account already exists with your chosen username or email.<br/> Please try again or <Link to='/login'>login</Link></p>} */}
                </div>
                    {!errorPassword ? (
                        <>
                        </>
                    ) : (
                        <div className='error-container'>
                            <p className="errorText">Please enter a valid password.</p>
                        </div>
                    )}

                    {matchError === false ? (
                        <></>
                    ) : (
                        <div className='error-container-alt'>
                            <p className="errorText">Passwords do not match.</p>
                        </div>
                    )}
                <div className="footer">
                    <button className="next" type="submit" onClick={handleFormData} disabled={!passConfirmed || matchError}>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" color="#fefefe" />
                    </button>
                    <button className="prev" onClick={prevStep}>
                        <FontAwesomeIcon icon={faCircleArrowLeft} size="lg" color="#fefefe" />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PasswordInfo;