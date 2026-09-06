"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Mail,
  MapPin,
  Moon,
  Sparkles,
  Star,
  Sun,
  Trophy,
} from "lucide-react";

const skills = {
  frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "NestJS", "Spring Boot", ".NET", "REST APIs", "Microservices"],
  database: ["MongoDB", "PostgreSQL", "MySQL", "SQL", "NoSQL"],
  language: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "DSA"],
  cloud: ["Docker", "Kubernetes", "GCP", "Vercel", "GitHub", "Git", "CI/CD"],
  testing: ["Manual Testing", "API Testing", "Unit Testing", "Regression Testing", "Functional Testing", "UI Testing"],
};

const experience = [
  {
    role: "Associate Software Engineer",
    company: "AIEnsured, Bengaluru",
    period: "March 2024 – Present",
    points: [
      "Develop responsive interfaces using React.js and Tailwind CSS.",
      "Build and optimize backend APIs and workflows using Node.js and MongoDB.",
      "Perform manual, functional, regression, and API testing across application flows.",
      "Collaborate with developers, QA, designers, and stakeholders in Agile sprint cycles.",
      "Support deployment and maintenance using GCP, Vercel, and CI/CD workflows.",
      "Mentor junior team members and validate authentication, editor, analytics, and scheduling workflows.",
      "Developed a testing website and an onboarding portal for production-facing business workflows.",
    ],
    links: [
      { label: "Testing Website", href: "https://www.testaing.com/" },
      { label: "Onboarding Portal", href: "https://on-boarding-portal-dsaq-git-main-anuritgithubs-projects.vercel.app/" },
    ],
  },
  {
    role: "Software Development Intern",
    company: "Koushalya Prayogh – ERP and E-Learning System",
    period: "2023",
    points: [
      "Improved the user interface and experience of an e-learning platform using React.js.",
      "Developed authentication and course-management functionality.",
      "Reduced manual administrative work through digital workflows.",
      "Improved application performance and basic SEO enhancements.",
    ],
  },
];

const projects = [
  {
    title: "AI Governance and Assessment Platform",
    stack: ["React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Responsible AI"],
    description:
      "An explainable AI governance application that evaluates AI use cases through structured, repeatable assessment workflows and evidence-based findings.",
    href: "#",
  },
  {
    title: "AI Fitness Coach",
    stack: ["React.js", "Node.js", "NestJS", "MongoDB", "Docker", "Kubernetes"],
    description:
      "An AI-driven fitness product that generates personalized workout plans based on user goals, experience, schedule, and equipment.",
    href: "https://ai-fitness-fg5r-qrsecr94q-anuritgithubs-projects.vercel.app/",
    github: "https://github.com/Anamika-Singh1/AI-Fitness-",
  },
  {
    title: "Dokmark – Bookmark Manager",
    stack: ["React.js", "Node.js", "MongoDB", "OAuth", "CI/CD"],
    description:
      "A full-stack bookmark manager with secure OAuth, protected routes, organized collections, and automated deployment flows.",
    href: "https://github.com/anuritgithub",
  },
  {
    title: "Onboarding Management Portal",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Vercel"],
    description:
      "A role-based onboarding and management platform for interns, mentors, projects, events, and learning resources.",
    href: "#",
  },
];

const certifications = [
  "Java and Spring Boot Development",
  "HackerRank Java Certification",
  "HackerRank Python Certification",
  "Full-Stack Development Workshop – RVCE",
];

