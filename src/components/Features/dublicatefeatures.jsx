// import React from 'react';

// const dublicatefeatures = () => {
//     const cards = [
//         {
//             category: 'Software Development',
//             title: 'Custom Enterprise Software',
//             desc: 'We design and develop secure, scalable, and high-performance software tailored to your operational and strategic needs. Web & mobile apps, API integrations, Legacy modernization.',
//             linkText: 'Explore Service',
//             image: '/images/features1.webp'
//         },
//         {
//             category: 'Artificial Intelligence',
//             title: 'Intelligent Solutions',
//             desc: 'Harness the power of AI to automate operations and unlock data-driven growth. AI strategy, Chatbots, ML models, GenAI integration.',
//             linkText: 'Explore More',
//             image: '/images/features2.webp'
//         },
//         {
//             category: 'Staff Augmentation',
//             title: 'Extend Your Team',
//             desc: 'Scale resources on demand with pre-vetted developers and engineers. Flexible engagement, rapid onboarding, seamless integration.',
//             linkText: 'Explore More',
//             image: '/images/features3.webp'
//         },
//         {
//             category: 'Technology Consulting',
//             title: 'Strategic Guidance',
//             desc: 'Make smarter technology decisions. Architecture consulting, Cloud strategy, IT audits, Technology roadmap planning.',
//             linkText: 'Explore More',
//             image: '/images/feature4.webp'
//         },
//         {
//             category: 'Product Development',
//             title: 'Idea to Scale',
//             desc: 'Build market-ready digital products. MVP development, UX/UI design, Product engineering, Continuous optimization.',
//             linkText: 'Explore More',
//             image: '/images/features5.webp'
//         }
//     ];

//     return (
//         <section className="features-section">
//             <div className="container">
//                 <h2 className="features-heading animate-up">
//                     Our Core Services
//                 </h2>

//                 <div className="features-grid">
//                     {cards.map((card, index) => (
//                         <div key={index} className={`feature-card animate-up delay-${index + 1}`}>
//                             <div className="feature-card-image-box">
//                                 <img src={card.image} alt={card.title} className="feature-card-img" />
//                             </div>
//                             <div className="feature-card-content">
//                                 <span className="feature-label">{card.category}</span>
//                                 <h3 className="feature-title">{card.title}</h3>
//                                 <p className="feature-desc">{card.desc}</p>
//                                 <div style={{ marginTop: 'auto' }}>
//                                     <a href="#" className="feature-link-refined">{card.linkText}</a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//         </section>
//     );
// };

// export default dublicatefeatures;
