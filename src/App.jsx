import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar.component';
import JumpToTop from './components/JumpToTop.component';
import Footer from './components/Footer.component';

import Home from './pages/Home.page';
import Teams from './pages/Teams.page';
import Events from "./pages/Events.page";
import NotFound from './pages/NotFound.page';
import PrivacyPolicy from "./pages/PrivacyPolicy.page";
import Credits from "./pages/Credits.page";

function App() {
  return (
    <Router>
      <div className="bg-indigo-100 dark:bg-slate-900 text-gray-900 dark:text-gray-300 tracking-[-0.01em] min-h-screen max-w-screen-2xl mx-auto overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
        <Footer />
        <JumpToTop />
      </div>
    </Router>
  );
}

export default App;
