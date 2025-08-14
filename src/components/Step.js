const Step = ({ currentStep, nextStep, prevStep, handleChange, formData, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
                <div id="step1">
                    <h3>Step 1: User Details</h3>
                    <input id="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} />
                    <input id="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} />
                    <button type="button" onClick={nextStep}>Next</button>
                </div>
            )}

            {currentStep === 2 && (
                <div id="step2">
                    <h3>Step 2: Car Details</h3>
                    <input id="model" placeholder="Car Model" value={formData.model} onChange={handleChange} />
                    <input id="car_price" placeholder="Car Price" value={formData.car_price} onChange={handleChange} />
                    <button type="button" onClick={prevStep}>Previous</button>
                    <button type="button" onClick={nextStep}>Next</button>
                </div>
            )}

            {currentStep === 3 && (
                <div id="step3">
                    <h3>Step 3: Payment Details</h3>
                    <input id="card_info" placeholder="Card Information" value={formData.card_info} onChange={handleChange} />
                    <input id="expiry_date" placeholder="Expiry Date" value={formData.expiry_date} onChange={handleChange} />
                    <button type="button" onClick={prevStep}>Previous</button>
                    <button type="submit">Submit</button>
                </div>
            )}
        </form>
    );
};