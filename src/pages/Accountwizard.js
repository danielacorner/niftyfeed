import React from "react";

import PersonIcon from '@mui/icons-material/Person';
import Uploadimage from "../components/imageUpload";


const Account = () => {
  const [formStep, setFormStep] = React.useState(0)
  const completeFormStep = () => {
    setFormStep(cur => cur + 1)
  }
  const renderButton = () => {
    if (formStep > 2) {
      return undefined
    } else {
      <button
        onClick={completeFormStep}
        type="button"
        className="wizardbutton"
        >
          Next Step
        </button>
    }
  }
  return (
    <div className="registration-form">
        <h1 className="wizard-heading">
          Complete Your Registration
        </h1>
      <div className="wizard-form">
        <div className="px-16 py-10">
          <form>
            {formStep === 0 && (
              <section>
                  <h2 className="wizard-subheading">
                  Personal Information
                  </h2>
                  <div className="profile-container">
                    <div className="img-holder">
                      <PersonIcon className="personicon"/>
                    </div>
                    <Uploadimage />
                  </div>
                  <div className="wizard-div"/>
                  <button
                      onClick={completeFormStep}
                      type="button"
                      className="wizardbutton"
                      >
                      Next Step
                  </button>
              </section>
            )}
            {formStep === 1 && (
              <section>
            <h2 className="font-semibold text-3xl mb-8">Billing Information</h2>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="text-input"
            />
              <button
                onClick={completeFormStep}
                type="button"
                className="wizardbutton"
                >
                Next Step
            </button>
              </section>
            )}
            {formStep === 2 && (
              <section>
            <h2 className="font-semibold text-3xl mb-8">Legal Information</h2>
            <div className="block mt-6">
              <input
                name="toc"
                className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                type="checkbox"
              />
              <span>
                I accept the{" "}
                <a className="text-blue-400 underline" href="/">
                  Terms and Conditions
                </a>
                .
              </span>
            </div>
            <div className="block mt-6">
              <input
                name="pp"
                className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                type="checkbox"
              />
              <span>
                I accept the{" "}
                <a className="text-blue-400 underline" href="/">
                  Privacy Policy
                </a>
                .
              </span>
            </div>
            <button
            onClick={completeFormStep}
              type="button"
              className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Thank you for your submission, you'll receive your email confirmation.
            </button>
            </section>
            )}
            {renderButton()}
          </form>
        </div>
      </div>
    </div>

  )
}

export default Account;
