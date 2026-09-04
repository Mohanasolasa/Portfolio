import './Projects.css';

const projects = [
  {
    title: 'Personal Portfolio Website',
    year: '2026',
    status: 'In progress',
    description: "This site — a React app with component architecture, hooks, and a controlled contact form, built to demonstrate real React fundamentals rather than just claim them.",
    tech: 'React · Vite',
  },
  {
    title: 'Solar-Powered Smart System with Sensor-Based Automation',
    year: 'May 2025',
    description: 'A solar-powered classroom system with grid backup and real-time occupancy-based automation over UDP — improved energy efficiency by 20% through adaptive sensor logic.',
    tech: 'ESP32 · ESP01 · UDP · Sensors',
  },
  {
    title: 'Home Automation System',
    year: 'Dec 2023',
    description: 'Motion- and light-sensor-driven home automation with RFID-based door access control.',
    tech: 'ESP32 · RFID · Sensors',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <p className="section-label">Projects</p>
      <h2 className="section-title">Selected work</h2>

      <div className="project-list">
        {projects.map((p) => (
          <div className="project-row" key={p.title}>
            <div className="project-row-head">
              <h3 className="display">{p.title}</h3>
              <span className="project-year mono">{p.year}</span>
            </div>
            {p.status && <span className="project-status">{p.status}</span>}
            <p className="project-desc">{p.description}</p>
            <p className="project-tech mono">{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
