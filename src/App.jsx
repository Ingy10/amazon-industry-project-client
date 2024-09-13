import "./App.css";
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
