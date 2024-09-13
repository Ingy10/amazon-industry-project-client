import './ReviewList.scss'
import Review from '../Review/Review'
import { useState } from 'react';

function ReviewList() {

  const array = [
    {
      id: 1,
      username: "Jesse",
      rating: 5,
      title: "Exceeded expectations",
      timestamp: 1724917365000,
      verified_purchase: true,
      vine_reviewer: true,
      helpful_vote: 18,
      text: "I'll start by saying that I previously owned a pair of original AirPods for several years, and while they served me well, I felt it was time for an upgrade. Enter the AirPods Pro—an extraordinary improvement in every way. The first thing that struck me was the sound quality. It's a massive leap from the original AirPods, offering rich, deep bass that adds a new dimension to my favorite tracks. The highs are beautifully crisp, bringing out details in music that I hadn't noticed before. Another standout feature is the noise cancellation. Whether I'm on a noisy commute or in a crowded café, the AirPods Pro do an impressive job of muting the background noise, allowing me to fully immerse myself in the audio experience. The transparency mode is equally impressive, seamlessly letting in outside sounds when needed without having to remove the earbuds. The fit of the AirPods Pro is another significant upgrade. The customizable ear tips make them much more comfortable for extended wear, and they stay secure even during workouts. I never had that with the original AirPods, which would occasionally slip out. Battery life is solid, and the wireless charging case is a convenient bonus. The overall build quality feels premium, with a sleek design that continues the minimalist aesthetic Apple is known for. In short, the AirPods Pro have exceeded my expectations in every way. They’re a must-have for anyone looking to elevate their audio experience, whether you’re upgrading from the original AirPods or new to the Apple ecosystem. Highly recommended.",
    },
    {
      id: 2,
      username: "Jesse",
      rating: 4,
      title: "Exceeded expectations",
      timestamp: 1722917364000,
      verified_purchase: true,
      vine_reviewer: false,
      helpful_vote: 24,
      text: "I'll start by saying that I previously owned a pair of original AirPods for several years, and while they served me well, I felt it was time for an upgrade. Enter the AirPods Pro—an extraordinary improvement in every way. The first thing that struck me was the sound quality. It's a massive leap from the original AirPods, offering rich, deep bass that adds a new dimension to my favorite tracks. The highs are beautifully crisp, bringing out details in music that I hadn't noticed before. Another standout feature is the noise cancellation. Whether I'm on a noisy commute or in a crowded café, the AirPods Pro do an impressive job of muting the background noise, allowing me to fully immerse myself in the audio experience. The transparency mode is equally impressive, seamlessly letting in outside sounds when needed without having to remove the earbuds. The fit of the AirPods Pro is another significant upgrade. The customizable ear tips make them much more comfortable for extended wear, and they stay secure even during workouts. I never had that with the original AirPods, which would occasionally slip out. Battery life is solid, and the wireless charging case is a convenient bonus. The overall build quality feels premium, with a sleek design that continues the minimalist aesthetic Apple is known for. In short, the AirPods Pro have exceeded my expectations in every way. They’re a must-have for anyone looking to elevate their audio experience, whether you’re upgrading from the original AirPods or new to the Apple ecosystem. Highly recommended.",
    },
    {
      id: 3,
      username: "Jesse",
      rating: 3.5,
      title: "Exceeded expectations",
      timestamp: 1725917368000,
      verified_purchase: false,
      vine_reviewer: false,
      helpful_vote: 3,
      text: "I'll start by saying that I previously owned a pair of original AirPods for several years, and while they served me well, I felt it was time for an upgrade. Enter the AirPods Pro—an extraordinary improvement in every way. The first thing that struck me was the sound quality. It's a massive leap from the original AirPods, offering rich, deep bass that adds a new dimension to my favorite tracks. The highs are beautifully crisp, bringing out details in music that I hadn't noticed before. Another standout feature is the noise cancellation. Whether I'm on a noisy commute or in a crowded café, the AirPods Pro do an impressive job of muting the background noise, allowing me to fully immerse myself in the audio experience. The transparency mode is equally impressive, seamlessly letting in outside sounds when needed without having to remove the earbuds. The fit of the AirPods Pro is another significant upgrade. The customizable ear tips make them much more comfortable for extended wear, and they stay secure even during workouts. I never had that with the original AirPods, which would occasionally slip out. Battery life is solid, and the wireless charging case is a convenient bonus. The overall build quality feels premium, with a sleek design that continues the minimalist aesthetic Apple is known for. In short, the AirPods Pro have exceeded my expectations in every way. They’re a must-have for anyone looking to elevate their audio experience, whether you’re upgrading from the original AirPods or new to the Apple ecosystem. Highly recommended.",
    }
  ]

  const [sortMethod, setSortMethod] = useState("top")
  const [filterMethod, setFilterMethod] = useState("none")
  const [filterParameter, setFilterParmeter] = useState(true)

  // Filter Function (Will change with what filter user picks)
  const filterFunction = (filter, param) => {
      if (filter === "verified") {
        return (review) => review.verified_purchase === param
      } else if (filter === "rating") {
        return (review) => review.rating === param
      } else if (filter === "vine") {
        return (review) => review.vine_reviewer === param
      } else if (filter === "none") {
        return (review) => review
      }
  }

  // Sort Function (Will Change with what sort method user picks)
  const sortFunction = (sort) => {
      if (sort === "recent") {
        return function(a, b){return b.timestamp - a.timestamp}
      } else if (sort === "top") {
        return function(a, b){return b.helpful_vote - a.helpful_vote}
      }
  }

  const changeSortMethod = (event) => {
      setSortMethod(event.target.value)
  }

  const changeFilterMethod = (event) => {
    setFilterMethod(event.target.value)
  }

  return (
    <>
        <h3 className="review-list__title">Reviews from the United States</h3>
        <form className="review-list__dropdowns">
          <select name="sorting" id="sorting" className="review-list__sort" onChange={changeSortMethod}>
            <option value="top">Top Reviews</option>
            <option value="recent">Recent Reviews</option>
          </select>
          <select name="filtering" id="filtering" className="review-list__filter" onChange={changeFilterMethod}>
            <option value="none">All Reviews</option>
            <option value="verified">Verified purchase only</option>
            <option value="vine">Vine reviewers only</option>
          </select>
        </form>
        {
          array.filter(filterFunction(filterMethod, true)).sort(sortFunction(sortMethod)).map((review) => (
            <Review key={review.id} data={review} />
          ))
        }
    </>
  )
}

export default ReviewList