import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { validatePhone } from '../../utils/helpers';
import validator from "validator";

const Phone = ( { nextStep, handleFormData, prevStep, values } ) =>
{
    //creating error state for validation
    const [ errorPhone, setErrorPhone ] = useState( false );

    // after form submit validating the form data using validator
    const submitFormData = ( e ) =>
    {
        e.preventDefault();

        
            if( errorPhone || validator.isEmpty( values.phone ) ) {
                setErrorPhone( true );
            } else {
                nextStep();
            }
        console.log( e.target.value );
        
    }

    const PhoneValidation = (e) =>
    {
        e.preventDefault();
        const isPhoneValid = validatePhone( e.target.value )
            if( !isPhoneValid  || validator.isEmpty( values.phone )) {
                setErrorPhone( true )
            } else {
                setErrorPhone( false );
            }
    }


    return (
        <div className="form-container">
            <form className="body" onSubmit={submitFormData}>
                <div className="header">
                    <h1>What's your phone number?</h1>
                </div>
                <div className="sign-up-container">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="(123) 456-7890"
                        defaultValue={values.phone}
                        onBlur={PhoneValidation}
                        onChange={handleFormData( "phone" )}
                        on
                    />
                </div>
                    {errorPhone ? (
                        <div className='error-container'>
                            <p className="errorText">
                                Please enter a valid phone number.
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

export default Phone