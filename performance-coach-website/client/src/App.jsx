import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Restringing from './pages/Restringing.jsx';
import Booking from './pages/Booking.jsx';
import CompetitorPackage from './pages/CompetitorPackage.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restringing" element={<Restringing />} />
        <Route path="/competitorPackage" element={<CompetitorPackage />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}
