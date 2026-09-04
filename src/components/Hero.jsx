import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <p className="hero-eyebrow">Open to Associate Software Developer roles · Bengaluru</p>

      <h1 className="hero-title display">
        Four years of making circuits<br />
        think. Now teaching that<br />
        instinct to JavaScript.
      </h1>

      <p className="hero-sub">
        Mohana Krishna is a B.Tech Electrical &amp; Computer Engineering graduate
        who spent his degree wiring sensors and firmware before turning that
        same real-time, state-driven thinking toward React and the browser.
      </p>

      <div className="hero-actions">
        <Link to="/projects" className="btn btn-primary">See the work</Link>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">View resume</a>
      </div>

      <div className="hero-readout">
        <div><strong className="display">20%</strong><span>efficiency gain, solar automation system</span></div>
        <div><strong className="display">1</strong><span>peer-reviewed paper, Springer 2025</span></div>
        <div><strong className="display">2025</strong><span>B.Tech graduate, EEE(ELC)</span></div>
      </div>
    </section>
  );
}
