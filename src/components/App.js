import React, { useState } from 'react';
import Step from './Step.js';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    model: '',
    car_price: '',
    card_info: '',
    expiry_date: ''
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Step
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
      />
    </form>
  );
};

export default App;
