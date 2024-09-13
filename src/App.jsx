import "./App.css";
// import Review from "./components/Review/Review";
// import ReviewList from "./components/ReviewList/ReviewList";
// import Stars from "./components/Stars/Stars";
import ProductPage from "./pages/ProductPage/ProductPage";
import SubmitReviewPage from "./pages/SubmitReviewPage/SubmitReviewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/review" element={<SubmitReviewPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
