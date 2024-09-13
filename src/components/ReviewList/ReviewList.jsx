import './ReviewList.scss'
import Review from '../Review/Review'

function ReviewList() {

  const array = [
    {
      username: "Jesse",
      rating: 5,
      title: "Exceeded expectations",
      timestamp: 1724917364000,
      verified_purchase: true,
      helpful_vote: 18,
      text: "I'll start by saying that I previously owned a pair of original AirPods for several years, and while they served me well, I felt it was time for an upgrade. Enter the AirPods Pro—an extraordinary improvement in every way. The first thing that struck me was the sound quality. It's a massive leap from the original AirPods, offering rich, deep bass that adds a new dimension to my favorite tracks. The highs are beautifully crisp, bringing out details in music that I hadn't noticed before. Another standout feature is the noise cancellation. Whether I'm on a noisy commute or in a crowded café, the AirPods Pro do an impressive job of muting the background noise, allowing me to fully immerse myself in the audio experience. The transparency mode is equally impressive, seamlessly letting in outside sounds when needed without having to remove the earbuds. The fit of the AirPods Pro is another significant upgrade. The customizable ear tips make them much more comfortable for extended wear, and they stay secure even during workouts. I never had that with the original AirPods, which would occasionally slip out. Battery life is solid, and the wireless charging case is a convenient bonus. The overall build quality feels premium, with a sleek design that continues the minimalist aesthetic Apple is known for. In short, the AirPods Pro have exceeded my expectations in every way. They’re a must-have for anyone looking to elevate their audio experience, whether you’re upgrading from the original AirPods or new to the Apple ecosystem. Highly recommended.",
    },
    {
      username: "Jesse",
      rating: 4,
      title: "Exceeded expectations",
      timestamp: 1724917364000,
      verified_purchase: true,
      helpful_vote: 18,
      text: "I'll start by saying that I previously owned a pair of original AirPods for several years, and while they served me well, I felt it was time for an upgrade. Enter the AirPods Pro—an extraordinary improvement in every way. The first thing that struck me was the sound quality. It's a massive leap from the original AirPods, offering rich, deep bass that adds a new dimension to my favorite tracks. The highs are beautifully crisp, bringing out details in music that I hadn't noticed before. Another standout feature is the noise cancellation. Whether I'm on a noisy commute or in a crowded café, the AirPods Pro do an impressive job of muting the background noise, allowing me to fully immerse myself in the audio experience. The transparency mode is equally impressive, seamlessly letting in outside sounds when needed without having to remove the earbuds. The fit of the AirPods Pro is another significant upgrade. The customizable ear tips make them much more comfortable for extended wear, and they stay secure even during workouts. I never had that with the original AirPods, which would occasionally slip out. Battery life is solid, and the wireless charging case is a convenient bonus. The overall build quality feels premium, with a sleek design that continues the minimalist aesthetic Apple is known for. In short, the AirPods Pro have exceeded my expectations in every way. They’re a must-have for anyone looking to elevate their audio experience, whether you’re upgrading from the original AirPods or new to the Apple ecosystem. Highly recommended.",
    },
    {
      username: "Jesse",
      rating: 3.5,
      title: "Exceeded expectations",
      timestamp: 1724917364000,
      verified_purchase: true,
      helpful_vote: 18,
      text: "I'll start by saying that I previously owned a pair of original AirPods for several years, and while they served me well, I felt it was time for an upgrade. Enter the AirPods Pro—an extraordinary improvement in every way. The first thing that struck me was the sound quality. It's a massive leap from the original AirPods, offering rich, deep bass that adds a new dimension to my favorite tracks. The highs are beautifully crisp, bringing out details in music that I hadn't noticed before. Another standout feature is the noise cancellation. Whether I'm on a noisy commute or in a crowded café, the AirPods Pro do an impressive job of muting the background noise, allowing me to fully immerse myself in the audio experience. The transparency mode is equally impressive, seamlessly letting in outside sounds when needed without having to remove the earbuds. The fit of the AirPods Pro is another significant upgrade. The customizable ear tips make them much more comfortable for extended wear, and they stay secure even during workouts. I never had that with the original AirPods, which would occasionally slip out. Battery life is solid, and the wireless charging case is a convenient bonus. The overall build quality feels premium, with a sleek design that continues the minimalist aesthetic Apple is known for. In short, the AirPods Pro have exceeded my expectations in every way. They’re a must-have for anyone looking to elevate their audio experience, whether you’re upgrading from the original AirPods or new to the Apple ecosystem. Highly recommended.",
    }
  ]

  return (
    <>
        <h3 className="review-list__title">Reviews from the United States</h3>
        {
          array.filter((review) => review.rating >= 3).map((review) => (
            <Review data={review} />
          ))
        }
    </>
  )
}

export default ReviewList