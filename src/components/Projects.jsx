import './Projects.css';

const projects = [{
  title: 'Circle',
  year: '2026',
  description: 'Privacy-first messaging platform with private groups, real-time 1-to-1 messaging, presence, typing indicators, and message receipts.',
  tech: 'React · Node.js · Express · MongoDB · Socket.io',
},
{
  title: 'SkillSwap',
  year: '2026',
  description: 'Peer-to-peer skill exchange platform with compatibility-based matching, real-time chat, scheduling, milestones, and reputation tracking.',
  tech: 'React · Node.js · Express · MongoDB · Socket.io',
},
{
  title: 'FoodLoop',
  year: '2026',
  description: 'Food waste management and biogas tracking platform connecting PG owners, collectors, administrators, and processing plants with location-based collector recommendations, route visualization, waste tracking, and biogas production monitoring.',
  tech: 'React · Node.js · Express · MongoDB · Leaflet · JWT',
},
{
  title: 'Personal Portfolio',
  year: '2026',
  description: 'Responsive React portfolio showcasing projects, skills, research, achievements, and contact information with reusable components.',
  tech: 'React · JavaScript · HTML · CSS · Vite',
},];

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
