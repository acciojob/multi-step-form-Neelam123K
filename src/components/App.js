import React, { useState } from 'react';
import Step from './Step';

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

    const nextStep = () => setCurrentStep(prevStep => prevStep + 1);
    const prevStep = () => setCurrentStep(prevStep => prevStep - 1);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div>
            <h1>Multi-Step Form</h1>
            <Step 
                currentStep={currentStep} 
                nextStep={nextStep} 
                prevStep={prevStep} 
                handleChange={handleChange} 
                formData={formData} 
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default App;