import React, { useState } from 'react';
import './index.css';


function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    surname: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="form">
      <div className="inputs">
        <div className="input-container">
          <input
            placeholder="Enter your full name"
            className="input"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <p className="duplicate-value">{formData.fullName}</p>
        </div>

        <div className="input-container">
          <input
            placeholder="Enter your phone number"
            className="input"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <p className="duplicate-value">{formData.phoneNumber}</p>
        </div>

        <div className="input-container">
          <input
            placeholder="Enter your email"
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="duplicate-value">{formData.email}</p>
        </div>

        <div className="input-container">
          <input
            placeholder="Enter your surname"
            className="input"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
          <p className="div-cate-value">{formData.surname}</p>
        </div>
      </div>

      <button>Submit</button>
    </div>
  );
}
 
export default App;
