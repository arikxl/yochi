import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./components/App/AppHeader/AppHeader";


import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
