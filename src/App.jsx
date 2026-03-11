import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import LoadingBar from './components/LoadingBar/LoadingBar';

import './App.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home/Home'));
const DynamicPage = lazy(() => import('./pages/index'));
const BlogList = lazy(() => import('./pages/Blogs/BlogList'));
const BlogDetails = lazy(() => import('./pages/Blogs/BlogDetails'));
const CaseStudyList = lazy(() => import('./pages/CaseStudies/CaseStudyList'));
const CaseStudyDetails = lazy(() => import('./pages/CaseStudies/CaseStudyDetails'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

const PrivacyPolicy = lazy(() => import('./pages/Legal/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/Legal/TermsOfUse'));
function App() {
  return (
    <Router>
      <LoadingBar />
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Centralized Dynamic Pages */}
          <Route path="/about" element={<DynamicPage />} />
          <Route path="/services" element={<DynamicPage />} />
          {/* == sub services == */}
          <Route path="/services/:slug" element={<DynamicPage />} />
          <Route path="/industries" element={<DynamicPage />} />
          <Route path="/:slug" element={<DynamicPage />} />

          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/casestudy" element={<CaseStudyList />} />
          <Route path="/casestudy/:slug" element={<CaseStudyDetails />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
