import React, { useState } from 'react';
import axios from 'axios';
import './Consultation.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Consultation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
    hairType: '',
    hairTexture: '',
    scalpCondition: '',
    hairConcerns: '',
    washingFrequency: '',
    hairProducts: '',
    heatStylingFrequency: '',
    colorTreatment: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/consultation', formData)
      .then(response => {
        alert(response.data);
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
      });
  };

  return (
    
    <div className="consultation">
        <Header />
      <h1 className="consultation__title">Request Consultation</h1>
      <form className="consultation__form" onSubmit={handleSubmit}>
        <input className="consultation__input" type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input className="consultation__input" type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input className="consultation__input" type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input className="consultation__input" type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
        <textarea className="consultation__textarea" name="description" placeholder="Describe your issue/request" onChange={handleChange} required></textarea>
        <label className="consultation__label">Hair Type:
          <select className="consultation__select" name="hairType" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Straight">Straight</option>
            <option value="Wavy">Wavy</option>
            <option value="Curly">Curly</option>
            <option value="Coily">Coily</option>
          </select>
        </label>
        <label className="consultation__label">Hair Texture:
          <select className="consultation__select" name="hairTexture" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Fine">Fine</option>
            <option value="Medium">Medium</option>
            <option value="Thick">Thick</option>
          </select>
        </label>
        <label className="consultation__label">Scalp Condition:
          <select className="consultation__select" name="scalpCondition" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Oily">Oily</option>
            <option value="Dry">Dry</option>
            <option value="Normal">Normal</option>
            <option value="Sensitive">Sensitive</option>
          </select>
        </label>
        <label className="consultation__label">Hair Concerns:
          <textarea className="consultation__textarea" name="hairConcerns" onChange={handleChange} required></textarea>
        </label>
        <label className="consultation__label">Washing Frequency:
          <select className="consultation__select" name="washingFrequency" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Daily">Daily</option>
            <option value="2-3 times a week">2-3 times a week</option>
            <option value="Weekly">Weekly</option>
            <option value="Bi-weekly">Bi-weekly</option>
          </select>
        </label>
        <label className="consultation__label">Hair Products Used:
          <textarea className="consultation__textarea" name="hairProducts" onChange={handleChange} required></textarea>
        </label>
        <label className="consultation__label">Heat Styling Frequency:
          <select className="consultation__select" name="heatStylingFrequency" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Occasionally">Occasionally</option>
            <option value="Never">Never</option>
          </select>
        </label>
        <label className="consultation__label">Color Treatment:
          <select className="consultation__select" name="colorTreatment" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Frequently">Frequently</option>
            <option value="Occasionally">Occasionally</option>
            <option value="Never">Never</option>
          </select>
        </label>
        <label className="consultation__label">Additional Information:
          <textarea className="consultation__textarea" name="additionalInfo" onChange={handleChange}></textarea>
        </label>
        <button className="consultation__button" type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default Consultation;
