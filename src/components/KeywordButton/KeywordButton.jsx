import './KeywordButton.scss'

function KeywordButton({ value, text, change }) {
  return (
    <>
        <button className="keyword-button" value={value} onClick={change}>{text}</button>
    </>
  )
}

export default KeywordButton