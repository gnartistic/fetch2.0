import React, { useState } from 'react'
import './index.scss'
import Fetch from '../Fetch'

// page components
import Phone from './Phone';
import Email from './Email';
import Welcome from './WelcomePage';
import DogName from './DogName';
import DogHobby from './DogHobby';
import FirstName from './FirstName';
import Birthday from './Birthday';
import Gender from './GenderIdentity';
import Passions from './Passions';
import Photo from './Photo';
import Location from './Location';
import Password from './PasswordInfo'

const Signup = () =>
{
    const [ step, setStep ] = useState( 1 );
    const [ formData, setFormData ] = useState( {
        firstName: '',
        email: '',
        phone: '',
        dogName: '',
        dogHobby: '',
        birthday: '',
        gender: '',
        passions: '',
        password: '',
        location: '',
        photo:'',
    } );

    // function for going to next step by increasing step state by 1
    const nextStep = () =>
    {
        setStep( step + 1 );
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () =>
    {
        setStep( step - 1 );
    };

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e =>
    {
        // input value from the form
        const { value } = e.target;

        //updating for data state taking previous state and then adding new value to create new object
        setFormData( prevState => ( {
            ...prevState,
            [ input ]: value
        } ) );
    }

    // javascript switch case to show different form in each step
    switch( step ) {
        // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 1:
            return (

                <>
                    <div id='signupForm' className="form">
                        <div className="progressbar">
                            <div
                                style={{ width: "8.3%" }}
                            ></div>
                        </div>
                        <div className="form-container">
                            <Phone nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        </div>
                    </div>
                </>
            );
        // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 2:
            return (
                <>
                    <div id='signupForm' className="form">
                        <div className="progressbar">
                            <div
                                style={{ width: "16.6%" }}
                            ></div>
                        </div>
                        <div className="form-container">
                            <Email nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        </div>
                    </div>
                </>
            );
        // Only formData is passed as prop to show the final value at form submit
        case 3:
            return (
                <>
                    <div id='signupForm' className="form">
                        <div className="progressbar">
                            <div
                                style={{ width: "24.9%" }}
                            ></div>
                        </div>
                        <div className="form-container">
                            <Welcome nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        </div>
                    </div>
                </>
            );
        case 4:
            return (
                <>
                    <div id='signupForm' className="form">
                        <div className="progressbar">
                            <div
                                style={{ width: "33.2%" }}
                            ></div>
                        </div>
                        <div className="form-container">
                            <DogName nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        </div>
                    </div>
                </>
            );
        case 5:
            return (
                <>
                    <div id='signupForm' className="form">
                        <div className="progressbar">
                            <div
                                style={{ width: "41.4%" }}
                            ></div>
                        </div>
                        <div className="form-container">
                            <DogHobby nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        </div>
                    </div>
                </>
            );
        case 6:
            return (
                <>
                    <div id='signupForm' className="form">
                        <div className="progressbar">
                            <div
                                style={{ width: "49.7%" }}
                            ></div>
                        </div>
                        <div className="form-container">
                            <FirstName nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        </div>
                    </div>
                </>
            );
        case 7:
            return (
                <>
                    <div id='signupForm' className="form">
                        <div className="progressbar">
                            <div
                                style={{ width: "58%" }}
                            ></div>
                        </div>
                        <div className="form-container">
                            <Birthday nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        </div>
                    </div>
                </>
            );
        case 8:
            return (
                <>
                    <div id='signupForm' className="form">
                        <div className="progressbar">
                            <div
                                style={{ width: "66.3%" }}
                            ></div>
                        </div>
                        <div className="form-container">
                            <Gender nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        </div>
                    </div>
                </>
            );
        case 9:
            return (
                <>
                    <div id='signupForm' className="form">
                        <div className="progressbar">
                            <div
                                style={{ width: "74.6%" }}
                            ></div>
                        </div>
                        <div className="form-container">
                            <Passions nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        </div>
                    </div>
                </>
            );
        case 10:
            return (
                <>
                    <div id='signupForm' className="form">
                        <div className="progressbar">
                            <div
                                style={{ width: "82.9%" }}
                            ></div>
                        </div>
                        <div className="form-container">
                            <Photo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        </div>
                    </div>
                </>
            );
        case 11:
            return (
                <>
                    <div id='signupForm' className="form">
                        <div className="progressbar">
                            <div
                                style={{ width: "91.2%" }}
                            ></div>
                        </div>
                        <div className="form-container">
                            <Location nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        </div>
                    </div>
                </>
            );
        case 12: 
            return (
                <>
                    <div id='signupForm' className="form">
                        <div className="progressbar">
                            <div
                                style={{ width: "100%" }}
                            ></div>
                        </div>
                        <div className="form-container">
                            <Password nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        </div>
                    </div>
                </>
            )
        // default case to show nothing
        default:
            return (
                <>
                    <Fetch/>
                </>
            );
    }
}


export default Signup