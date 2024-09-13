import "./Review.scss";

function Review({ data }) {
  const data2 = {
    username: "Jesse",
    rating: 5,
    title: "Exceeded expectations",
    date: "August 29, 2024",
    verified_purchase: true,
    helpful_vote: 18,
    text: "I'll start by saying that I previously owned a pair of original AirPods for several years, and while they served me well, I felt it was time for an upgrade. Enter the AirPods Pro—an extraordinary improvement in every way. The first thing that struck me was the sound quality. It's a massive leap from the original AirPods, offering rich, deep bass that adds a new dimension to my favorite tracks. The highs are beautifully crisp, bringing out details in music that I hadn't noticed before. Another standout feature is the noise cancellation. Whether I'm on a noisy commute or in a crowded café, the AirPods Pro do an impressive job of muting the background noise, allowing me to fully immerse myself in the audio experience. The transparency mode is equally impressive, seamlessly letting in outside sounds when needed without having to remove the earbuds. The fit of the AirPods Pro is another significant upgrade. The customizable ear tips make them much more comfortable for extended wear, and they stay secure even during workouts. I never had that with the original AirPods, which would occasionally slip out. Battery life is solid, and the wireless charging case is a convenient bonus. The overall build quality feels premium, with a sleek design that continues the minimalist aesthetic Apple is known for. In short, the AirPods Pro have exceeded my expectations in every way. They’re a must-have for anyone looking to elevate their audio experience, whether you’re upgrading from the original AirPods or new to the Apple ecosystem. Highly recommended.",
  };

  let verified = <></>

  if (data.verified_purchase === true) {
    verified = <p className="review__verified">Verified Purchase</p>
  } 

  return (
    <>
      <div className="review">
        <div className="review__poster">
          <div className="review__avatar"></div>
          <p className="review__username">{data.username}</p>
        </div>
        <div className="review__heading">
          <div className="review__rating">{data.rating} Stars</div>
          <p className="review__title">{data.title}</p>
        </div>
        <p className="review__timestamp">Reviewed in the United States on {data.date}</p>
        {verified}
        <p className="review__comment">{data.text}</p>
        <p className="review__helpful-count">{data.helpful_vote} people found this helpful</p>
        <button className="review__like">Helpful</button>
      </div>
    </>
  );
}

export default Review;
