import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Typewriter from './Typewriter';
import profileImg from '../assets/profile.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section section flex-center">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting animate-fade-up delay-100">Hi, I'm</p>
          <h1 className="hero-name animate-fade-up delay-200">Uvindu Adeesha.</h1>
          <h2 className="hero-title animate-fade-up delay-300">
            <Typewriter
              texts={[
                'I build mobile apps.',
                'I build web applications.',
                'Full stack development.',
                'Graphic Designing.',
                'Video Editing.'
              ]}
              typingSpeed={50}
              deletingSpeed={30}
              pauseTime={2000}
            />
          </h2>
          <p className="hero-description animate-fade-up delay-300">
            I'm a software engineer specializing in mobile and web application development. 
            I focus on building performant, scalable, and seamless software products 
            that drive real world results.
          </p>
          <div className="hero-cta animate-fade-up delay-300">
            <Link to="/projects">
              <button className="btn btn-primary">
                Check out my work <FiArrowRight />
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-up delay-200">
          <img
            src={profileImg}
            alt="Portrait of Uvindu Adeesha — software engineer"
            className="hero-profile-img"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;