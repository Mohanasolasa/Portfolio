import './About.css';

export default function About() {
  return (
    <section id="about">
      <p className="section-label">About</p>
      <h2 className="section-title">From wiring boards to writing components</h2>

      <div className="about-body">
        <p>
          I graduated in Electrical and Computer Engineering from Amrita Vishwa
          Vidyapeetham in 2025. Most of my degree was spent closer to hardware
          than to a browser — writing firmware for ESP32 boards, wiring
          sensors, and building a solar-powered classroom system that made its
          own real-time decisions about power routing over UDP.
        </p>
        <p>
          That system improved energy efficiency by 20% through adaptive,
          occupancy-based sensor logic. It's the same kind of real-time,
          state-driven thinking that React asks for when it manages state and
          effects — the runtime changed, the instinct didn't.
        </p>
        <p>
          I'm currently building fluency in JavaScript and React fundamentals,
          alongside the core computer science I already carry: SQL. I'm not starting from zero — I'm
          redirecting four years of applied, systems-level problem solving
          toward software.
        </p>
      </div>

      <dl className="about-facts">
        <div><dt>Degree</dt><dd>B.Tech, Electrical &amp; Computer Engineering, 2025</dd></div>
        <div><dt>Core stack</dt><dd>JavaScript, HTML, CSS</dd></div>
        <div><dt>Building toward</dt><dd>React JS</dd></div>
        <div><dt>Also</dt><dd>SQL, Git, GitHub</dd></div>
        <div><dt>Based in</dt><dd>Sattenapalli, Andhra Pradesh — open to Bengaluru</dd></div>
      </dl>
    </section>
  );
}
