import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HeaderSkeleton from './components/Skeleton/HeaderSkeleton';
import './App.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home/Home'));
const Services = lazy(() => import('./pages/Services/Services'));
const StaffAugmentation = lazy(() => import('./pages/Services/StaffAugmentation'));
const SoftwareDevelopment = lazy(() => import('./pages/Services/SoftwareDevelopment'));
const AI = lazy(() => import('./pages/Services/AI'));
const ProductDevelopment = lazy(() => import('./pages/Services/ProductDevelopment'));
const Industries = lazy(() => import('./pages/Industries/Industries'));
const BlogList = lazy(() => import('./pages/Blogs/BlogList'));
const BlogDetails = lazy(() => import('./pages/Blogs/BlogDetails'));
const CaseStudyList = lazy(() => import('./pages/CaseStudies/CaseStudyList'));
const CaseStudyDetails = lazy(() => import('./pages/CaseStudies/CaseStudyDetails'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Career = lazy(() => import('./pages/Career/Career'));
const PrivacyPolicy = lazy(() => import('./pages/Legal/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/Legal/TermsOfUse'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<HeaderSkeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/artificial-intelligence" element={<AI />} />
          <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/product-development" element={<ProductDevelopment />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/casestudy" element={<CaseStudyList />} />
          <Route path="/casestudy/:slug" element={<CaseStudyDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
