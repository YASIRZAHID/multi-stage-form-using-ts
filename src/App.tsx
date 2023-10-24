import "./App.css";
import { useState } from "react";
import SignupPage2 from "./components/Step2";
import SignupPage from "./components/Step1";
import DisplayFormValues from "./components/Step3";
import React from "react";
type FormData = {
  username?:string,
  email?:string,
  phoneNumber?:string,
  country?:string,
  password?:string
};

function App() {
  const [step, setStep] = useState(1); // Initialize with the first step

  const nextStep = () => {
    setStep(step + 1);
  };
  const data:FormData={};
  const [formData, setFormData] = useState(data);
  return (
    <div className="App min-h-screen ">
      <div>
        {step === 1 && (
          <SignupPage
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step === 2 && (
          <SignupPage2
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step === 3 && <DisplayFormValues formData={formData} />}
      </div>
    </div>
  );
}

export default App;
