import validator from "validator";
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Passions = ({ nextStep, handleFormData, prevStep, values } ) =>
{
    //creating error state for validation
    const [ error, setError ] = useState( false );

    // after form submit validating the form data using validator
    const submitFormData = ( e ) =>
    {
        e.preventDefault();

        // checking if value of first name and last name is empty show error else take to step 2
        if(
            validator.isEmpty( values.passions )
        ) {
            setError( true );
        } else {
            nextStep();
        }
    };
  return (
    <div className="form-container">
            <form className="body" onSubmit={submitFormData}>
                <div className="header">
                    <h1>Passions</h1>
                </div>
                <div className="sign-up-container">
                    <input
                        type=""
                        name="passions"
                        placeholder="ex. Hiking"
                        defaultValue={values.passions}
                        onChange={handleFormData( "passions" )}
                        on
                    />
                </div>
                    {error ? (
                        <div className='error-container'>
                            <p className="errorText">
                                Please make a selection.
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

export default Passions