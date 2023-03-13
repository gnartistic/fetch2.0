import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const WelcomePage = ( { nextStep, prevStep } ) =>
{
  // after form submit validating the form data using validator
  const submitFormData = ( e ) =>
  {
    e.preventDefault();

    nextStep();

  }


  return (
    <div className="form-container">
      <form className="body" onSubmit={submitFormData}>
        <div className="rules-list">
          <div className="rules">
            <h1> Welcome!</h1>
              <h2>Please follow these House Rules</h2>
            <div className="rules-container">
              <h3>Be Original</h3>
              <h4>Make sure your photos, age, and bio are true to who you are.</h4>
            </div>
            <div className="rules-container">
              <h3>Stay Safe</h3>
              <h4>Don't be too quick to give out personal information.</h4>
            </div>
            <div className="rules-container">
              <h3>Play it cool</h3>
              <h4>Respect others and treat them as you would like to be treated.</h4>
            </div>
            <div className="rules-container">
              <h3>Be Proactive</h3>
              <h4>Always report bad behavior.</h4>
            </div>
          </div>
        </div>
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

export default WelcomePage