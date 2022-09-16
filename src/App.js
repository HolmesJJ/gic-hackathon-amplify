import "./App.css";
import LoginEntry from "./scenes/LoginEntry";
import FoodEntry from "./scenes/FoodEntry";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginEntry />}></Route>
        <Route path="/food" element={<FoodEntry />}></Route>
        <Route path="login" element={<LoginEntry />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
