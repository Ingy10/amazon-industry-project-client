import './BuyProduct.scss';

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
            src=""
            alt="location svg"
            className="buy-product__deliver-logo"
          />
          <p className="buy-product__deliver-location">
            Select delivery location
          </p>
        </div>
      </section>
    </>
  );
}

export default BuyProduct;
