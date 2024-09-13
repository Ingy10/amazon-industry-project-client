import './ReviewList.scss'
import Review from '../Review/Review'
import axios from 'axios'
import { useEffect, useState } from 'react';

function ReviewList() {

  const apiUrl = `${import.meta.env.VITE_API_URL}`;

  const [reviewData, setReviewData] = useState([])
  const [sortMethod, setSortMethod] = useState("top")
  const [filterMethod, setFilterMethod] = useState("none")
  const [filterParameter, setFilterParmeter] = useState(1)

  // API GET Function
  const fetchReviews = async () => {
    try {
      let response = await axios.get(apiUrl + "/product")
      setReviewData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchReviews();
  }, []);

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

  const reviewTypeSort = (sortMethod) => {
    if (sortMethod === "top") {
      return "Top "
    } else if (sortMethod === "recent") {
      return "Recent "
    }
  }

  const reviewTypeFilter = (filterMethod) => {
    if (filterMethod === "none") {
      return ""
    } else if (filterMethod === "verified") {
      return "Verified "
    } else if (filterMethod === "vine") {
      return "Vine "
    } 
  }

  return (
    <>
        <div className="review-list__head">
          <h3 className="review-list__title">{reviewTypeSort(sortMethod)} {reviewTypeFilter(filterMethod)} Reviews from the United States</h3>
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
        </div>
        {
          reviewData.filter(filterFunction(filterMethod, filterParameter)).sort(sortFunction(sortMethod)).map((review) => (
            <Review key={review.id} data={review} />
          ))
        }
    </>
  )
}

export default ReviewList