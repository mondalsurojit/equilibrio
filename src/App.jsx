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
import Highlights from "./pages/Highlights.page";

function App() {
  console.log(
    "%cSo you are a developer...huh? %cFine! Make sure to check out the %cCredits Page%c (https://equilibrio.org.in/credits) for all the hard work put into this website.\n\n" +
    "If you are not a developer, then welcome once again! We hope you enjoy your stay and find all the information you need. If you have any questions, feel free to reach out to us!\n\n" +
    "And yeah, please don't ask when the next event is. Let us surprise you! 🎉",
    "color: cyan; font-weight: bold;",
    "color: lime; font-style: italic;",
    "color: cyan; font-weight: bold; text-decoration: underline; cursor: pointer; font-style: italic;",
    "color: lime; font-style: italic;"
  );
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
          <Route path="/highlights" element={<Highlights />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
        <Footer />
        <JumpToTop />
      </div>
    </Router>
  );
}

export default App;
