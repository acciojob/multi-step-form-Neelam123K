import React from "react";

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} style={{ background: "#f1f1f1", padding: "20px", borderRadius: "8px" }}>
      
      {step === 1 && (
        <>
          <h3>Step 1: User Details</h3>
          <input
            id="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          /><br /><br />
          <input
            id="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </>
      )}

      {step === 2 && (
        <>
          <h3>Step 2: Car Details</h3>
          <input
            id="model"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
          /><br /><br />
          <input
            id="car_price"
            placeholder="Car Price"
            value={formData.car_price}
            onChange={handleChange}
          />
        </>
      )}

      {step === 3 && (
        <>
          <h3>Step 3: Payment Details</h3>
          <input
            id="card_info"
            placeholder="Card Information"
            value={formData.card_info}
            onChange={handleChange}
          /><br /><br />
          <input
            id="expiry_date"
            placeholder="Expiry Date"
            value={formData.expiry_date}
            onChange={handleChange}
          />
        </>
      )}

      <div style={{ marginTop: "20px" }}>
        {step > 1 && (
          <button type="button" onClick={prevStep} style={{ marginRight: "10px" }}>
            Previous
          </button>
        )}
        {step < 3 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}
        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default Step;
