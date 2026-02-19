// import React, { useState, useEffect } from 'react';

// const dublicate_hero = () => {
//     const experts = [
//         {
//             name: 'Ritika Sharma',
//             role: 'UX Designer',
//             experience: 'Verified Expert in Design',
//             prevCompany: 'Deloitte',
//             image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
//             logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg'
//         },
//         {
//             name: 'David Chen',
//             role: 'Full Stack Engineer',
//             experience: 'Verified Expert in Engineering',
//             prevCompany: 'Google',
//             image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
//             logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
//         },
//         {
//             name: 'Sarah Johnson',
//             role: 'Product Manager',
//             experience: 'Verified Expert in Management',
//             prevCompany: 'Adobe',
//             image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
//             logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Adobe_Systems_logo_and_wordmark.svg'
//         }
//     ];

//     const [activeIndex, setActiveIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveIndex((prev) => (prev + 1) % experts.length);
//         }, 4000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="hero-section">
//             <div className="container hero-grid-layout">
//                 {/* Ambient Depth Backgrounds */}
//                 <div className="hero-ambient-glow"></div>

//                 {/* Left Content */}
//                 <div className="hero-content animate-up">
//                     <p className="hero-eyebrow">
//                         Codeifyy CRM
//                     </p>
//                     <h1 className="hero-title">
//                         Engineering <br />
//                         <span className="text-highlight-premium">Software Solutions</span> <br />
//                         for Mission-critical Organizations.
//                     </h1>
//                     <p className="hero-desc">
//                         We combine engineering excellence, strategic thinking, and agile execution to deliver scalable software products that accelerate business transformation.
//                     </p>
//                     <div className="hero-buttons">
//                         <a href="#" className="btn btn-codeifyy-primary">
//                             Start Your Project
//                         </a>
//                     </div>

//                     {/* Trust Logos Marquee Section */}
//                     <div className="hero-trust-section">
//                         <p className="trust-label">Enterprise-grade development. Transparent engagement. Long-term partnership.</p>
//                         <div className="trust-marquee">
//                             <div className="marquee-track">
//                                 <img src="/comapny_logo/Logo-320x180-Wiley.webp" alt="Wiley" />
//                                 <img src="/comapny_logo/grammarly_320x180.webp" alt="Grammarly" />
//                                 <img src="/comapny_logo/rbc.webp" alt="RBC" />
//                                 <img src="/comapny_logo/Wyndham-Hotels-Resorts-1.webp" alt="Wyndham" />
//                                 {/* Duplicate for seamless loop */}
//                                 <img src="/comapny_logo/Logo-320x180-Wiley.webp" alt="Wiley" />
//                                 <img src="/comapny_logo/grammarly_320x180.webp" alt="Grammarly" />
//                                 <img src="/comapny_logo/rbc.webp" alt="RBC" />
//                                 <img src="/comapny_logo/Wyndham-Hotels-Resorts-1.webp" alt="Wyndham" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Visual - Expert Card Stack */}
//                 <div className="hero-visual animate-up delay-1">
//                     <div className="expert-card-stack">
//                         {experts.map((expert, index) => {
//                             let status = 'hidden';
//                             if (index === activeIndex) status = 'active';
//                             else if (index === (activeIndex + 1) % experts.length) status = 'next';
//                             else if (index === (activeIndex + 2) % experts.length) status = 'next-next';
//                             else if (index === (activeIndex - 1 + experts.length) % experts.length) status = 'prev';

//                             return (
//                                 <div key={index} className={`expert-card ${status}`}>
//                                     <div className="card-image-wrap">
//                                         <img src={expert.image} alt={expert.name} className="expert-avatar" />
//                                     </div>
//                                     <div className="card-info">
//                                         <h3 className="expert-name">{expert.name}</h3>
//                                         <div className="expert-badge">
//                                             <span className="check-icon">✓</span> {expert.experience}
//                                         </div>
//                                         <p className="expert-role-label">{expert.role}</p>
//                                         <div className="prev-at">
//                                             <span className="prev-label">PREVIOUSLY AT</span>
//                                             <img src={expert.logo} alt={expert.prevCompany} className="prev-logo" />
//                                         </div>
//                                     </div>
//                                     {/* Decoration Toptal-style corners */}
//                                     <div className="card-corner-icon">/</div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default dublicate_hero;
