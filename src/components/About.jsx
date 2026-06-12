import './About.css';

const About = () => {
  const devSkills = [
    'JavaScript (ES6+)', 'React', 'Node.js', 'Express.js',
    'Dart', 'Flutter', 'Firebase', 'PHP', 'MySQL', 'CSS'
  ];

  const designSkills = [
    'Adobe Photoshop', 'Adobe Illustrator', 'Premiere Pro', 'CapCut', 'Canva'
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        <div className="about-content">
          <div className="about-text glass">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I am Uvindu, a developer and final-year NDT student who enjoys building 
              robust digital solutions that run seamlessly on the internet and mobile devices. 
              My primary focus is on fullstack web and mobile application development.
            </p>
            
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I thrive on solving complex technical challenges, whether I’m automating 
              logistics workflows or building dynamic learning management systems. 
              I am currently seeking internship opportunities to contribute to impactful software projects.
            </p>

            {/* Work Experience Timeline */}
            <div className="my-10">
              <h3 className="text-xl font-bold text-white mb-4">Work Experience</h3>
              <div className="border-l-2 border-emerald-500 ml-2 pl-6">
                
                <div>
                  <h4 className="text-md font-bold text-white">Executive | Hub Lanka (Pvt) Ltd (Freight Forwarding)</h4>
                  <p className="text-emerald-400 text-sm">2022 - 2024</p>
                  <p className="text-slate-400 text-sm mt-1">Gained valuable professional experience in logistics operations and management.</p>
                </div>
              </div>
            </div>

            {/* Skills Lists */}
            <p className="mt-8 font-bold text-white">Development Technologies:</p>
            <ul className="skills-list mb-6">
              {devSkills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>

            <p className="font-bold text-white">Design & Multimedia Tools:</p>
            <ul className="skills-list">
              {designSkills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;