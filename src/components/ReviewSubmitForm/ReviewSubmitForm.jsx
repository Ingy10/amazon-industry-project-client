import "./ReviewSubmitForm.scss";
import airPods from "../../assets/images/airpod.png";
import emptyStar from "../../assets/icons/empty-star.png";
import fullStar from "../../assets/icons/full-star.png";

function ReviewSubmitForm() {
  const productDescription =
    "Apple AirPods Pro 2 Wireless Earbuds, Bluetooth Headphones, Active Noise Cancellation, Transparency, Personalized Spatial Audio, High-Fidelity Sound, H2 Chip, USB-C Charging";
  const productImage = airPods;
  const keywords = [
    {
      id: 1,
      word: "Sound Quality",
    },
    {
      id: 2,
      word: "Price",
    },
    {
      id: 3,
      word: "Functionality",
    },
    {
      id: 4,
      word: "Ease of use",
    },
    { id: 5, word: "Experience" },
    { id: 6, word: "Durability" },
  ];

  return (
    <>
      <section className="review-form">
        <div className="review-form__section review-form__section--1">
          <h1 className="review-form__title">Create Review</h1>
          <div className="review-form__wrapper-1">
            <span className="review-form__img-container">
              <img className="review-form__img" src={productImage} />
            </span>
            <p className="review-form__description">{productDescription}</p>
          </div>
        </div>
        <form className="review-form__form">
          <div className="review-form__section review-form__section--2">
            <h3 className="review-form__subtitle">Overall Rating</h3>
            <label className="review-form__stars">
              <input
                className="review-form__star-input"
                id="star1"
                type="radio"
                name="stars"
                value="1"
              />
              <label htmlFor="star1" className="review-form__star">
                <img className="review-form__star-image" src={emptyStar} />
              </label>
              <input
                className="review-form__star-input"
                id="star2"
                type="radio"
                name="stars"
                value="2"
              />
              <label htmlFor="star2" className="review-form__star">
                <img className="review-form__star-image" src={emptyStar} />
              </label>
              <input
                className="review-form__star-input"
                id="star3"
                type="radio"
                name="stars"
                value="3"
              />
              <label htmlFor="star3" className="review-form__star">
                <img className="review-form__star-image" src={emptyStar} />
              </label>
              <input
                className="review-form__star-input"
                id="star4"
                type="radio"
                name="stars"
                value="4"
              />
              <label htmlFor="star4" className="review-form__star">
                <img className="review-form__star-image" src={emptyStar} />
              </label>
              <input
                className="review-form__star-input"
                id="star5"
                type="radio"
                name="stars"
                value="5"
              />
              <label htmlFor="star5" className="review-form__star">
                <img className="review-form__star-image" src={emptyStar} />
              </label>
            </label>
            <h3 className="review-form__subtitle review-form__subtitle--headline">
              Add a headline
            </h3>
            <input
              className="review-form__headline-input"
              type="text"
              placeholder="What's most important to know?"
            />
          </div>
          <div className="review-form__section review-form__section--3">
            <h3 className="review-form__subtitle review-form__subtitle--add-media">
              Add a photo or video
            </h3>
            <p className="review-form__subtext">
              Shoppers find images and videos more helpful than text alone
            </p>
            <label className="review-form__add-media-label" htmlFor="add-media">
              <span className="review-form__add-media-placeholder">+</span>
            </label>
            <input
              className="review-form__add-media-input"
              id="add-media"
              type="file"
              accept="image/*"
            />
          </div>
          <div className="review-form__section review-form__section--4">
            <h3 className="review-form__subtitle">
              Add keywords on what you are writting the review about
            </h3>
            <ul className="review-form__keywords-wrapper">
              {keywords.map((keyword) => (
                <li className="review-form__keywords" key={keyword.id}>
                  {keyword.word}
                </li>
              ))}
            </ul>
            <textarea
              className="review-form__review-description"
              type="text"
              placeholder="What did you like or dislike? What did you use this product for?"
            />
          </div>
          <div className="review-form__section--5">
            <p className="review-form__subtext review-form__subtext--footer">
              We will notify you via email as soon as your review is processed.
            </p>
            <span className="review-form__button-container">
              <button className="review-form__button" type="submit">
                Submit
              </button>
            </span>
          </div>
        </form>
      </section>
    </>
  );
}

export default ReviewSubmitForm;
