import "./ReviewSubmitForm.scss";

function ReviewSubmitForm() {
  const productDescription =
    "Apple AirPods Pro 2 Wireless Earbuds, Bluetooth Headphones, Active Noise Cancellation, Transparency, Personalized Spatial Audio, High-Fidelity Sound, H2 Chip, USB-C Charging";
  const productImage = "p";

  return (
    <>
      <section className="review-form">
        <div className="review-form__section review-form__section--1">
          <h1 className="review-form__title">Create Review</h1>
          <div className="review-form__wrapper-1">
            <img className="review-form__img" src="" />
            <p className="review-form__description"></p>
          </div>
        </div>
        <form className="review-form__form">
          <div className="review-form__section review-form__section--2">
            <h3 className="review-form__rating-title">Overall Rating</h3>
            <input type="radio" name="stars" value="1" />
            <input type="radio" name="stars" value="1" />
            <input type="radio" name="stars" value="1" />
            <input type="radio" name="stars" value="1" />
            <input type="radio" name="stars" value="1" />
            <h3 className="review-form__headline-title">Add a headline</h3>
            <input
              className="review-form__headline-input"
              type="text"
              placeholder="What's most important to know?"
            />
          </div>
          <div className="review-form__section review-form__section--3">
            <h3 className="review-form__add-media-title">
              Add a photo or video
            </h3>
            <p className="review-form__add-media-text">
              Shoppers find images and videos more helpful than text alone
            </p>
            <input
              className="review-form__add-media-input"
              type="file"
              accept="image/*"
            />
          </div>
          <div className="review-form__section review-form__section--4">
            <h3 className="review-form__review-title">
              Add keywords on what you are writting the review about
            </h3>
            <ul className="review-form__keywords-wrapper">
              <li className="review-form__keywords">Sound Quality</li>
            </ul>
            <textarea className="review-form__review-description" type="text" />
          </div>
          <div className="review-form__section--5">
            <p className="review-form__footer-text">
              We will notify you via email as soon as your review is processed.
            </p>
            <button className="review-form__button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ReviewSubmitForm;
