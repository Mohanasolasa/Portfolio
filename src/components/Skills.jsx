import './Skills.css';

const shipping = ['HTML', 'CSS', 'JavaScript', 'SQL', 'Git', 'GitHub'];
const learning = ['React JS'];

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-label">Skills</p>
      <h2 className="section-title">Shipping today, building toward</h2>

      <div className="skills-ledger">
        <div className="ledger-col">
          <h3>Shipping today</h3>
          <ul>
            {shipping.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div className="ledger-col">
          <h3>Building toward</h3>
          <ul>
            {learning.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
