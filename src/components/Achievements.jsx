import './Achievements.css';

export default function Achievements() {
  return (
    <section id="research">
      <p className="section-label">Research</p>
      <h2 className="section-title">Published, peer-reviewed</h2>

      <div className="citation">
        <p className="citation-line">
          Solasa, V. N. M. K. <em>Study on Anomaly Detection in Solar Power
          Conversion Systems Using Machine Learning Technique.</em> Springer,
          2025.
        </p>
        <p className="citation-note">
          A comparative analysis of machine learning models for detecting
          anomalies in solar power conversion systems — applying the same
          analytical rigor now going into debugging and reasoning about
          software.
        </p>
      </div>
    </section>
  );
}
