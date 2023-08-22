import React, { useState } from 'react';
import './index.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    surname: '',
  });

  const [showSubmittedData, setShowSubmittedData] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    setShowSubmittedData(true);
  };

  return (
    <div className="form">
      <div className="inputs">
        <div className="input-container">
          <input
            placeholder="Введите ваше полное имя"
            className="input"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {showSubmittedData && <p className="duplicate-value">Полное имя: {formData.fullName}</p>}
        </div>

        <div className="input-container">
          <input
            placeholder="Введите номер телефона"
            className="input"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {showSubmittedData && <p className="duplicate-value">Номер телефона: {formData.phoneNumber}</p>}
        </div>

        <div className="input-container">
          <input
            placeholder="Введите email"
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {showSubmittedData && <p className="duplicate-value">Email: {formData.email}</p>}
        </div>

        <div className="input-container">
          <input
            placeholder="Введите фамилию"
            className="input"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
          {showSubmittedData && <p className="duplicate-value">Фамилия: {formData.surname}</p>}
        </div>
      </div>

      <button onClick={handleSubmit}>Отправить</button>
    </div>
  );
}

export default App;
