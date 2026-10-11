
import { motion } from "framer-motion";

import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Code2,
  Cloud,
  BriefcaseBusiness,
  GraduationCap,
  Download,
} from "lucide-react";

import "./App.css";

// Custom GitHub icon
function GithubIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-label="GitHub"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.55.23 2.69.11 2.98.72.78 1.16 1.78 1.16 3 0 4.29-2.61 5.24-5.1 5.51.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

// Custom LinkedIn icon
function LinkedinIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-label="LinkedIn"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18H5V9h3v9ZM6.5 7.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.5c0-1.08-.02-2.47-1.5-2.47S12.75 12.2 12.75 13.4V18h-3V9h2.88v1.23h.04a3.16 3.16 0 0 1 2.83-1.55c3.03 0 3.5 1.99 3.5 4.58V18Z" />
    </svg>
  );
}

const skills = [
  "Java",
  "React",
  "TypeScript",
  "HTML5",
  "CSS",
  "MySQL",
  "Object-Oriented Programming",
  "CRUD Operations",
  "REST API Integration",
  "AWS",
  "Machine Learning",
  "Computer Vision",
  "Neural Networks",
];

const projects = [
  {
    number: "01",
    title: "Movie Production Management System",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "A movie production management application focused on CRUD operations, Java application development, and database integration.",
    tech: ["Java", "CRUD Operations", "Database"],
  },
  {
    number: "02",
    title: "Gesture Recognition System",
    category: "AI / COMPUTER VISION",
    description:
      "An AI/ML project exploring gesture recognition using computer vision and neural network techniques.",
    tech: ["AI/ML", "Computer Vision", "Neural Networks"],
  },
  {
    number: "03",
    title: "Lung Disease Detection System",
    category: "MACHINE LEARNING",
    description:
      "A medical imaging project exploring machine learning techniques for lung disease classification.",
    tech: ["Machine Learning", "Medical Imaging"],
  },
];

const experience = [
  {
    role: "Systems Engineer",
    company: "Infosys",
    period: "Jan 2025 – Present",
    description:
      "Software application development using Java and React, CRUD functionality, application performance optimization, testing, and Agile collaboration.",
  },
  {
    role: "Software Development Intern",
    company: "YoungMinds Technology Pvt. Ltd.",
    period: "Jul 2024 – Aug 2024",
    description:
      "Java application development, object-oriented programming, debugging, testing, and code quality improvements.",
  },
  {
    role: "AI/ML Intern",
    company: "AICL",
    period: "Mar 2023",
    description:
      "Completed a three-week program covering machine learning algorithms, computer vision, neural networks, and image classification.",
  },
];

