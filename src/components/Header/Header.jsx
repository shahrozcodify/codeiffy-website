/* Codeifyy CRM Unified Header Component - Top tier removed per branding refinement */
import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiGlobe, FiUser, FiChevronDown, FiPhone, FiMenu, FiX, FiUsers, FiCode, FiPieChart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showTop, setShowTop] = useState(true);
    const [showRegionMenu, setShowRegionMenu] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

    const toggleMobileDropdown = (name) => {
        if (window.innerWidth <= 992) {
            setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
        }
    };

    const lastScrollY = useRef(0);
    const isScrolledRef = useRef(false);
    const scrollTolerance = 5;

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    const diff = Math.abs(currentScrollY - lastScrollY.current);

                    if (!isScrolledRef.current && currentScrollY > 100) {
                        setIsScrolled(true);
                        isScrolledRef.current = true;
                    } else if (isScrolledRef.current && currentScrollY < 50) {
                        setIsScrolled(false);
                        isScrolledRef.current = false;
                    }

                    if (diff > scrollTolerance) {
                        if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
                            setShowTop(false);
                        } else if (currentScrollY < lastScrollY.current) {
                            setShowTop(true);
                        }
                        lastScrollY.current = currentScrollY;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [activeService, setActiveService] = useState('staff-augmentation');

    const serviceImages = {
        'staff-augmentation': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
        'software-development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
        'artificial-intelligence': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        'product-development': 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800'
    };

    const serviceDescriptions = {
        'staff-augmentation': 'Scale your engineering capacity instantly with our vetted top 3% global talent.',
        'software-development': 'Agile, full-cycle software development delivering high-performance enterprise solutions.',
        'artificial-intelligence': 'Navigate digital transformation with strategic guidance and architecture optimization.',
        'product-development': 'From initial discovery to global launch, we build products that users love.'
    };

    return (
        <header className={`glass-nav ${isScrolled ? 'scrolled' : ''} ${!showTop ? 'top-hidden' : ''}`}>
            {/* Header top section removed for simplified navigation */}
            <div className="container">

                {/* Bottom Tier */}
                <div className="header-bottom">
                    <div className="header-bottom-left">
                        <div className="logo-transition-wrap">
                            <Link to="/">
                                <img src="/full-Logo.png" alt="Codeifyy" className="header-logo-cloud animate-pop-in" style={{ height: '40px' }} />
                            </Link>
                        </div>
                    </div>

                    <div className={`nav-links-wrap ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
                        <div className="mobile-menu-header">
                            <img src="/full-Logo.png" alt="Codeifyy" style={{ height: '40px' }} />
                            <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
                                <FiX />
                            </button>
                        </div>
                        <Link to="/" className="nav-link-secondary" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <div className={`nav-item ${activeMobileDropdown === 'services' ? 'mobile-dropdown-active' : ''}`}>
                            <span className="nav-link-secondary" onClick={() => toggleMobileDropdown('services')}>Services <FiChevronDown className="header-caret" /></span>
                            <div className="dropdown-content mega-menu-small">
                                <div className="mega-column">
                                    <div className="mega-title">Our Expertise</div>
                                    <Link
                                        to="/services/staff-augmentation"
                                        className={`mega-link-enhanced ${activeService === 'staff-augmentation' ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveService('staff-augmentation')}
                                    >
                                        <div className="mega-icon-box"><FiUsers /></div>
                                        <div className="mega-link-text">
                                            <span>Staff Augmentation</span>
                                            <small>Scale your technical team</small>
                                        </div>
                                    </Link>
                                    <Link
                                        to="/services/software-development"
                                        className={`mega-link-enhanced ${activeService === 'software-development' ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveService('software-development')}
                                    >
                                        <div className="mega-icon-box"><FiCode /></div>
                                        <div className="mega-link-text">
                                            <span>Software Development</span>
                                            <small>Custom enterprise solutions</small>
                                        </div>
                                    </Link>
                                    <Link
                                        to="/services/artificial-intelligence"
                                        className={`mega-link-enhanced ${activeService === 'artificial-intelligence' ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveService('artificial-intelligence')}
                                    >
                                        <div className="mega-icon-box"><FiGlobe /></div>
                                        <div className="mega-link-text">
                                            <span>Artificial Intelligence</span>
                                            <small>Intelligent automation</small>
                                        </div>
                                    </Link>
                                    <Link
                                        to="/services/product-development"
                                        className={`mega-link-enhanced ${activeService === 'product-development' ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveService('product-development')}
                                    >
                                        <div className="mega-icon-box"><FiPieChart /></div>
                                        <div className="mega-link-text">
                                            <span>Product Development</span>
                                            <small>From concept to market</small>
                                        </div>
                                    </Link>

                                    <div className="mega-footer">
                                        <Link to="/services" className="mega-view-all">View All Services →</Link>
                                    </div>
                                </div>
                                <div className="mega-image-preview">
                                    <div className="preview-image-wrap">
                                        <img
                                            src={serviceImages[activeService]}
                                            alt={activeService}
                                            key={activeService}
                                            className="animate-fade-in"
                                        />
                                    </div>
                                    <h4 className="preview-title">
                                        {activeService.replace(/-/g, ' ')}
                                    </h4>
                                    <p className="preview-desc">
                                        {serviceDescriptions[activeService]}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link to="/about" className="nav-link-secondary" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                        <Link to="/industries" className="nav-link-secondary" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>


                        {/* <div className="nav-item">
                            <span className="nav-link-secondary" style={{ fontSize: '1rem' }}>Industries <FiChevronDown className="header-caret" /></span>
                            <div className="dropdown-content mega-menu">
                                <div className="mega-column">
                                    <Link to="/industries" className="mega-link">Automobile</Link>
                                    <Link to="/industries" className="mega-link">Information Technology</Link>
                                    <Link to="/industries" className="mega-link">Manufacturing</Link>
                                    <Link to="/industries" className="mega-link">Oil and Gas</Link>
                                </div>
                                <div className="mega-column">
                                    <Link to="/industries" className="mega-link">Ecommerce and Retail</Link>
                                    <Link to="/industries" className="mega-link">Education</Link>
                                    <Link to="/industries" className="mega-link">Fintech</Link>
                                    <Link to="/industries" className="mega-link">Accounting</Link>
                                </div>
                                <div className="mega-column">
                                    <Link to="/industries" className="mega-link">Real Estate</Link>
                                    <Link to="/industries" className="mega-link">Immigration</Link>
                                    <Link to="/industries" className="mega-link">Gaming</Link>
                                </div>
                            </div>
                        </div> */}

                        <div className={`nav-item ${activeMobileDropdown === 'resources' ? 'mobile-dropdown-active' : ''}`}>
                            <span className="nav-link-secondary" onClick={() => toggleMobileDropdown('resources')}>Resources <FiChevronDown className="header-caret" /></span>
                            <div className="dropdown-content" style={{ minWidth: '220px', padding: '1.5rem' }}>
                                <Link to="/blog" className="mega-link" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '0.95rem', marginBottom: '0.8rem' }}>Blogs</Link>
                                <Link to="/casestudy" className="mega-link" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '0.95rem', marginBottom: '0.8rem' }}>Case Studies</Link>
                                <Link to="/career" className="mega-link" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '0.95rem', marginBottom: 0 }}>Career</Link>
                            </div>
                        </div>

                        <div className="mobile-only-actions">
                            <a href="tel:+923112601310" className="header-phone">
                                <FiPhone className="header-phone-icon" />
                                <span>+92 311 2601310</span>
                            </a>
                            <Link to="/contact" className="btn btn-codeifyy-primary header-cta-btn" onClick={() => setIsMobileMenuOpen(false)}>
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="header-right-actions">
                        <a href="tel:+923112601310" className="header-phone">
                            <FiPhone className="header-phone-icon" />
                            <span>+92 311 2601310</span>
                        </a>

                        <Link to="/contact" className="btn btn-codeifyy-primary header-cta-btn">
                            Contact Us
                        </Link>

                        <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
            ></div>
        </header>
    );
};

export default Header;
