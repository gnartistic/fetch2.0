import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import validator from "validator";

const Email = ( { nextStep, handleFormData, prevStep, values } ) =>
{
    //creating error state for validation
    const [ errorEmail, setErrorEmail ] = useState( false );

    // after form submit validating the form data using validator
    const submitFormData = ( e ) =>
    {
        e.preventDefault();

        // checking if value of first name and last name is empty show error else take to next step
        if( validator.isEmpty( values.email ) || validator.isEmpty( values.email) ) {
            setErrorEmail( true );
        } else {
            if( validator.isEmail( values.email ) ) {
                nextStep();
            } else {
                setErrorEmail( true );
            }
        }
        
    }



    return (
        <div className="form-container">
            <form className="body" onSubmit={submitFormData}>
                <div className="header">
                    <h1>What's your Email?</h1>
                </div>
                <div className="sign-up-container">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        defaultValue={values.email}
                        onChange={handleFormData( "email" )}
                        on
                    />
                </div>
                    {errorEmail ? (
                        <div className='error-container'>
                            <p className="errorText">
                                Please enter a valid email.
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                <div className="footer">
                    <button className="next" type="submit">
                        <FontAwesomeIcon icon={faCircleArrowRight} size="lg" color="#fefefe" />
                    </button>
                    <button className="prev" onClick={prevStep}>
                        <FontAwesomeIcon icon={faCircleArrowLeft} size="lg" color="#fefefe" />
                    </button>
                </div>
            </form>
        </div >
    )
}

export default Email