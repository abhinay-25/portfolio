import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE | CGPA: 8.9</h4>
                <h5>Chaitanya Bharathi Institute of Technology (CBIT)</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Pursuing undergraduate studies with a strong foundation in computer science. Consistent academic excellence. Intermediate from Sri Chaitanya Junior College with 98.3%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathons & Competitions</h4>
                <h5>Multiple Events</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Winner of Krithothon 3.0 Hackathon (1st out of 250+ teams). Winner of Hacktoberfest Hackathon 2024. Achieved the 100 Days Active Badge on LeetCode.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Various Platforms</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              OCI Generative AI Certified Professional (2024). Ethical Hacking from NPTEL (2024). DSA using Java from Infosys Springboard (2025).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
