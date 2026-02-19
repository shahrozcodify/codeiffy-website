import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import StaffAugmentation from './pages/Services/StaffAugmentation';
import SoftwareDevelopment from './pages/Services/SoftwareDevelopment';

import AI from './pages/Services/AI';
import ProductDevelopment from './pages/Services/ProductDevelopment';
import Industries from './pages/Industries/Industries';
import BlogList from './pages/Blogs/BlogList';
import BlogDetails from './pages/Blogs/BlogDetails';
import CaseStudyList from './pages/CaseStudies/CaseStudyList';
import CaseStudyDetails from './pages/CaseStudies/CaseStudyDetails';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Career from './pages/Career/Career';
// import Partnerships from './pages/Partnerships/Partnerships';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsOfUse from './pages/Legal/TermsOfUse';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/artificial-intelligence" element={<AI />} />
        <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />

        <Route path="/services/product-development" element={<ProductDevelopment />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/case-studies" element={<CaseStudyList />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        {/* <Route path="/partnerships" element={<Partnerships />} /> */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}

export default App;
