import './KeywordBreakdown.scss';
import KeywordChart from '../KeywordChart/KeywordChart';

function KeywordBreakdown({ keywords }) {
  return (
    <>
      <section className="keyword-breakdown">
        <h2 className="keyword-breakdown__header">Keyword Breakdown</h2>
        <KeywordChart keywords={keywords} />
      </section>
    </>
  );
}

export default KeywordBreakdown;
