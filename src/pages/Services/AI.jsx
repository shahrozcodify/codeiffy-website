import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Industries from '../../components/Industries/Industries';
import ArticleCarousel from '../../components/ArticleCarousel/ArticleCarousel';
import ClientLogos from '../../components/ClientLogos/ClientLogos';
import CustomerStories from '../../components/CustomerStories/CustomerStories';
import CTA from '../../components/cta/CTA';
import {
    FaBrain, FaRobot, FaNetworkWired, FaComments, FaSearch, FaCogs,
    FaCheckCircle, FaArrowRight, FaChartLine, FaLightbulb, FaShieldAlt, FaDatabase
} from 'react-icons/fa';
import './AI.css';
import '../../components/Hero/Hero.css';
import '../../components/BenefitSection/BenefitSection.css';

const AI = () => {
    return (
        <div className="ai-page">
            <Header />

            {/* HERO SECTION */}
            <section className="hero-section py-5">
                <div className="container">
                    <div className="row align-items-center" style={{ minHeight: '600px' }}>
                        <div className="col-lg-7">
                            <div className="hero-label">Artificial Intelligence Services</div>
                            <h1 className="hero-title">
                                Transform Your Business with&nbsp;
                                <span style={{ color: 'var(--codeifyy-green)' }}>Intelligent</span> Solutions.
                            </h1>
                            <p className="hero-description">
                                We design and deploy AI-powered solutions that automate operations, enhance customer experiences, and enable data-driven decision-making.
                            </p>
                            <div className="hero-trust-line">
                                <a href="/contact" className="btn btn-codeifyy-primary rounded-2 fw-bold">
                                    Talk to an AI Expert <FaArrowRight className="ms-2" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <div className="hero-graphic-wrapper">
                                {/* AI Graphic / Code Window */}
                                <div className="code-window">
                                    <div className="window-header">
                                        <div className="dot red"></div>
                                        <div className="dot yellow"></div>
                                        <div className="dot green"></div>
                                    </div>
                                    <div className="window-body">
                                        <span className="code-line c-gray">// AI Optimization Model</span>
                                        <span className="code-line">
                                            <span className="c-purple">const</span> <span className="c-blue">AI_System</span> = <span className="c-yellow">()</span> <span className="c-purple">=&gt;</span> {'{'}
                                        </span>
                                        <span className="code-line pl-3" style={{ paddingLeft: '1.5rem' }}>
                                            <span className="c-purple">await</span> <span className="c-blue">Model</span>.<span className="c-yellow">train</span>(<span className="c-green">dataset</span>);
                                        </span>
                                        <span className="code-line pl-3" style={{ paddingLeft: '1.5rem' }}>
                                            <span className="c-purple">return</span> <span className="c-blue">PredictiveInsights</span>;
                                        </span>
                                        <span className="code-line">{'}'}</span>
                                        <br />
                                        <span className="code-line c-gray">// Neural Network Config</span>
                                        <span className="code-line">
                                            <span className="c-blue">layers</span>: [<span className="c-yellow">128</span>, <span className="c-yellow">64</span>, <span className="c-yellow">32</span>],
                                        </span>
                                        <span className="code-line">
                                            <span className="c-blue">activation</span>: <span className="c-green">'ReLU'</span>
                                        </span>
                                    </div>
                                </div>
                                {/* Floating Badges */}
                                <div className="floating-badge badge-security">
                                    <div className="badge-icon" style={{ background: '#10b981' }}><FaBrain /></div>
                                    <span>Deep Learning</span>
                                </div>
                                <div className="floating-badge badge-cloud">
                                    <div className="badge-icon" style={{ background: '#3b82f6' }}><FaNetworkWired /></div>
                                    <span>Neural Networks</span>
                                </div>
                                <div className="floating-badge badge-performance">
                                    <div className="badge-icon" style={{ background: '#f59e0b' }}><FaRobot /></div>
                                    <span>Automation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ClientLogos />
            </section>

            {/* STATS / FLEXIBLE TALENT SECTION */}
            <section className="section-padding" style={{ background: '#fff' }}>
                <div className="container">
                    <div className="flexible-talent-wrapper">
                        <div className="flexible-content">
                            <h2>AI Expertise. <br />Immediate Impact.</h2>
                            <p className="hero-description">
                                Codeifyy’s AI services enable businesses to leverage cutting-edge intelligence quickly and efficiently.
                                We handle the data strategy, model training, and integration—you get the results.
                            </p>
                            <ul className="model-features">
                                <li><FaCheckCircle /> Access top AI talent</li>
                                <li><FaCheckCircle /> Scale AI squads in 48 hours</li>
                                <li><FaCheckCircle /> Risk-free pilot period</li>
                            </ul>
                            <a href="/contact" className="btn btn-codeifyy-primary">Let's Connect</a>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="benefit-cards-grid">
                                <div className="stat-card animate-up delay-1">
                                    <div className="stat-value">30+</div>
                                    <div className="stat-label">IT Professionals</div>
                                </div>
                                <div className="stat-card animate-up delay-2">
                                    <div className="stat-value">15+</div>
                                    <div className="stat-label">Countries Served</div>
                                </div>
                                <div className="stat-card animate-up delay-3">
                                    <div className="stat-value">90%</div>
                                    <div className="stat-label">Retention Rate</div>
                                </div>
                                <div className="stat-card animate-up delay-4">
                                    <div className="stat-value">Certified</div>
                                    <div className="stat-label">Platform Experts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR AI CAPABILITIES */}
            <section className="services-grid-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Our AI Capabilities</h2>
                        <p className="section-subtitle">Comprehensive AI solutions to drive your digital transformation.</p>
                    </div>

                    <div className="services-grid">
                        {/* 01 AI Strategy */}
                        <div className="service-card">
                            <span className="service-number">01</span>
                            <div className="service-content">
                                <h3 className="service-title">AI Strategy & Consulting</h3>
                                <p className="service-desc">Successful AI starts with clarity. We help you identify high-impact opportunities and create a structured implementation roadmap.</p>

                                <div className="service-capabilities mb-4">
                                    <h5>Challenges We Solve</h5>
                                    <ul>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Unclear AI use cases</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Poor data readiness</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Uncertain ROI expectations</li>
                                    </ul>
                                </div>

                                <div className="service-capabilities">
                                    <h5>What We Deliver</h5>
                                    <ul>
                                        <li><FaCheckCircle /> AI readiness assessment</li>
                                        <li><FaCheckCircle /> Business use-case identification</li>
                                        <li><FaCheckCircle /> AI implementation roadmap</li>
                                        <li><FaCheckCircle /> Data strategy planning</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 02 Machine Learning */}
                        <div className="service-card">
                            <span className="service-number">02</span>
                            <div className="service-content">
                                <h3 className="service-title">Machine Learning Development</h3>
                                <p className="service-desc">We design and develop custom machine learning models that analyze data, recognize patterns, and generate predictive insights.</p>

                                <div className="service-capabilities mb-4">
                                    <h5>Challenges We Solve</h5>
                                    <ul>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Inaccurate forecasting</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Manual data analysis</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Fraud detection limitations</li>
                                    </ul>
                                </div>

                                <div className="service-capabilities">
                                    <h5>What We Deliver</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Predictive analytics models</li>
                                        <li><FaCheckCircle /> Forecasting systems</li>
                                        <li><FaCheckCircle /> Recommendation engines</li>
                                        <li><FaCheckCircle /> Classification & clustering</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 03 GenAI */}
                        <div className="service-card">
                            <span className="service-number">03</span>
                            <div className="service-content">
                                <h3 className="service-title">Generative AI Integration</h3>
                                <p className="service-desc">We integrate Large Language Models (LLMs) and Generative AI technologies into your applications and workflows.</p>

                                <div className="service-capabilities mb-4">
                                    <h5>Challenges We Solve</h5>
                                    <ul>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Manual content creation</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Inefficient document handling</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Limited knowledge access</li>
                                    </ul>
                                </div>

                                <div className="service-capabilities">
                                    <h5>What We Deliver</h5>
                                    <ul>
                                        <li><FaCheckCircle /> LLM integration (OpenAI/Custom)</li>
                                        <li><FaCheckCircle /> AI copilots for teams</li>
                                        <li><FaCheckCircle /> Intelligent document processing</li>
                                        <li><FaCheckCircle /> Knowledge systems</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 04 Chatbots */}
                        <div className="service-card">
                            <span className="service-number">04</span>
                            <div className="service-content">
                                <h3 className="service-title">AI Chatbots & Virtual Assistants</h3>
                                <p className="service-desc">We build AI-powered chatbots and virtual assistants that automate customer support, sales engagement, and internal communication.</p>

                                <div className="service-capabilities mb-4">
                                    <h5>Challenges We Solve</h5>
                                    <ul>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> High support response times</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Repetitive customer queries</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Inconsistent service</li>
                                    </ul>
                                </div>

                                <div className="service-capabilities">
                                    <h5>What We Deliver</h5>
                                    <ul>
                                        <li><FaCheckCircle /> AI customer support bots</li>
                                        <li><FaCheckCircle /> Sales assistants</li>
                                        <li><FaCheckCircle /> Internal knowledge assistants</li>
                                        <li><FaCheckCircle /> NLP conversational systems</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 05 NLP */}
                        <div className="service-card">
                            <span className="service-number">05</span>
                            <div className="service-content">
                                <h3 className="service-title">Natural Language Processing (NLP)</h3>
                                <p className="service-desc">We implement NLP systems that extract insights from unstructured text and speech data.</p>

                                <div className="service-capabilities mb-4">
                                    <h5>Challenges We Solve</h5>
                                    <ul>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Large volumes of unstructured text</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Limited sentiment visibility</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Manual content analysis</li>
                                    </ul>
                                </div>

                                <div className="service-capabilities">
                                    <h5>What We Deliver</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Sentiment analysis systems</li>
                                        <li><FaCheckCircle /> Text classification models</li>
                                        <li><FaCheckCircle /> Speech-to-text integration</li>
                                        <li><FaCheckCircle /> Text summarization tools</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 06 Automation */}
                        <div className="service-card">
                            <span className="service-number">06</span>
                            <div className="service-content">
                                <h3 className="service-title">AI Automation & Workflows</h3>
                                <p className="service-desc">We design AI-powered automation systems that reduce repetitive work and improve operational efficiency.</p>

                                <div className="service-capabilities mb-4">
                                    <h5>Challenges We Solve</h5>
                                    <ul>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Manual data processing</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Repetitive administrative tasks</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Process bottlenecks</li>
                                    </ul>
                                </div>

                                <div className="service-capabilities">
                                    <h5>What We Deliver</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Intelligent process automation</li>
                                        <li><FaCheckCircle /> AI-driven workflow systems</li>
                                        <li><FaCheckCircle /> Smart document extraction</li>
                                        <li><FaCheckCircle /> Decision-support engines</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* CASE STUDIES */}
            <CustomerStories />

            {/* INDUSTRIES SECTION */}
            <Industries />


            {/* TESTIMONIALS */}
            <ArticleCarousel />

            {/* AI IMPLEMENTATION PROCESS */}
            <section className="approach-section">
                <div className="container">
                    <h2 className="section-title text-white">Our AI Implementation Process</h2>
                    <p className="section-subtitle opacity-75 text-white">Structured. Scalable. Successful.</p>

                    <div className="approach-steps">
                        {[
                            { title: "Discovery & Analysis", icon: <FaSearch />, tooltip: "Identify high-impact use cases" },
                            { title: "Data Prep", icon: <FaDatabase style={{ fontSize: '2rem', color: 'var(--codeifyy-green)', marginBottom: '1rem', display: 'block' }} />, tooltip: "Assess data quality & pipelines" }, // Using FaDatabase manually as it wasn't in top imports or reuse FaSearch
                            { title: "Model Dev", icon: <FaBrain style={{ fontSize: '2rem', color: 'var(--codeifyy-green)', marginBottom: '1rem', display: 'block' }} />, tooltip: "Build & train models" },
                            { title: "Integration", icon: <FaNetworkWired style={{ fontSize: '2rem', color: 'var(--codeifyy-green)', marginBottom: '1rem', display: 'block' }} />, tooltip: "Deploy securely" },
                            { title: "Monitoring", icon: <FaChartLine />, tooltip: "Optimize performance" }
                        ].map((step, index) => (
                            <div key={index} className="approach-step-card">
                                {step.icon.type === FaSearch || step.icon.type === FaChartLine ? React.cloneElement(step.icon, { className: 'step-icon' }) : step.icon}
                                <span className="step-name">{step.title}</span>
                                <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>{step.tooltip}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            {/* FINAL CTA */}
            <section className="final-cta-section mt-5" >
                <div className="container">
                    <CTA
                        title="Ready to Implement AI in Your Business?"
                        text="Let’s build scalable AI solutions that drive measurable impact."
                        btnText="Discuss Your Use Case"
                        link="/contact"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AI;
