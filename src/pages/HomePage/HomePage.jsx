import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
// import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">Welcome to Hair Consulting</h1>
        <p className="home__description">We are passionate about helping you achieve your best hair health and style.</p>
      </div>
      {/* <div>
        <Hero />
      </div> */}
      <div className="home__about">
        <h2>About Us</h2>
        <p>
          At Hair Consulting, we are passionate about helping you achieve your best hair health and style. Our team of experienced hair specialists is dedicated to providing personalized consultations that cater to your unique needs. Whether you're looking to revitalize your hair's natural shine, explore new products, or find the perfect style, we are here to guide you every step of the way.
        </p>
      </div>
      <div className="home__beliefs">
        <h2>What We Believe In</h2>
        <ul>
          <li>
            <strong>Personalization:</strong> Every individual is unique, and so are their hair needs. We tailor our consultations to provide solutions that are just right for you.
          </li>
          <li>
            <strong>Education:</strong> Understanding your hair and how to care for it is essential. We empower our clients with the knowledge they need to maintain healthy, beautiful hair.
          </li>
          <li>
            <strong>Sustainability:</strong> We are committed to recommending products and practices that are not only effective but also environmentally friendly and sustainable.
          </li>
          <li>
            <strong>Integrity:</strong> Honesty and transparency are at the core of our consultations. We prioritize your hair's health over trends, ensuring that our advice is always in your best interest.
          </li>
          <li>
            <strong>Innovation:</strong> The world of hair care is constantly evolving. We stay updated with the latest research, techniques, and products to offer you cutting-edge solutions.
          </li>
        </ul>
      </div>
      <div className="home__cta">
        <h2>Join us at Hair Consulting and discover the difference that expert advice and genuine care can make. Let us help you unlock the full potential of your hair!</h2>
        <div className="home__links">
          <Link className="home__link" to="/consultation">Request Consultation</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
