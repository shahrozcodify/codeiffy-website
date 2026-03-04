import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Industries from '../../components/Industries/Industries';
import ArticleCarousel from '../../components/ArticleCarousel/ArticleCarousel';
import ClientLogos from '../../components/ClientLogos/ClientLogos';
import CustomerStories from '../../components/CustomerStories/CustomerStories';
import BenefitSection from '../../components/BenefitSection/BenefitSection';
import CTA from '../../components/cta/CTA';
import PageSkeleton from '../../components/Skeleton/PageSkeleton';
import {
    FaBrain, FaRobot, FaNetworkWired, FaComments, FaSearch, FaCogs,
    FaCheckCircle, FaArrowRight, FaChartLine, FaLightbulb, FaShieldAlt, FaDatabase
} from 'react-icons/fa';
import './AI.css';
import '../../components/Hero/Hero.css';
import '../../components/BenefitSection/BenefitSection.css';

import SEO from '../../components/SEO/SEO';

const AI = () => {
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
        <div className="ai-page">
            <SEO
                title="AI Development Services | Intelligent Systems | Codeifyy"
                description="We build AI-powered applications, automation systems, and machine learning solutions that enhance decision-making and operational efficiency."
                canonical="/services/artificial-intelligence"
            />
            <Header />

            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center hero-row">
                        <div className="col-lg-7 col-md-6">
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
                        <div className="col-lg-5 col-md-6 d-none d-md-block">
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

            <BenefitSection
                label=""
                title={
                    <>
                        AI Expertise. <br />Immediate Impact.
                    </>
                }
                description="Codeifyy’s AI services enable businesses to leverage cutting-edge intelligence quickly and efficiently. We handle the data strategy, model training, and integration—you get the results."
                features={[
                    <><FaCheckCircle /> Access top AI talent</>,
                    <><FaCheckCircle /> Scale AI squads in 48 hours</>,
                    <><FaCheckCircle /> Risk-free pilot period</>
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

            {/* OUR AI CAPABILITIES */}
            <section className="services-grid-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Our AI Capabilities</h2>
                    </div>

                    <div className="services-grid">
                        {/* 01 AI Strategy */}
                        <div className="service-card">
                            <span className="service-number">01</span>
                            <div className="service-content">
                                <h3 className="service-title">AI Strategy & Consulting</h3>
                                <p className="service-detail">Successful AI starts with clarity. We help you identify high-impact opportunities and create a structured implementation roadmap.</p>

                                <div className="service-capabilities mb-4">
                                    <h5>Challenges We Solve</h5>
                                    <ul>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Unclear AI use cases</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Poor data readiness</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Uncertain ROI expectations</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Misaligned AI investments</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Technology selection confusion</li>
                                    </ul>
                                </div>

                                <div className="service-capabilities">
                                    <h5>What We Deliver</h5>
                                    <ul>
                                        <li><FaCheckCircle /> AI readiness assessment</li>
                                        <li><FaCheckCircle /> Business use-case identification</li>
                                        <li><FaCheckCircle /> AI implementation roadmap</li>
                                        <li><FaCheckCircle /> Data strategy planning</li>
                                        <li><FaCheckCircle /> Architecture & technology advisory</li>
                                        <li><FaCheckCircle /> ROI & feasibility analysis</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 02 Machine Learning */}
                        <div className="service-card">
                            <span className="service-number">02</span>
                            <div className="service-content">
                                <h3 className="service-title">Machine Learning Development</h3>
                                <p className="service-detail">We design and develop custom machine learning models that analyze data, recognize patterns, and generate predictive insights.</p>

                                <div className="service-capabilities mb-4">
                                    <h5>Challenges We Solve</h5>
                                    <ul>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Inaccurate forecasting</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Manual data analysis</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Fraud detection limitations</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Lack of predictive capabilities</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Data underutilization</li>
                                    </ul>
                                </div>

                                <div className="service-capabilities">
                                    <h5>What We Deliver</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Predictive analytics models</li>
                                        <li><FaCheckCircle /> Forecasting systems</li>
                                        <li><FaCheckCircle /> Recommendation engines</li>
                                        <li><FaCheckCircle /> Classification & clustering models</li>
                                        <li><FaCheckCircle /> Fraud detection systems</li>
                                        <li><FaCheckCircle /> Custom ML algorithm development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 03 GenAI */}
                        <div className="service-card">
                            <span className="service-number">03</span>
                            <div className="service-content">
                                <h3 className="service-title">Generative AI Integration</h3>
                                <p className="service-detail">We integrate Large Language Models (LLMs) and Generative AI technologies into your applications and workflows to enhance productivity and automation.</p>

                                <div className="service-capabilities mb-4">
                                    <h5>Challenges We Solve</h5>
                                    <ul>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Manual content creation</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Inefficient document handling</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Limited internal knowledge access</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Repetitive communication tasks</li>
                                    </ul>
                                </div>

                                <div className="service-capabilities">
                                    <h5>What We Deliver</h5>
                                    <ul>
                                        <li><FaCheckCircle /> LLM integration (OpenAI & custom models)</li>
                                        <li><FaCheckCircle /> AI copilots for internal teams</li>
                                        <li><FaCheckCircle /> Intelligent document processing</li>
                                        <li><FaCheckCircle /> Automated content generation systems</li>
                                        <li><FaCheckCircle /> AI-powered search & knowledge systems</li>
                                        <li><FaCheckCircle /> Workflow automation using GenAI</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 04 Chatbots */}
                        <div className="service-card">
                            <span className="service-number">04</span>
                            <div className="service-content">
                                <h3 className="service-title">AI Chatbots & Virtual Assistants</h3>
                                <p className="service-detail">We build AI-powered chatbots and virtual assistants that automate customer support, sales engagement, and internal communication.</p>

                                <div className="service-capabilities mb-4">
                                    <h5>Challenges We Solve</h5>
                                    <ul>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> High support response times</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Repetitive customer queries</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Inconsistent service availability</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Overloaded support teams</li>
                                    </ul>
                                </div>

                                <div className="service-capabilities">
                                    <h5>What We Deliver</h5>
                                    <ul>
                                        <li><FaCheckCircle /> AI customer support bots</li>
                                        <li><FaCheckCircle /> Sales & lead qualification assistants</li>
                                        <li><FaCheckCircle /> Internal knowledge assistants</li>
                                        <li><FaCheckCircle /> Web, mobile & messaging integrations</li>
                                        <li><FaCheckCircle /> NLP-driven conversational systems</li>
                                        <li><FaCheckCircle /> Multi-language capabilities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 05 NLP */}
                        <div className="service-card">
                            <span className="service-number">05</span>
                            <div className="service-content">
                                <h3 className="service-title">Natural Language Processing (NLP)</h3>
                                <p className="service-detail">We implement NLP systems that extract insights from unstructured text and speech data.</p>

                                <div className="service-capabilities mb-4">
                                    <h5>Challenges We Solve</h5>
                                    <ul>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Large volumes of unstructured text</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Limited sentiment visibility</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Manual content analysis</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Language processing inefficiencies</li>
                                    </ul>
                                </div>

                                <div className="service-capabilities">
                                    <h5>What We Deliver</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Sentiment analysis systems</li>
                                        <li><FaCheckCircle /> Text classification models</li>
                                        <li><FaCheckCircle /> Speech-to-text integration</li>
                                        <li><FaCheckCircle /> Text summarization tools</li>
                                        <li><FaCheckCircle /> Multilingual NLP systems</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 06 Automation */}
                        <div className="service-card">
                            <span className="service-number">06</span>
                            <div className="service-content">
                                <h3 className="service-title">AI Automation & Intelligent Workflows</h3>
                                <p className="service-detail">We design AI-powered automation systems that reduce repetitive work and improve operational efficiency.</p>

                                <div className="service-capabilities mb-4">
                                    <h5>Challenges We Solve</h5>
                                    <ul>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Manual data processing</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Repetitive administrative tasks</li>
                                        <li><span style={{ fontSize: '1.2rem', lineHeight: 1, marginRight: '4px' }}>•</span> Slow document verification</li>
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
                                        <li><FaCheckCircle /> Cross-system automation integration</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* CASE STUDIES */}
            <section className="section-padding-md" style={{ marginBottom: "-4rem" }}>
                <CustomerStories />
            </section>

            {/* INDUSTRIES SECTION */}
            <section className="section-padding-md">
                <Industries />
            </section>


            {/* TESTIMONIALS */}
            <section className="section-padding-md">
                <ArticleCarousel />
            </section>

            {/* AI IMPLEMENTATION PROCESS */}
            <section className="approach-section">
                <div className="container">
                    <h2 className="section-title text-white">Our AI Implementation Process</h2>
                    <p className="section-subtitle opacity-75 text-white">We follow a structured, scalable approach to ensure successful deployment.</p>

                    <div className="approach-steps">
                        <div className="approach-step-card">
                            <FaSearch className="step-icon" />
                            <span className="step-name">Discovery & Business Analysis</span>
                            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>We evaluate your operations, identify high-impact use cases, and define measurable objectives.</div>
                        </div>
                        <div className="approach-step-card">
                            <FaDatabase style={{ fontSize: '2rem', color: 'var(--codeifyy-green)', marginBottom: '1rem', display: 'block' }} />
                            <span className="step-name">Data Assessment & Preparation</span>
                            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>We assess data quality, structure pipelines, and prepare datasets for model training.</div>
                        </div>
                        <div className="approach-step-card">
                            <FaBrain style={{ fontSize: '2rem', color: 'var(--codeifyy-green)', marginBottom: '1rem', display: 'block' }} />
                            <span className="step-name">Model Development & Testing</span>
                            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>We build, train, validate, and optimize AI models tailored to your requirements.</div>
                        </div>
                        <div className="approach-step-card">
                            <FaNetworkWired style={{ fontSize: '2rem', color: 'var(--codeifyy-green)', marginBottom: '1rem', display: 'block' }} />
                            <span className="step-name">Integration & Deployment</span>
                            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>We integrate AI solutions into your applications and deploy them securely in cloud or on-premise environments.</div>
                        </div>
                        <div className="approach-step-card">
                            <FaChartLine className="step-icon" />
                            <span className="step-name">Monitoring & Continuous Improvement</span>
                            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>We monitor model performance, retrain when necessary, and continuously optimize for accuracy and efficiency.</div>
                        </div>
                    </div>
                </div>
            </section>
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
