import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
    FaCheckCircle, FaArrowRight, FaCode, FaUserTie,
    FaProjectDiagram, FaRocket, FaHandshake, FaShieldAlt, FaChartLine, FaUsers
} from 'react-icons/fa';
import ClientLogos from '../../components/ClientLogos/ClientLogos';
import './StaffAugmentation.css';
import './SoftwareDevelopment.css'; // Reusing styles from Software Development page
import '../../components/Hero/Hero.css'; // Reusing Hero styles
import '../../components/BenefitSection/BenefitSection.css'; // Reusing Benefit styles for Flexible Talent
import CustomerStories from '../../components/CustomerStories/CustomerStories';
import ArticleCarousel from '../../components/ArticleCarousel/ArticleCarousel';
import BenefitSection from '../../components/BenefitSection/BenefitSection';
import CTA from '../../components/cta/CTA';
import PageSkeleton from '../../components/Skeleton/PageSkeleton';

import SEO from '../../components/SEO/SEO';

const StaffAugmentation = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <PageSkeleton includeHeader={true} includeFooter={true} />;
    }

    return (
        <div className="staff-aug-page">
            <SEO
                title="IT Staff Augmentation Services | Codeifyy"
                description="Expand your team with Codeifyy’s dedicated developers, engineers, and AI specialists. Flexible staff augmentation solutions built for speed, scalability, and performance."
                canonical="/services/staff-augmentation"
            />
            <Header />

            {/* HERO SECTION (Custom for Staff Aug) */}
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center hero-row">
                        <div className="col-lg-6 col-md-6">
                            <div className="hero-label">Staff Augmentation Services</div>
                            <h1 className="hero-title">
                                Scale Your Engineering <br />
                                <span style={{ color: 'var(--codeifyy-green)' }}>Capacity</span>
                            </h1>
                            {/* <p className="hero-description">
                                Hire elite engineers, developers, and technical specialists who integrate seamlessly into your team.
                                Flexible scaling, immediate impact, and zero hiring overhead.
                            </p> */}
                            <p className="hero-description">
                                Access top-tier developers, engineers, and technical specialists who integrate seamlessly into your team and accelerate your roadmap.
                            </p>
                            <div className="hero-trust-line">
                                <a href="/contact" className="btn btn-codeifyy-primary rounded-2 fw-bold px-4 py-3">
                                    Request Developers <FaArrowRight className="ms-2" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 offset-lg-1 d-none d-md-block">
                            {/* Hero Visual: Developer Profile Card */}
                            <div className="profile-visual-wrapper">
                                <div className="profile-card">
                                    <div className="profile-header">
                                        <div className="profile-avatar">
                                            {/* Placeholder Avatar */}
                                            <div className="profile-avatar-placeholder">
                                                <FaUserTie />
                                            </div>
                                        </div>
                                        <div className="profile-info">
                                            <h3>Senior Developer</h3>
                                            <span className="profile-role">Full-Stack Engineer</span>
                                            <div className="profile-status">
                                                <span className="status-dot"></span> Available Now
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skill-tags">
                                        <span className="skill-tag"><FaCode style={{ color: '#3b82f6' }} /> React.js</span>
                                        <span className="skill-tag"><FaCode style={{ color: '#22c55e' }} /> Node.js</span>
                                        <span className="skill-tag"><FaCode style={{ color: '#f59e0b' }} /> AWS</span>
                                        <span className="skill-tag"><FaCode style={{ color: '#6366f1' }} /> TypeScript</span>
                                    </div>

                                    <div className="code-snippet-mini">
                                        <span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#60a5fa' }}>engineer</span> = {'{'} <br />
                                        &nbsp;&nbsp;experience: <span style={{ color: '#facc15' }}>"Senior"</span>, <br />
                                        &nbsp;&nbsp;delivery: <span style={{ color: '#4ade80' }}>"Immediate"</span> <br />
                                        {'}'};
                                    </div>
                                </div>

                                {/* Floating Stats */}
                                <div className="floating-card card-verified">
                                    <div className="fc-icon"><FaCheckCircle /></div>
                                    <div className="fc-content">
                                        <div>Top 1% Talent</div>
                                        <div>Vetted & Verified</div>
                                    </div>
                                </div>

                                <div className="floating-card card-experience">
                                    <div className="fc-icon"><FaRocket /></div>
                                    <div className="fc-content">
                                        <div>Ready to Deploy</div>
                                        <div>Onboard in 24h</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LOGOS MARQUEE */}
            <ClientLogos />

            <BenefitSection
                label=""
                title={
                    <>
                        Flexible Talent. <br />Immediate Impact.
                    </>
                }
                description="Codeifyy’s Staff Augmentation services enable businesses to expand their technical capabilities quickly and efficiently. We handle the recruiting, vetting, and payroll—you get the code."
                features={[
                    <><FaCheckCircle /> Work within your tools and sprint cycles</>,
                    <><FaCheckCircle /> Align with your internal architecture</>,
                    <><FaCheckCircle /> Follow your management structure</>,
                    <><FaCheckCircle /> Accelerate delivery timelines</>
                ]}
                buttonText="Let's Connect"
                buttonLink="/contact"
                stats={[
                    { value: "30+", label: "IT Professionals" },
                    { value: "15+", label: "Countries Served" },
                    { value: "90%", label: "Retention Rate" },
                    { value: "Certified", label: "Platform Experts" }
                ]}
                showBottomMetrics={false}
            />

            {/* ENGAGEMENT MODELS */}
            <section className="services-grid-section" id="models">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Our Staff Augmentation Models</h2>
                    </div>

                    <div className="services-grid">
                        {/* Model 01 */}
                        <div className="service-card">
                            <span className="service-number">01</span>
                            <div className="service-content">
                                <h3 className="service-title">IT Staff Augmentation</h3>
                                <p className="service-desc">Skilled Professionals Integrated Into Your Team</p>
                                <p className="service-detail">Strengthen your internal capabilities with experienced developers and technical specialists who seamlessly integrate into your existing workflows.</p>
                                <div className="service-capabilities">
                                    <h5>Our engineers:</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Work within your tools and sprint cycles</li>
                                        <li><FaCheckCircle /> Align with your internal architecture</li>
                                        <li><FaCheckCircle /> Follow your management structure</li>
                                        <li><FaCheckCircle /> Accelerate delivery timelines</li>
                                    </ul>
                                </div>
                                <p className="service-detail">This model is ideal when you need to fill specific skill gaps or handle temporary workload increases without long-term hiring commitments.</p>
                                <div className="service-capabilities">
                                    <h5>BEST FOR</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Scaling startups</li>
                                        <li><FaCheckCircle /> Enterprises managing peak workloads</li>
                                        <li><FaCheckCircle /> Projects requiring niche expertise</li>
                                    </ul>
                                </div>
                                <div className="mt-4 w-100 d-flex justify-content-center">
                                    <a href="/contact" className="btn-model">Request Staff Augmentation</a>
                                </div>
                            </div>
                        </div>

                        {/* Model 02 */}
                        <div className="service-card">
                            <span className="service-number">02</span>
                            <div className="service-content">
                                <h3 className="service-title">Dedicated Development Team</h3>
                                <p className="service-desc">Full-Time, Project-Focused Teams</p>
                                <p className="service-detail">Build a fully dedicated engineering team that works exclusively on your product or platform.</p>
                                <div className="service-capabilities">
                                    <h5>This model provides:</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Frontend & backend engineers</li>
                                        <li><FaCheckCircle /> QA specialists</li>
                                        <li><FaCheckCircle /> DevOps support</li>
                                        <li><FaCheckCircle /> Project management (if required)</li>
                                    </ul>
                                </div>
                                <p className="service-detail">The team operates as an extension of your company, focused solely on achieving your product milestones.</p>
                                <div className="service-capabilities">
                                    <h5>BEST FOR</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Long-term product development</li>
                                        <li><FaCheckCircle /> Complex platforms</li>
                                        <li><FaCheckCircle /> Continuous feature expansion</li>
                                        <li><FaCheckCircle /> Technology-driven startups</li>
                                    </ul>
                                </div>
                                <div className="mt-4 w-100 d-flex justify-content-center">
                                    <a href="/contact" className="btn-model">Request Development Team</a>
                                </div>
                            </div>
                        </div>

                        {/* Model 03 */}
                        <div className="service-card">
                            <span className="service-number">03</span>
                            <div className="service-content">
                                <h3 className="service-title">Full-Project Outsourcing</h3>
                                <p className="service-desc">End-to-End Execution with Predictable Outcomes</p>
                                <p className="service-detail">Entrust your entire project lifecycle to Codeifyy — from discovery to deployment.</p>
                                <div className="service-capabilities">
                                    <h5>We manage:</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Requirements gathering</li>
                                        <li><FaCheckCircle /> Architecture design</li>
                                        <li><FaCheckCircle /> Development</li>
                                        <li><FaCheckCircle /> Testing & QA</li>
                                        <li><FaCheckCircle /> Deployment & support</li>
                                    </ul>
                                </div>
                                <p className="service-detail">This approach ensures structured delivery, defined milestones, and predictable quality outcomes.</p>
                                <div className="service-capabilities">
                                    <h5>BEST FOR</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Businesses without internal technical teams</li>
                                        <li><FaCheckCircle /> Clearly defined project scopes</li>
                                        <li><FaCheckCircle /> Organizations seeking turnkey solutions</li>
                                    </ul>
                                </div>
                                <div className="mt-4 w-100 d-flex justify-content-center">
                                    <a href="/contact" className="btn-model">Outsource Your Project</a>
                                </div>
                            </div>
                        </div>

                        {/* Model 04 */}
                        <div className="service-card">
                            <span className="service-number">04</span>
                            <div className="service-content">
                                <h3 className="service-title">Software Outsourcing</h3>
                                <p className="service-desc">Flexible Custom Software Delivery</p>
                                <p className="service-detail">Outsource specific software components or entire systems with flexibility, speed, and engineering excellence.</p>
                                <div className="service-capabilities">
                                    <h5>We provide:</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Custom application development</li>
                                        <li><FaCheckCircle /> System modernization</li>
                                        <li><FaCheckCircle /> Feature extensions</li>
                                        <li><FaCheckCircle /> Integration services</li>
                                    </ul>
                                </div>
                                <p className="service-detail">This model allows businesses to maintain strategic oversight while leveraging external technical strength.</p>
                                <div className="service-capabilities">
                                    <h5>BEST FOR</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Companies optimizing development costs</li>
                                        <li><FaCheckCircle /> Businesses expanding digital capabilities</li>
                                        <li><FaCheckCircle /> Enterprises modernizing legacy systems</li>
                                    </ul>
                                </div>
                                <div className="mt-4 w-100 d-flex justify-content-center">
                                    <a href="/contact" className="btn-model">Request Software Outsourcing</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding-md">
                <ArticleCarousel />
            </section>
            {/* TALENT SELECTION PROCESS */}
            <section className="process-section">
                <div className="container">
                    <h2 className="section-title">Our Talent Selection Process</h2>
                    <p className="section-subtitle">Precision Matching for High Performance.</p>

                    <p className="process-intro">
                        Every engineer undergoes:
                    </p>

                    <div className="process-grid">
                        {[
                            { icon: <FaCode />, title: "Technical Evaluation" },
                            { icon: <FaProjectDiagram />, title: "Problem-Solving Assessment" },
                            { icon: <FaCheckCircle />, title: "Code Review" },
                            { icon: <FaUserTie />, title: "Communication Screening" },
                            { icon: <FaHandshake />, title: "Cultural Fit Validation" }
                        ].map((step, index) => (
                            <div key={index} className="process-card">
                                <span className="step-number">0{index + 1}</span>
                                <div className="icon-wrapper">
                                    {React.cloneElement(step.icon, { className: 'process-icon' })}
                                </div>
                                <h4 className="process-title">{step.title}</h4>
                            </div>
                        ))}
                    </div>

                    <p className="process-outro">
                        We ensure enterprise-grade performance standards before deployment.
                    </p>
                </div>
            </section>



            {/* BENEFITS */}
            <section className="benefits-grid-section mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <h2 className="section-title text-start text-white">Benefits Of Partnering With Codeifyy</h2>
                            <p className="section-description text-start text-white">We operate as a strategic partner — not just a staffing vendor.</p>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="row">
                                {[
                                    { icon: <FaRocket />, title: "Rapid team scaling" },
                                    { icon: <FaUserTie />, title: "Reduced recruitment overhead" },
                                    { icon: <FaHandshake />, title: "Flexible contracts" },
                                    { icon: <FaShieldAlt />, title: "Secure collaboration practices" },
                                    { icon: <FaCheckCircle />, title: "Transparent communication" },
                                    { icon: <FaChartLine />, title: "Long-term scalability support" }
                                ].map((benefit, index) => (
                                    <div key={index} className="col-md-6">
                                        <div className="benefit-item">
                                            {React.cloneElement(benefit.icon, { className: 'benefit-icon' })}
                                            <div><strong>{benefit.title}</strong></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding-md">
                <CustomerStories />
            </section>
            {/* ONBOARDING TIMELINE */}
            <section className="timeline-section">
                <div className="container">
                    <h2 className="section-title">Onboarding Timeline</h2>
                    <p className="section-subtitle">Typical deployment: 1–3 weeks depending on complexity.</p>

                    <div className="arrow-process">
                        {[
                            { num: "01", label: "Requirement Analysis" },
                            { num: "02", label: "Candidate Shortlisting" },
                            { num: "03", label: "Interview & Selection" },
                            { num: "04", label: "Contract Finalization" },
                            { num: "05", label: "Seamless Integration" }
                        ].map((step, index) => (
                            <React.Fragment key={index}>
                                <div className="arrow-step">
                                    <span className="arrow-step-num">{step.num}</span>
                                    <span className="arrow-step-label">{step.label}</span>
                                </div>
                                {index < 4 && (
                                    <div className="arrow-connector">
                                        <FaArrowRight />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* CASE STUDIES PLACEHOLDER (Simple List as requested) */}
            {/* <section className="section-padding bg-light">
                <div className="container">
                    <h2 className="section-title">Success Stories</h2>
                    <div className="row mt-5">
                        <div className="col-md-4 mb-4">
                            <div className="bg-white p-4 rounded-3 border">
                                <h4>RetailCorp Scaling</h4>
                                <p className="text-muted">Scaled engineering team by 15 developers in 3 weeks to meet holiday demand.</p>
                                <a href="#" className="text-primary fw-bold">Read Case Study →</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="bg-white p-4 rounded-3 border">
                                <h4>Fintech Modernization</h4>
                                <p className="text-muted">Dedicated team of 8 updated legacy banking core to React/Node microservices.</p>
                                <a href="#" className="text-primary fw-bold">Read Case Study →</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="bg-white p-4 rounded-3 border">
                                <h4>HealthPlus App</h4>
                                <p className="text-muted">End-to-end outsourcing of patient management mobile application.</p>
                                <a href="#" className="text-primary fw-bold">Read Case Study →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            {/* FINAL CTA */}
            {/* FINAL CTA */}
            <section className="final-cta-section">
                <div className="container">
                    <CTA
                        title="Ready to Strengthen Your Engineering Capacity?"
                        text="Let’s identify the right engagement model to accelerate your roadmap."
                        btnText="Hire Dedicated Talent"
                        link="/contact"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default StaffAugmentation;
