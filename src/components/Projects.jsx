import { FiGithub, FiExternalLink, FiDownload } from 'react-icons/fi';
import cofferLoginImg from '../assets/coffer_app.png';
import ndtManagerImg from '../assets/ndt_manager.png';
import busTrackingImg from '../assets/bus_tracking_1.png';
import complainSystemImg from '../assets/complain_system.png';
import projectVideoImg from '../assets/project_video.png';
import freightForwardingImg from '../assets/freight_forwarding.png';
import './Projects.css';

const Projects = () => {
  const projectList = [

    
    {
      title: 'Coffer (Main Project)',
      description: 'My first mobile application developed in Dart. Coffer aims to manage and track financial assets across devices.',
      techList: ['Dart', 'Mobile', 'Web'],
      github: 'https://github.com/adeesha5624/Coffer',
      external: 'https://my-universal-wallet.web.app',
      apk: 'https://github.com/adeesha5624/Coffer/releases/download/V1.1.1/app-release.apk',
      image: cofferLoginImg
    },
    {
      title: 'NDT Manager',
      description: 'My first web application.A secure, student-centric Learning Management built using PHP and MySQL. Engineered with robust session based authentication, password hashing, and dynamic role based routing.',
      techList: ['PHP', 'MySQL','XAMMP','JavaScript', 'CSS'],
      github: 'https://github.com/adeesha5624/Learning-Management-System.git',
      external: 'https://github.com/adeesha5624/Learning-Management-System.git',
      image: ndtManagerImg
    },
    {
      title: 'Real-time Bus Tracking System',
      description: 'A comprehensive bus tracking system developed in Python. It provides real-time location updates, helping users monitor and schedule their daily transit routines.',
      techList: ['Python', 'Web'],
      github: 'https://github.com/adeesha5624/Real-time-Bus-Tracking-System',
      external: 'https://github.com/adeesha5624/Real-time-Bus-Tracking-System',
      image: busTrackingImg
    },
    {
      title: 'Complain Management System',
      description: 'An MIS group project developed using Vue. It serves as a streamlined platform to handle, organize, and resolve user complaints effectively.',
      techList: ['Vue', 'Web'],
      github: 'https://github.com/adeesha5624/Complain-Management-System',
      external: 'https://github.com/adeesha5624/Complain-Management-System',
      image: complainSystemImg
    },
    {
      title: 'Project Video Presentation',
      description: 'A collaborative group video project designed to deliver a rich visual walkthrough of the university. Contributed to team synchronization, layout graphics, smooth transitions, and high-contrast subtitles to provide a clean, professional, and inclusive user experience.',
      techList: ['CapCut', 'Photoshop', 'Premiere Pro'],
      external: 'https://drive.google.com/file/d/1GeXimQ6iy9w9nI1V8TbO5UVqf6QbXJNn/view?usp=sharing',
      image: projectVideoImg
    },
    {
      title: 'Freight Forwarding Smart System',
      description: 'A comprehensive digital logistics platform that automates manual freight forwarding workflows. Features a clean, centralized system for real-time tracking, optimized data entry, and seamless status updates to minimize errors and maximize user efficiency.',
      techList: ['React', 'Express','Node','PostgreSQL'],
      external:'https://github.com/adeesha5624/HUB-Airfreight.git',
      image: freightForwardingImg
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-heading">Some Things I've Built</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card glass">
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={`${project.title} screenshot`} />
                </div>
              )}
              <div className="project-content">
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a href={project.external} target="_blank" rel="noreferrer">{project.title}</a>
                </h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech-list">
                  {project.techList.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noreferrer" title="GitHub Repository">
                      <FiGithub /> <span>GitHub</span>
                    </a>
                  )}
                  <a href={project.external} aria-label="External Link" target="_blank" rel="noreferrer" title="Live Preview">
                    <FiExternalLink /> <span>{project.apk ? "Continue to App" : "Live Preview"}</span>
                  </a>
                  {project.apk && (
                    <a href={project.apk} aria-label="Download APK" target="_blank" rel="noreferrer" title="Download APK">
                      <FiDownload /> <span>Download APK File</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