const process = [
  "Understand the user and business requirements.",
  "Break the requirement into technical modules.",
  "Design the user flow, API contracts, and data model.",
  "Develop reusable and maintainable components.",
  "Validate input, authentication, errors, and edge cases.",
  "Deploy the solution and improve based on real feedback.",
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V9H3.54v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

export default function Home() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const useLightTheme = savedTheme ? savedTheme === "light" : prefersLight;

    document.documentElement.dataset.theme = useLightTheme ? "light" : "dark";
    setIsLightTheme(useLightTheme);
  }, []);

  const toggleTheme = () => {
    const nextIsLightTheme = !isLightTheme;
    document.documentElement.dataset.theme = nextIsLightTheme ? "light" : "dark";
    window.localStorage.setItem("portfolio-theme", nextIsLightTheme ? "light" : "dark");
    setIsLightTheme(nextIsLightTheme);
  };

  return (
    <main className="portfolio-page">
      <header className="topbar">
        <a href="#top" className="brand" aria-label="Anamika Singh home">
          ANAMIKA <span>SINGH</span>
        </a>

        <div className="topbar-actions">
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isLightTheme ? "dark" : "light"} mode`}
            title={`Switch to ${isLightTheme ? "dark" : "light"} mode`}
          >
            {isLightTheme ? <Moon size={17} /> : <Sun size={17} />}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow">Full-Stack &amp; MERN Stack Developer</p>
          <h1>ANAMIKA SINGH</h1>
          <p className="hero-intro">
            I build reliable, scalable, and user-focused web applications as a Full-Stack and
            MERN Stack Developer using React.js, TypeScript, Node.js, Express.js, MongoDB, and PostgreSQL.
          </p>

          <div className="cta-row">
            <a href="#projects" className="primary-btn">
              View My Projects
              <ArrowDownRight size={18} />
            </a>
            <a href="/Anamika_Singh_Resume.pdf" download className="secondary-btn">
              <Download size={16} />
              Download Resume
            </a>
            <a href="mailto:anamikasingh16052000@gmail.com" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="mini-stats" aria-label="Quick facts">
            <div>
              <strong>2+ years</strong>
              <span>Experience</span>
            </div>
            <div>
              <strong>10+</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Product mindset</span>
            </div>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Profile card">
          <div className="profile-glow" />
          <div className="profile-card">
            <div className="avatar">
              <img src="/Anamika_Profile_photo.jpeg" alt="Anamika Singh" />
            </div>
            <div className="profile-info">
              <span className="status-dot" />
              Open to suitable software-development opportunities
            </div>
            <div className="info-block">
              <small>Current Role</small>
              <h3>Associate Software Engineer</h3>
              <p>AIEnsured · Bengaluru</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="section about" id="about">
        <div className="section-heading">
          <p>About Me</p>
          <h2>Engineering products that are practical, maintainable, and user-first.</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a MERN Stack Developer based in Bengaluru, India, with experience building
              full-stack web applications, responsive interfaces, REST APIs, authentication
              systems, database-driven platforms, and AI-enabled solutions.
            </p>
            <p>
              Currently, I work as an Associate Software Engineer at AIEnsured, where I collaborate
              with a cross-functional engineering team on application development, API optimization,
              testing, deployment, and production workflows.
            </p>
            <p>
              I enjoy transforming complex business requirements into maintainable and user-friendly
              products. My experience also includes manual testing, API testing, regression testing,
              CI/CD deployment, mentoring, and working with Agile development practices.
            </p>
          </div>

          <div className="quick-info">
            <div>
              <span>Name</span>
              <strong>Anamika Singh</strong>
            </div>
            <div>
              <span>Role</span>
              <strong>MERN Stack Developer</strong>
            </div>
            <div>
              <span>Location</span>
              <strong>Bengaluru, India</strong>
            </div>
            <div>
              <span>Experience</span>
              <strong>2+ years</strong>
            </div>
            <div>
              <span>Education</span>
              <strong>MCA</strong>
            </div>
            <div>
              <span>Languages</span>
              <strong>English, Hindi</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="section-heading narrow">
          <p>Technical Skills</p>
          <h2>Tools and stacks I use to build complete products.</h2>
        </div>

        <div className="skill-groups">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="skill-group">
              <h3>{group}</h3>
              <div className="pill-list">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-heading narrow">
          <p>Professional Experience</p>
          <h2>Hands-on experience building, shipping, and improving products.</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article key={item.role} className="timeline-item">
              <div className="timeline-top">
                <span>{item.period}</span>
                <span>{item.company}</span>
              </div>
              <h3>{item.role}</h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {"links" in item && item.links ? (
                <div className="experience-links">
                  {item.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading narrow">
          <p>Featured Projects</p>
          <h2>Product work with business value, technical depth, and practical execution.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-header">
                <span>Project</span>
                <div className="project-links">
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} title="Open live demo">
                    <ArrowUpRight size={18} />
                  </a>
                  {"github" in project && project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} GitHub repository`} title="Open GitHub repository">
                      <GitHubIcon />
                    </a>
                  ) : null}
                </div>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="pill-list small">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section value-row">
        <div className="value-card">
          <Sparkles size={22} />
          <h3>Full-Stack Development</h3>
          <p>I can move from interface design through API, database, testing, and deployment.</p>
        </div>
        <div className="value-card">
          <Trophy size={22} />
          <h3>Quality & Reliability</h3>
          <p>I think beyond feature delivery and care about validation, performance, and maintainability.</p>
        </div>
        <div className="value-card">
          <Star size={22} />
          <h3>AI & Product Thinking</h3>
          <p>I build modern systems with real business value, not just visual polish.</p>
        </div>
      </section>

      <section className="section process">
        <div className="section-heading narrow">
          <p>My Development Process</p>
          <h2>A structured workflow that balances quality and speed.</h2>
        </div>

        <ol className="process-list">
          {process.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section certs">
        <div className="section-heading narrow">
          <p>Certifications</p>
          <h2>Learning from practice, training, and continued technical growth.</h2>
        </div>

        <ul className="cert-list">
          {certifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-card">
          <div>
            <p>Contact Me</p>
            <h2>I am open to Full-Stack Developer and MERN Stack Developer opportunities.</h2>
          </div>

          <div className="contact-actions">
            {/* <a href="mailto:anamikasingh16052000@gmail.com" className="primary-btn">
              <Mail size={18} />
              anamikasingh16052000@gmail.com
            </a> */}
            <div className="social-links">
              <a
                href="mailto:anamikasingh16052000@gmail.com"
                aria-label="Send email"
                title="Send email"
              >
                <Mail size={18} />
              </a>
              <a href="https://github.com/Anamika-Singh1" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/anamika-singh-98b0511b4" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-row">
          <p>
            <MapPin size={16} />
            Bengaluru, India
          </p>
          <p>
            <BriefcaseBusiness size={16} />
            Full-Stack Engineering
          </p>
        </div>
        <p className="copyright">© 2026 Anamika Singh. All rights reserved.</p>
      </footer>
    </main>
  );
}

