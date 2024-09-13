import "./Review.scss";
import Stars from "../Stars/Stars";
import vine_badge from '../../assets/icons/prime__reviewer__badge.png'

function Review({ data, keywords }) {

  const timestampConverter = (timestamp) => {
    const rawDate = new Date(timestamp)
    let day = rawDate.getDate();
    let month = rawDate.getMonth() + 1;
    let year = rawDate.getFullYear();
    let formattedDate = `${month}/${day}/${year}`
    return formattedDate
  }

  let verified = <></>
  let badge = <></>

  if (data.verified_purchase === 1) {
    verified = <p className="review__verified">Verified Purchase</p>
  } 

  if (data.vine_reviewer) {
    badge = <img src={vine_badge} alt="vine reviewer badge" className="review__vine" />
  }

  return (
    <>
      <div className="review">
        <div className="review__poster">
          <div className="review__avatar"></div>
          <p className="review__username">{data.user_name}</p>
          {badge}
        </div>
        <div className="review__heading">
          <div className="review__rating"><Stars num={data.rating} /> </div>
          <p className="review__title">{data.title}</p>
        </div>
        <p className="review__timestamp">Reviewed in the United States on {timestampConverter(data.timestamp + 1700000000000)}</p>
        {verified}
        <p className="review__comment">{data.comment}</p>
        <p className="review__helpful-count">{data.helpful_vote} people found this helpful</p>
        <button className="review__like">Helpful</button>
      </div>
    </>
  );
}

export default Review;
