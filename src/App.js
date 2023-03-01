import { Routes, Route } from "react-router-dom";
import AppFooter from "./components/App/AppFooter";
import AppHeader from "./components/App/AppHeader/AppHeader";


import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div className="App">
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <AppFooter/>

    </div>
  );
}

export default App;
