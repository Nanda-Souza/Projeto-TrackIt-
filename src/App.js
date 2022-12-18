
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import HabitPage from "./pages/HabitPage";
import HistoryPage from "./pages/HistoryPage";




export default function App() { 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/hoje" element={<HomePage />} />
        <Route path="//habitos" element={<HabitPage />} />
        <Route path="/historico" element={<HistoryPage />} />
      </Routes>
    
    
    </BrowserRouter>
    
      
    
  );
};

