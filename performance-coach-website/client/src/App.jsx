import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Booking from './pages/Booking.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}
