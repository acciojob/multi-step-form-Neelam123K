import React from 'react';

const Step = ({ currentStep, nextStep, prevStep, handleChange, formData, handleSubmit }) => {
    switch (currentStep) {
        case 1:
            return (
                <div id="step1">
                    <input id="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" />
                    <input id="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" />
                    <button type="button" onClick={nextStep}>Next</button>
                </div>
            );
        case 2:
            return (
                <div id="step2">
                    <input id="model" value={formData.model} onChange={handleChange} placeholder="Car Model" />
                    <input id="car_price" value={formData.car_price} onChange={handleChange} placeholder="Car Price" />
                    <button type="button" onClick={prevStep}>Previous</button>
                    <button type="button" onClick={nextStep}>Next</button>
                </div>
            );
        case 3:
            return (
                <div id="step3">
                    <input id="card_info" value={formData.card_info} onChange={handleChange} placeholder="Card Information" />
                    <input id="expiry_date" value={formData.expiry_date} onChange={handleChange} placeholder="Expiry Date" />
                    <button type="button" onClick={prevStep}>Previous</button>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            );
        default:
            return null;
    }
};

export default Step;
