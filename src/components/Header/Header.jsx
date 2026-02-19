/* Codeifyy CRM Unified Header Component - Top tier removed per branding refinement */
import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiGlobe, FiUser, FiChevronDown, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showTop, setShowTop] = useState(true);
    const [showRegionMenu, setShowRegionMenu] = useState(false);

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

                    <div className="nav-links-wrap" style={{ display: 'flex', gap: '1.5rem', flex: 1, height: '100%', justifyContent: 'center' }}>
                        <Link to="/" className="nav-link-secondary" style={{ fontSize: '1rem' }}>Home</Link>
                        <div className="nav-item">
                            <span className="nav-link-secondary" style={{ fontSize: '1rem' }}>Services <FiChevronDown className="header-caret" /></span>
                            <div className="dropdown-content mega-menu-small" style={{ width: '800px', display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', padding: 0 }}>
                                <div className="mega-column" style={{ padding: '2.5rem' }}>
                                    <div className="mega-title">Our Expertise</div>
                                    <Link
                                        to="/services/staff-augmentation"
                                        className="mega-link"
                                        onMouseEnter={() => setActiveService('staff-augmentation')}
                                    >Staff Augmentation</Link>
                                    <Link
                                        to="/services/software-development"
                                        className="mega-link"
                                        onMouseEnter={() => setActiveService('software-development')}
                                    >Software Development</Link>
                                    <Link
                                        to="/services/artificial-intelligence"
                                        className="mega-link"
                                        onMouseEnter={() => setActiveService('artificial-intelligence')}
                                    >Artificial Intelligence</Link>
                                    <Link
                                        to="/services/product-development"
                                        className="mega-link"
                                        onMouseEnter={() => setActiveService('product-development')}
                                    >Product Development</Link>

                                    <div style={{ marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                                        <Link to="/services" className="mega-link" style={{ color: 'var(--codeifyy-green)', fontSize: '0.9rem' }}>View All Services →</Link>
                                    </div>
                                </div>
                                <div className="mega-image-preview" style={{
                                    background: '#f8fafc',
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    borderLeft: '1px solid #e2e8f0',
                                    overflow: 'hidden'
                                }}>
                                    <div className="preview-image-wrap" style={{
                                        width: '100%',
                                        height: '240px',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        marginBottom: '1.5rem',
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                                    }}>
                                        <img
                                            src={serviceImages[activeService]}
                                            alt={activeService}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'all 0.4s ease'
                                            }}
                                            key={activeService}
                                            className="animate-fade-in"
                                        />
                                    </div>
                                    <h4 style={{ textTransform: 'capitalize', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--codeifyy-navy)' }}>
                                        {activeService.replace(/-/g, ' ')}
                                    </h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                                        {serviceDescriptions[activeService]}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link to="/about" className="nav-link-secondary" style={{ fontSize: '1rem' }}>About</Link>
                        <Link to="/industries" className="nav-link-secondary" style={{ fontSize: '1rem' }}>Industries</Link>


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

                        <div className="nav-item">
                            <span className="nav-link-secondary" style={{ fontSize: '1rem' }}>Resources <FiChevronDown className="header-caret" /></span>
                            <div className="dropdown-content" style={{ minWidth: '220px', padding: '1.5rem' }}>
                                <Link to="/blogs" className="mega-link" style={{ fontSize: '0.95rem', marginBottom: '0.8rem' }}>Blogs</Link>
                                <Link to="/case-studies" className="mega-link" style={{ fontSize: '0.95rem', marginBottom: '0.8rem' }}>Case Studies</Link>
                                <Link to="/career" className="mega-link" style={{ fontSize: '0.95rem', marginBottom: 0 }}>Career</Link>
                            </div>
                        </div>
                    </div>

                    <div className="header-right-actions" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <a href="tel:+6563025700" className="header-phone">
                            <FiPhone className="header-phone-icon" />
                            <span>+92 311 2601310</span>
                        </a>

                        <Link to="/contact" className="btn btn-codeifyy-primary header-cta-btn">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
