import './ReviewList.scss'
import Review from '../Review/Review'
import axios from 'axios'
import { useEffect, useState } from 'react';
import KeywordButton from '../KeywordButton/KeywordButton';

function ReviewList() {

  const apiUrl = `${import.meta.env.VITE_API_URL}`;

  const [reviewData, setReviewData] = useState([])
  const [sortMethod, setSortMethod] = useState("top")
  const [filterMethod, setFilterMethod] = useState("none")
  const [filterParameter, setFilterParmeter] = useState(1)
  
  const [keywords, setKeywords] = useState([])
  const [fullKeywords, setFullKeywords] = useState([])
  const [keywordFilter, setKeywordFilter] = useState("none")
  const [keywordReviews, setKeywordReviews] = useState([])

  // API GET Function
  const fetchReviews = async () => {
    try {
      let response = await axios.get(apiUrl + "/product")
      setReviewData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchKeywords = async () => {
    try {
      let response = await axios.get(apiUrl + "/keywords")
      setFullKeywords(response.data)
      let fullKeywordArray = response.data
      let keywordArray = []

      for (let i = 0; i < fullKeywordArray.length; i++) {
        if (keywordArray.includes(fullKeywordArray[i].keyword) === false) {
          keywordArray.push(fullKeywordArray[i].keyword)
        }
      }
      
      setKeywords(keywordArray)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchKeywordReviews = async () => {
    try {
      if (keywordFilter !== "none") {
        let response = await axios.get(apiUrl + `/keywords/${keywordFilter}`)
        setKeywordReviews(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchReviews();
    fetchKeywords();
  }, []);

  useEffect(() => {
    fetchKeywordReviews();
  }, [keywordFilter]);

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

  // Keyword Filter FUnction (Will change with what filter user picks)
  const filterKeyword = (keyword) => {
    if (keyword === "none") {
      return (review) => review
    } else {
      return (review) => review.keyword === keyword
    }
  }

  const changeSortMethod = (event) => {
      setSortMethod(event.target.value)

  }

  const changeFilterMethod = (event) => {
    setFilterMethod(event.target.value)
  }

  const changeKeywordFilter = (event) => {
    if (event.target.value === keywordFilter) {
      setKeywordFilter("none")
    } else {
      setKeywordFilter(`${event.target.value}`)
    }
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

  const reviewMap = (keyword) => {
    if (keyword === "none") {
      return (
        <>
              {
                reviewData.filter(filterFunction(filterMethod, filterParameter)).sort(sortFunction(sortMethod)).map((review) => (
                  <Review key={review.id} data={review} keywords={fullKeywords} />
                ))
              }
        </>
      )
    } else {
      return (
        <>
          {
            keywordReviews.filter(filterFunction(filterMethod, filterParameter)).sort(sortFunction(sortMethod)).map((review) => (
              <Review key={review.id} data={review} keywords={fullKeywords} />
            ))
          }
        </>
      )
      
    }
  }

  return (
    <>
        <section className="review-summary">
          <h2 className="review-summary__title">Customers say</h2>
          <p className="review-summary__copy">Customers found them to be incredibly convenient and reliable. They appreciated the excellent sound quality, comfortable fit, and seamless integration with their iPhone. Despite the higher price, many felt the overall experience made the AirPods a worthwhile investment.</p>
          <p className="review-summary__disclaimer">AI generated from the text of customer reviews</p>
          <p className="review-summary__select">Select to learn more</p>
          {
            keywords.slice(0, 6).map((keyword) => (
              <KeywordButton key={keyword} value={keyword} text={keyword} change={changeKeywordFilter} />
            ))
          }
        </section>
        <section className="review-list">
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
          {reviewMap(keywordFilter)}
        </section>
        
    </>
  )

  
}

export default ReviewList