function App() {
  return (
    <main>
      {/* NAVIGATION */}
      <nav className="navbar">
        <a className="brand" href="#home">
          SG<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-cta" href="#contact">
          LET&apos;S TALK <ArrowUpRight size={15} />
        </a>
      </nav>

      {/* HERO */}
      <section className="hero section" id="home">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">
            <span className="status-dot" />
            SYSTEMS ENGINEER · SOFTWARE DEVELOPER
          </p>

          <h1>
            Building
            <br />
            <span>digital</span> experiences.
          </h1>

          <p className="hero-description">
            I&apos;m Gnaneshwari, a Systems Engineer with
            professional experience in software development.
            I work with Java, React, TypeScript, and REST APIs,
            with a strong interest in AI and machine learning.
          </p>

          <div className="hero-actions">
            <a className="button button-gold" href="#projects">
              EXPLORE MY WORK
              <ArrowDownRight size={17} />
            </a>

            <a
              className="button button-outline"
              href="/resume.pdf"
              download
            >
              <Download size={16} />
              DOWNLOAD RESUME
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Gnaneshwari143"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <GithubIcon />
            </a>

            <a
              href="https://linkedin.com/in/srgnaneshwari"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <LinkedinIcon />
            </a>

            <a
              href="mailto:srgnaneshwari@gmail.com"
              aria-label="Send email"
              title="Email"
            >
              <Mail size={19} />
            </a>
          </div>
        </motion.div>

        {/* ANIME DEVELOPER IMAGE */}
        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src="/anime-developer.png"
            alt="Anime girl developer working at a desk"
            className="anime-girl"
          />
        </motion.div>

        <a className="scroll-cue" href="#about">
          SCROLL TO EXPLORE <ArrowDownRight size={15} />
        </a>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <p className="eyebrow">01 / ABOUT ME</p>

        <h2>
          Engineering solutions.
          <br />
          <span>Learning what&apos;s next.</span>
        </h2>

        <div className="about-grid">
          <p className="large-copy">
            Systems Engineer with 1+ year of professional
            experience in software development and application
            engineering. Skilled in Java, React, TypeScript,
            Object-Oriented Programming, and REST API integration.
            I enjoy problem-solving, collaborating with teams,
            and learning new technologies to create reliable
            software solutions.
          </p>

          <div className="about-note">
            <BriefcaseBusiness size={23} />
            <h3>My approach</h3>
            <p>
              Analytical thinking, maintainable code, teamwork,
              and continuous learning to support dependable
              software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <p className="eyebrow">02 / TECH STACK</p>

        <h2>
          Tools of my <span>trade.</span>
        </h2>

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-chip"
              key={skill}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.035 }}
            >
              <Code2 size={17} />
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        className="section experience-section"
        id="experience"
      >
        <p className="eyebrow">03 / CAREER JOURNEY</p>

        <h2>
          Experience that <span>matters.</span>
        </h2>

        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={job.company}>
              <div className="timeline-marker" />

              <div className="timeline-heading">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                </div>

                <span className="period">{job.period}</span>
              </div>

              <p className="muted">{job.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <p className="eyebrow">04 / SELECTED WORK</p>

        <h2>
          Projects built with <span>purpose.</span>
        </h2>

        <div className="project-grid">
          {projects.map((project) => (
            <motion.article
              className="project-card"
              key={project.number}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div className="project-top">
                <span>{project.number} / PROJECT</span>
                <ArrowUpRight size={20} />
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="muted">{project.description}</p>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* EDUCATION AND CERTIFICATIONS */}
      <section
        className="section education-section"
        id="education"
      >
        <p className="eyebrow">
          05 / EDUCATION &amp; CREDENTIALS
        </p>

        <h2>
          The foundation <span>behind the work.</span>
        </h2>

        <div className="education-grid">
          <article className="education-card">
            <GraduationCap size={25} />

            <h3>B.E. Computer Science and Engineering</h3>

            <p>Panimalar Institute of Technology, Chennai</p>

            <p className="muted">2021 – 2025 · CGPA 8.9</p>

            <p className="muted">
              HSC: Narayana Junior College, Nellore — 96%
            </p>

            <p className="muted">
              SSC: Narayana E.M. School, Tirupati
            </p>
          </article>

          <article className="education-card">
            <Cloud size={25} />

            <h3>Certifications</h3>

            <p>AWS Cloud Computing Fundamentals</p>

            <p className="muted">
              Cybersecurity Analysis &amp; Design — NASSCOM
            </p>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section section" id="contact">
        <p className="eyebrow">06 / GET IN TOUCH</p>

        <h2>
          Have a project in <span>mind?</span>
        </h2>

        <p className="contact-copy">
          Let&apos;s connect about software development,
          technology, and new opportunities.
        </p>

        <a
          className="button button-gold"
          href="mailto:srgnaneshwari@gmail.com"
        >
          SAY HELLO <ArrowUpRight size={17} />
        </a>

        <p className="contact-email">
          srgnaneshwari@gmail.com
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <a className="brand" href="#home">
          SG<span>.</span>
        </a>

        <p>Designed &amp; built with curiosity.</p>

        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

export default App;
