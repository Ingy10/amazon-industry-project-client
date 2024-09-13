import './ProductPage.scss';
import ReviewList from '../../components/ReviewList/ReviewList';
import BuyProduct from '../../components/BuyProduct/BuyProduct';

function ProductPage() {
  return (
    <>
      <h1>Product Page</h1>
      <BuyProduct />
      <ReviewList />
    </>
  );
}

export default ProductPage;
