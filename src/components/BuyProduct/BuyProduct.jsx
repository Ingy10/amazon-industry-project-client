import './BuyProduct.scss';
import locationLogo from '../../assets/icons/location.png';

function BuyProduct() {
  return (
    <>
      <section className="buy-product">
        <p className="buy-product__header">
          To see product details, add thisitem to your cart. You can always
          remove it later.
        </p>
        <div className="buy-product__deliver-container">
          <img
            src={locationLogo}
            alt="location svg"
            className="buy-product__deliver-logo"
          />
          <p className="buy-product__deliver-location">
            Select delivery location
          </p>
        </div>
        <select className="buy-product__quantity">
          <option value="1">Quantity: 1</option>
          <option value="2">Quantity: 2</option>
          <option value="3">Quantity: 3</option>
          <option value="4">Quantity: 4</option>
        </select>
        <div className="buy-product__add">
          <p className="buy-product__add-text">Add to Cart</p>
        </div>
        <div className="buy-product__buy">
          <p className="buy-product__buy-text">Buy Now</p>
        </div>
      </section>
    </>
  );
}

export default BuyProduct;
