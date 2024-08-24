import styled from 'styled-components';
import TextWithBackground from './TextWithBackground';
const JobPostingSection = styled.section`
  /* padding: 2rem; */
`;

const H1 = styled.h1`
  margin-top: 0;
`;
function SectionJobPosting() {
  return (
    <JobPostingSection>
      <TextWithBackground>Financial Analyst</TextWithBackground>
      {/* <H1>Financial Analyst</H1> */}
      <p>
        <strong>Company:</strong> Quantum Finance Group
      </p>
      <p>
        <strong>Location:</strong> Seattle, WA
      </p>

      <h2>About Us</h2>
      <p>
        Quantum Finance Group is a leading financial services firm specializing
        in investment management and risk analysis. With a commitment to
        innovation and excellence, we empower our clients to make informed
        financial decisions.
      </p>

      <h2>Responsibilities</h2>
      <ul>
        <li>
          Conduct financial modeling, variance analysis, and budgeting for
          investment portfolios.
        </li>
        <li>
          Analyze market trends, assess risk, and recommend strategic
          adjustments.
        </li>
        <li>
          Collaborate with portfolio managers, traders, and research teams to
          optimize investment strategies.
        </li>
        <li>
          Prepare comprehensive reports and presentations for executive
          leadership.
        </li>
        <li>
          Monitor KPIs, track performance metrics, and identify growth
          opportunities.
        </li>
      </ul>

      <h2>Qualifications</h2>
      <ul>
        <li>Bachelor's degree in Finance, Accounting, or related field.</li>
        <li>
          Minimum 5 years of experience as a Financial Analyst in asset
          management.
        </li>
        <li>Proficiency in Excel, Bloomberg, and financial modeling tools.</li>
        <li>Strong analytical skills with attention to detail.</li>
        <li>Excellent communication and interpersonal abilities.</li>
      </ul>

      <h2>Preferred Qualifications</h2>
      <ul>
        <li>Master's degree in Finance or CFA designation.</li>
        <li>Experience in fixed income or equity analysis.</li>
        <li>Advanced Excel skills (pivot tables, macros, VBA).</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Competitive salary and performance-based bonuses.</li>
        <li>Comprehensive health coverage and retirement plans.</li>
        <li>Professional development opportunities.</li>
      </ul>

      <p>
        How to Apply: Interested candidates should submit their resume and a
        cover letter highlighting their relevant experience to{' '}
        <a href="mailto:jobs@quantumfinancegroup.com">
          jobs@quantumfinancegroup.com
        </a>
        .
      </p>
    </JobPostingSection>
  );
}

export default SectionJobPosting;
