import styled from 'styled-components';
import TextWithBackground from './TextWithBackground';
const JobPostingSection = styled.section`
  /* padding: 2rem; */
`;

const H1 = styled.h1`
  margin-top: 0;
`;
const GridItemL = styled.div`
  grid-area: JobListing;
  /* background-color: #161b22; */
  border-radius: 1.5rem;
  height: 580px;
  padding-right: 1.5rem;
`;

function SectionJobPosting() {
  return (
    <GridItemL>
      <JobPostingSection>
        <TextWithBackground>Web Developer</TextWithBackground>
        {/* <H1>Financial Analyst</H1> */}
        <p>
          <strong>Company:</strong> Quantum Web Solutions
        </p>
        <p>
          <strong>Location:</strong> Seattle, WA
        </p>
        <h2>About Us</h2>
        <p>
          Quantum Web Solutions is a dynamic and innovative web development
          agency committed to creating exceptional digital experiences. We
          specialize in building responsive websites, web applications, and
          e-commerce platforms that engage users and drive results.
        </p>
        <h2>Responsibilities</h2>
        <ul>
          <li>
            Collaborate with designers and project managers to create visually
            appealing and functional websites.
          </li>
          <li>
            Develop and maintain web applications using HTML, CSS, JavaScript,
            and other relevant technologies.
          </li>
          <li>
            Optimize website performance, ensuring fast load times and smooth
            user interactions.
          </li>
          <li>
            Implement responsive design principles to ensure compatibility
            across various devices and screen sizes.
          </li>
          <li>
            Troubleshoot and debug issues, ensuring cross-browser compatibility.
          </li>
          <li>
            Stay up-to-date with industry trends and emerging technologies.
          </li>
        </ul>
        <h2>Qualifications</h2>
        <ul>
          <li>
            Bachelor’s degree in Computer Science, Web Development, or related
            field.
          </li>
          <li>Proficiency in HTML, CSS, and JavaScript.</li>
          <li>
            Experience with front-end frameworks (e.g., React, Angular, Vue.js).
          </li>
          <li>
            Knowledge of back-end technologies (e.g., Node.js, Python, Ruby on
            Rails).
          </li>
          <li>Familiarity with version control systems (e.g., Git).</li>
          <li>Strong problem-solving skills and attention to detail.</li>
          <li>Excellent communication and teamwork abilities.</li>
        </ul>
        <h2>Preferred Qualifications</h2>
        <ul>
          <li>
            Experience with responsive design and mobile-first development.
          </li>
          <li>Knowledge of SEO best practices.</li>
          <li>Understanding of web security principles.</li>
          <li>Portfolio showcasing previous web development projects.</li>
        </ul>
        <h2>Benefits</h2>
        <ul>
          <li>Competitive salary and performance-based bonuses.</li>
          <li>Health and wellness programs.</li>
          <li>Professional development opportunities.</li>
          <li>Fun and collaborative work environment.</li>
        </ul>
        <h2>How to Apply</h2>
        <p>
          Interested candidates should submit their resume, cover letter, and
          portfolio to{' '}
          <a href="mailto:careers@quantumwebsolutions.com">
            careers@quantumwebsolutions.com
          </a>
          .
        </p>
      </JobPostingSection>
    </GridItemL>
  );
}

export default SectionJobPosting;
