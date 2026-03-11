// ─── SHARED CONSTANTS ────────────────────────────────────────────────────────
// Reused across multiple pages — import once, reference everywhere

export const sharedTestimonials = [
    {
        title: 'Kia Motors',
        shortDescription: 'Codeifyy streamlined our dealership operations with a centralized CRM that significantly improved lead tracking and sales visibility across teams.',
        image: '/clientlogo/image (2).png'
    },
    {
        title: 'Ministry of Malaysia',
        shortDescription: 'Their structured development approach and clear communication ensured smooth project execution from kickoff to delivery.',
        image: '/clientlogo/image (4).png'
    },
    {
        title: 'Jetour',
        shortDescription: 'The web platform they developed strengthened our digital presence and simplified customer engagement significantly.',
        image: '/clientlogo/image (3).png'
    },
    {
        title: 'SERP Insight',
        shortDescription: 'Codeifyy built a structured and scalable SEO intelligence system that reduced our manual research time considerably.',
        image: '/clientlogo/image (1).png'
    }
];

export const sharedCaseStudies = [
    {
        title: 'Custom CMS for an IT Services Company',
        shortDescription: 'A scalable headless CMS that reduced developer dependency by 45% and accelerated content publishing cycles.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2400',
        industry: 'Information Technology',
        result: '45% Faster Publishing',
        ctaLink: '/casestudy/custom-cms-it-services'
    },
    {
        title: 'Staff Augmentation for an IT Company',
        shortDescription: 'Rapid deployment of pre-vetted full-stack developers to scale operations without expanding the permanent workforce.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2400',
        industry: 'Information Technology',
        result: '40% Faster Allocation',
        ctaLink: '/casestudy/staff-augmentation-it-company'
    },
    {
        title: 'CRM Transformation for Kia Motors',
        shortDescription: 'A centralized CRM platform streamlining lead tracking, service bookings, and dealership operations for a major automotive brand.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2400',
        industry: 'Automotive',
        result: '30% Better Lead Conversion',
        ctaLink: '/casestudy/crm-transformation-kia-motors'
    }
];

const detailedIndustryData = [
    {
        name: 'Automobile',
        iconName: 'FaCar',
        desc: 'The automotive sector requires precision, supply chain visibility, and intelligent production systems.',
        supports: [
            'ERP for production & inventory management',
            'Supply chain automation',
            'Dealer management systems',
            'Predictive maintenance solutions',
            'AI-driven analytics dashboards'
        ]
    },
    {
        name: 'Information Technology',
        iconName: 'FaLaptopCode',
        desc: 'IT companies demand scalable, secure, and high-performance systems to support rapid growth.',
        supports: [
            'SaaS platform development',
            'API architecture & integrations',
            'Cloud-native applications',
            'AI feature integration',
            'DevOps & infrastructure automation'
        ]
    },
    {
        name: 'Manufacturing',
        iconName: 'FaIndustry',
        desc: 'Manufacturers require operational visibility, process optimization, and automated workflows.',
        supports: [
            'ERP systems',
            'Inventory & warehouse management',
            'AI-based demand forecasting',
            'Data analytics dashboards'
        ]
    },
    {
        name: 'Oil & Gas',
        iconName: 'FaOilCan',
        desc: 'Oil & Gas operations demand secure, data-driven, and compliance-ready technology solutions.',
        supports: [
            'Asset management systems',
            'Workflow automation',
            'Field operations tracking',
            'Compliance reporting systems',
            'Predictive maintenance analytics'
        ]
    },
    {
        name: 'Ecommerce & Retail',
        iconName: 'FaShoppingCart',
        desc: 'Retail businesses require real-time transaction management and customer engagement tools.',
        supports: [
            'POS & inventory systems',
            'E-commerce platform development',
            'CRM integration',
            'AI-driven demand forecasting',
            'Sales & analytics dashboards'
        ]
    },
    {
        name: 'Education',
        iconName: 'FaGraduationCap',
        desc: 'Educational institutions need centralized platforms for academic and operational efficiency.',
        supports: [
            'School Management Systems',
            'Student portals',
            'Attendance & examination tracking',
            'Online fee management',
            'Reporting & performance dashboards'
        ]
    },
    {
        name: 'Fintech',
        iconName: 'FaCoins',
        desc: 'Fintech companies require scalable, secure, and compliance-driven platforms.',
        supports: [
            'Financial system development',
            'Fraud detection models',
            'AI-based risk assessment',
            'Secure mobile & web apps',
            'API-driven integrations'
        ]
    },
    {
        name: 'Accounting',
        iconName: 'FaCalculator',
        desc: 'Accounting firms need accurate, secure, and automated systems to manage financial data.',
        supports: [
            'ERP & accounting integrations',
            'Financial reporting dashboards',
            'Document automation',
            'Secure client portals',
            'Workflow automation systems'
        ]
    },
    {
        name: 'Real Estate',
        iconName: 'FaHome',
        desc: 'Real estate businesses require structured platforms for property management and customer engagement.',
        supports: [
            'Property management systems',
            'CRM for lead tracking',
            'Booking & transaction management',
            'Document management systems',
            'Analytics & reporting tools'
        ]
    }
];

export const sharedTechStack = [
    { name: 'Figma', iconName: 'FaFigma', category: 'Design' },
    { name: 'React', iconName: 'FaReact', category: 'Frontend' },
    { name: 'Next.js', iconName: 'SiNextdotjs', category: 'Frontend' },
    { name: 'Node.js', iconName: 'FaNodeJs', category: 'Backend' },
    { name: 'Python', iconName: 'FaPython', category: 'Backend' },
    { name: 'AWS', iconName: 'FaAws', category: 'Cloud' },
    { name: 'Docker', iconName: 'FaDocker', category: 'DevOps' },
    { name: 'PostgreSQL', iconName: 'SiPostgresql', category: 'Databases' },
    { name: 'MongoDB', iconName: 'SiMongodb', category: 'Databases' },
    { name: 'Flutter', iconName: 'SiFlutter', category: 'Mobile' },
    { name: 'TensorFlow', iconName: 'SiTensorflow', category: 'AI/ML' }
];

export const sharedIndustries = [
    { name: 'Automobile', iconName: 'FaCar' },
    { name: 'Information Technology', iconName: 'FaLaptopCode' },
    { name: 'Manufacturing', iconName: 'FaIndustry' },
    { name: 'Oil & Gas', iconName: 'FaGasPump' },
    { name: 'Ecommerce & Retail', iconName: 'FaShoppingCart' },
    { name: 'Education', iconName: 'FaGraduationCap' },
    { name: 'Fintech', iconName: 'FaCoins' },
    { name: 'Accounting', iconName: 'FaCalculator' },
    { name: 'Real Estate', iconName: 'FaBuilding' },
    { name: 'Telecommunication', iconName: 'FaPassport' }
];

export const sharedOffering = [
    {
        category: 'Software Development',
        title: 'Software Development',
        desc: 'We design and develop secure, scalable, and high-performance software tailored to your operational and strategic needs.',
        points: ['Bespoke Software Development', 'ERP Software Development', 'Cloud Application Development', 'Software Modernization'],
        link: '/services/software-development'
    },
    {
        category: 'Artificial Intelligence',
        title: 'Intelligent Solutions',
        desc: 'Harness the power of AI to automate operations and unlock data-driven growth.',
        points: ['AI Strategy & Consulting', 'Machine Learning Development', 'Generative AI Integration', 'AI Chatbots & Virtual Assistants', 'Natural Language Processing (NLP)', 'AI Automation & Workflows'],
        link: '/services/artificial-intelligence'
    },
    {
        category: 'Staff Augmentation',
        title: 'Extend Your Team',
        desc: 'Scale resources on demand with pre-vetted developers and engineers.',
        points: ['IT Staff Augmentation', 'Dedicated Development Team', 'Full-Project Outsourcing', 'Software Outsourcing'],
        link: '/services/staff-augmentation'
    },
    {
        category: 'Product Development',
        title: 'Idea to Scale',
        desc: 'Build market-ready digital products with a focus on user experience and scalability.',
        points: ['Development Consulting', 'Product Development', 'Product Design', 'Architecture Design', 'UI & UX Design', 'API Development', 'Testing & QA', 'Support & Maintenance'],
        link: '/services/product-development'
    }
];

export const sharedClientLogos = [
    '/clientlogo/image (1).png',
    '/clientlogo/image (2).png',
    '/clientlogo/image (3).png',
    '/clientlogo/image (4).png',
    '/clientlogo/image (5).png',
];

export const sharedMethodology = [
    {
        title: "Discovery",
        description: "We begin by diving deep into your business goals, target audience, and functional requirements. Our team conducts thorough research and stakeholder interviews to ensure we have a crystal-clear understanding of what success looks like for your project."
    },
    {
        title: "Architecture",
        description: "Based on the discovery insights, our system architects design a robust, scalable, and secure technical infrastructure. We select the best technology stack and plan the data flow, ensuring the system can handle growth."
    },
    {
        title: "Development",
        description: "Our expert developers bring the architecture to life using clean, efficient, and maintainable code. We follow agile methodologies, breaking the project into manageable sprints with regular updates."
    },
    {
        title: "Testing",
        description: "Quality is paramount. Our QA team performs rigorous automated and manual testing to identify and fix bugs early. We check for usability, performance, security, and compatibility across devices."
    },
    {
        title: "Deployment",
        description: "We manage a smooth and secure deployment process, moving your solution from the development environment to production. Our team configures servers, databases, and CI/CD pipelines."
    },
    {
        title: "Optimization",
        description: "The launch is just the beginning. We continuously monitor system performance, user behavior, and security metrics to identify areas for improvement. Through regular updates and optimizations."
    }
];

export const sharedAboutStats = [
    { title: 'IT Professionals', shortDescription: '30+' },
    { title: 'Countries Served', shortDescription: '15+' },
    { title: 'Retention Rate', shortDescription: '90%' },
    { title: 'Platform Experts', shortDescription: 'Certified' },
    { title: 'In software engineering', shortDescription: '8+ Years' },
    { title: 'Successfully delivered to global clients', shortDescription: '100+ Projects' },
    { title: 'Lahore, Pakistan', shortDescription: 'HQ' }
];

export const sharedWhyChoose = [
    { title: 'Strategic Engineering Approach', desc: 'We align technology decisions with measurable business outcomes.', iconName: 'FaBrain' },
    { title: 'Flexible Engagement Models', desc: 'Choose from staff augmentation, dedicated teams, or full-cycle project delivery.', iconName: 'FaHandshake' },
    { title: 'Quality-Driven Delivery', desc: 'We follow strict coding standards, security best practices, and structured QA processes.', iconName: 'FaShieldAlt' },
    { title: 'Agile & Transparent Execution', desc: 'Iterative development, continuous communication, and milestone-based delivery.', iconName: 'FaRocket' },
    { title: 'Scalable Architecture', desc: 'Our solutions are built to grow with your business — not limit it.', iconName: 'FaLayerGroup' },
    { title: 'Dedicated Support', desc: 'Post-launch maintenance, updates, and 24/7 monitoring to keep your system performing.', iconName: 'FaHeadset' }
];

export const pagesContent = {
    'home': {
        title: "Codeifyy - Global Software Development Company",
        description: "Global software development company trusted by clients across 15+ countries with a 90% retention rate and certified technology expertise.",
        canonical: "/",
        sections: [
            {
                idForfrontendUse: 'AnimatedHeroSection',
                status: true,
                sortOrder: 1,
                title: `Software Solutions for <span class="d-none d-md-inline"></span><span style="color: var(--codeifyy-green)">Mission-Critical</span> <span class="d-none d-md-inline"><br /></span>Organizations.`,
                subTitle: "Engineering",
                description: "We combine engineering precision, strategic thinking, and agile execution to deliver scalable software products that accelerate business transformation.",
                ctaText: "Start Your Project",
                ctaLink: "/contact"
            },
            {
                idForfrontendUse: 'AboutUs', // Maps to BenefitSection
                status: true,
                sortOrder: 2,
                title: 'About <span class="highlight-span">Codeifyy</span>',
                description: "Whether you need to scale your internal team, develop a custom platform, modernize legacy systems, or launch a digital product, our experts deliver measurable outcomes aligned with your business objectives.",
                elements: sharedAboutStats,
                showBottomMetrics: true
            },
            {
                idForfrontendUse: 'DevLifeCycle - 1', // Maps to Features
                status: true,
                sortOrder: 3,
                title: 'Explore Our <span class="highlight-span">Offering</span>',
                elements: sharedOffering
            },
            {
                idForfrontendUse: 'TechWeWorkWith', // Maps to TechStack
                status: true,
                sortOrder: 4,
                wrapperClass: "section-padding-md",
                title: '<span class="highlight-text">Technologies</span> We Work With',
                description: 'We leverage modern, enterprise-grade technologies to deliver secure and scalable solutions.',
                elements: sharedTechStack
            },
            {
                idForfrontendUse: 'OutsourceServiceOverview-2', // Maps to ProductsAndScale
                status: true,
                sortOrder: 5,
                title: 'Engagement Models',
                description: 'Flexible engagement models designed to align with your project scope and business goals.'
            },
            {
                idForfrontendUse: 'IndustriesWeWorkWith', // Maps to Industries
                status: true,
                sortOrder: 6,
                wrapperClass: "section-padding-md",
                title: '<span>Industries</span> We Serve',
                subTitle: 'We deliver domain-specific solutions tailored to the operational and regulatory demands of multiple industries.',
                ctaText: 'Explore Industry Solutions',
                ctaLink: '/industries',
                elements: sharedIndustries
            },
            {
                idForfrontendUse: 'EmpoweringBusiness', // Maps to CustomerStories
                status: true,
                sortOrder: 7,
                wrapperClass: "section-padding-md",
                title: 'Success Stories from Our Clients',
                description: 'See how we deliver measurable results for industry leaders.',
                ctaText: 'View All Case Studies',
                ctaLink: '/casestudy',
                elements: sharedCaseStudies
            },
            {
                idForfrontendUse: 'WhyChooseCodeifyy',
                status: true,
                sortOrder: 8,
                title: 'Why Choose CODEIFYY',
                description: 'Partner with a team that values quality, transparency, and results.',
                ctaText: "Let's Get Started",
                ctaLink: "/contact",
                elements: sharedWhyChoose
            },
            {
                idForfrontendUse: 'ReviewHome', // Maps to ArticleCarousel
                status: true,
                sortOrder: 9,
                wrapperClass: "section-padding-md",
                title: 'What our clients say about us.',
                subTitle: 'Testimonials',
                description: "Discover how we've helped leading global brands and organizations achieve their digital transformation goals.",
                elements: sharedTestimonials
            },
            {
                idForfrontendUse: 'NextStep',
                status: true,
                sortOrder: 10
            },
            {
                idForfrontendUse: 'CTOMessage',
                status: true,
                sortOrder: 11
            },
            {
                idForfrontendUse: 'FinalCTA', // Maps to CTA
                status: true,
                sortOrder: 12,
                wrapperClass: "final-cta-section",
                title: "Let's Build the Future Together",
                description: "Ready to start your next project? Let's talk about how Codeifyy can help.",
                ctaText: "Get in Touch",
                ctaLink: "/contact"
            }
        ]
    },
    'about': {
        title: "About Codeifyy | Engineering Excellence & Innovation",
        description: "Learn how Codeifyy delivers intelligent software solutions through disciplined engineering, modern tech stacks, and client-focused execution.",
        canonical: "/about",
        sections: [
            {
                idForfrontendUse: 'AnimatedHeroSection',
                status: true,
                sortOrder: 1,
                graphicType: 'about',
                title: 'Your Partner in <br /> <span class="text-highlight">Intelligent Digital Solutions</span>',
                subTitle: 'About Codeifyy',
                description: 'Codeifyy is a technology-driven company specializing in scalable software, AI-powered systems, and enterprise digital transformation. We partner with startups, SMEs, and enterprises to design structured, secure, and high-performance technology ecosystems.',
                ctaText: 'Partner With Us',
                ctaLink: '/contact',
            },
            {
                idForfrontendUse: 'ClientLogos',
                status: true,
                sortOrder: 2
            },
            {
                idForfrontendUse: 'AboutUs', // Maps to BenefitSection
                status: true,
                sortOrder: 3,
                title: 'About <span class="highlight-span">Codeifyy</span>',
                description: 'Whether you need to scale your internal team, develop a custom platform, modernize legacy systems, or launch a digital product, our experts deliver measurable outcomes aligned with your business objectives.',

                elements: [
                    { title: 'IT Professionals', shortDescription: '30+' },
                    { title: 'Countries Served', shortDescription: '15+' },
                    { title: 'Retention Rate', shortDescription: '90%' },
                    { title: 'Platform Experts', shortDescription: 'Certified' },
                    { title: 'In software engineering', shortDescription: '8+ Years' },
                    { title: 'Successfully delivered to global clients', shortDescription: '100+ Projects' },
                    { title: 'Lahore, Pakistan', shortDescription: 'HQ' }
                ],
            },
            {
                idForfrontendUse: 'VisionMission',
                status: true,
                sortOrder: 4,
                vision: {
                    title: 'Our Vision',
                    description: 'To become a globally trusted technology partner recognized for delivering intelligent, scalable, and future-ready digital solutions that empower businesses worldwide.',
                    image: '/images/vision.jpg',
                    imageAlt: 'Our Vision'
                },
                mission: {
                    title: 'Our Mission',
                    description: 'To empower businesses with innovative, secure, and high-performance technology systems that solve real operational challenges. Our leadership, guided by strong technical direction at the CTO level, ensures every solution is architected with scalability, security, and long-term sustainability in mind.',
                    image: '/images/cto.png',
                    imageAlt: 'Our Mission - CTO'
                }
            },
            {
                idForfrontendUse: 'CoreValues',
                status: true,
                sortOrder: 5,
                title: 'Our Core Values',
                subTitle: 'The principles that define who we are.',
                elements: [
                    { title: 'Innovation', desc: 'Embracing modern technologies to solve complex challenges.', iconName: 'FaLightbulb' },
                    { title: 'Integrity', desc: 'Transparent & ethical partnerships built on trust.', iconName: 'FaShieldAlt' },
                    { title: 'Excellence', desc: 'High engineering standards in every solution we deliver.', iconName: 'FaChartLine' },
                    { title: 'Scalability', desc: 'Architected for long-term growth and business evolution.', iconName: 'FaRocket' },
                    { title: 'Client-Centricity', desc: 'Aligning technology decisions with your business goals.', iconName: 'FaUsers' }
                ]
            },
            {
                idForfrontendUse: 'ExpertiseGrid',
                status: true,
                sortOrder: 6,
                title: 'Our Expertise',
                subTitle: 'Delivering excellence across services, solutions, and industries.',
                columns: [
                    {
                        number: '01',
                        heading: 'Services',
                        items: ['Software Development', 'Artificial Intelligence', 'Staff Augmentation', 'Product Engineering'],
                        link: '/services',
                        linkText: 'Explore More'
                    },
                    {
                        number: '02',
                        heading: 'Solutions',
                        items: ['CRM Systems', 'ERP Solutions', 'CMS Platforms', 'School Management', 'POS & Retail Systems']
                    },
                    {
                        number: '03',
                        heading: 'Industries',
                        items: ['Automobile & Manufacturing', 'Oil & Gas', 'Ecommerce & Retail', 'Education & Fintech', 'Real Estate'],
                        link: '/industries',
                        linkText: 'Explore More'
                    }
                ]
            },
            {
                idForfrontendUse: 'TechWeWorkWith',
                status: true,
                sortOrder: 7,
                wrapperClass: "section-padding-md"
            },
            {
                idForfrontendUse: 'ReviewHome',
                status: true,
                sortOrder: 8,
                wrapperClass: "section-padding-md",
                title: 'What Our Clients Say About Us.',
                subTitle: 'Testimonials',
                description: 'Discover how we have helped global brands and organizations achieve their digital transformation goals.',
                elements: sharedTestimonials
            },
            {
                idForfrontendUse: 'EmpoweringBusiness',
                status: true,
                sortOrder: 9,
                wrapperClass: "section-padding-md",
                title: 'Success Stories from Our Clients',
                description: 'See how we deliver measurable results for businesses across industries.',
                ctaText: 'View All Case Studies',
                ctaLink: '/casestudy',
                elements: sharedCaseStudies
            },
            {
                idForfrontendUse: 'LocationMap',
                status: true,
                sortOrder: 10,
                title: 'Our Location',
                subTitle: 'We serve clients across multiple regions, delivering remote-first collaboration with global standards.',
                hqTitle: 'Headquarter',
                email: 'hello@codeifyy.com',
                phone: '+923112601310',
                address: 'National Town, Lahore, 05453, Pakistan',
                mapSrc: 'https://maps.google.com/maps?q=National%20Town%2C%20Lahore%2C%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed'
            },
            {
                idForfrontendUse: 'FinalCTA',
                status: true,
                sortOrder: 11,
                title: "Let’s Build the Future Together",
                description: "At Codeifyy, we don’t just develop software; we engineer intelligent systems that enable sustainable digital growth.",
                ctaText: "Talk to Our Experts",
                ctaLink: "/contact"
            }
        ]
    },
    'services': {
        title: "Expert Software Development & AI Services | Codeifyy",
        description: "Explore our wide range of services including Software Development, Artificial Intelligence, Staff Augmentation, and Product Engineering.",
        canonical: "/services",
        hero: {
            title: 'End-to-End',
            titleHighlight: 'Technology Services',
            description: 'At Codeifyy, we deliver comprehensive technology services designed to help businesses innovate, scale, and operate efficiently in a digital-first world.',
            ctaText: 'Talk to Us',
            ctaLink: '/contact',
            badges: [
                { label: 'Expertise', className: 'badge-security', iconName: 'FaShieldAlt' },
                { label: 'Scalability', className: 'badge-cloud', iconName: 'FaCloud' },
                { label: 'Performance', className: 'badge-performance', iconName: 'FaRocket' }
            ]
        },
        benefitSection: {
            title: 'Flexible Talent. Immediate Impact.',
            description: "Codeifyy's services enable businesses to expand their technical capabilities quickly and efficiently. We provide the expertise you need, when you need it, ensuring your projects remain on track and high-performing.",
            features: [
                'Access engineering talent',
                'Scale high-performing teams in 48 hours',
                'Risk-free 2-week trial period'
            ],
            buttonText: "Let's Connect",
            buttonLink: '/contact',
            stats: [
                { value: '750+', label: 'IT Professionals' },
                { value: '500+', label: 'Developers' },
                { value: '45+', label: 'Project Managers' },
                { value: 'Global', label: 'Delivery Experts' }
            ]
        },
        coreServices: {
            title: 'Our Core Services',
            items: [
                {
                    number: "01", icon: "FaCode", title: "Software Development",
                    description: "Custom-built web, mobile, and enterprise applications designed for scalability and performance.",
                    features: ["Web Application Development", "Mobile App Development", "Enterprise Systems", "SaaS Platforms", "API Development & Integration", "Cloud-Based Applications"],
                    link: "/services/software-development", linkText: "Explore Software Development"
                },
                {
                    number: "02", icon: "FaBrain", title: "Artificial Intelligence Services",
                    description: "Intelligent systems that automate processes and enable data-driven decision-making.",
                    features: ["AI Strategy & Consulting", "Machine Learning Development", "Generative AI Integration", "Chatbots & Virtual Assistants", "Computer Vision", "AI Automation Solutions"],
                    link: "/services/artificial-intelligence", linkText: "Explore AI Services"
                },
                {
                    number: "03", icon: "FaUsers", title: "Staff Augmentation",
                    description: "Extend your in-house capabilities with skilled developers and engineers.",
                    features: ["IT Staff Augmentation", "Dedicated Development Team", "Full-Project Outsourcing", "Software Outsourcing"],
                    link: "/services/staff-augmentation", linkText: "Explore Staff Augmentation"
                },
                {
                    number: "04", icon: "FaRocket", title: "Product Engineering",
                    description: "End-to-end product lifecycle support — from idea validation to deployment and scaling.",
                    features: ["Product Strategy & Planning", "MVP Development", "UI/UX Design", "Architecture Design", "Ongoing Optimization"],
                    link: "/services/product-development", linkText: "Explore Product Engineering"
                }
            ]
        },
        businessSolutions: {
            title: 'Business Solutions We Provide',
            subTitle: 'We deliver ready-to-deploy, customizable business systems designed to solve operational challenges and improve efficiency across departments.',
            items: [
                {
                    number: "01", title: "Customer Relationship Management (CRM)",
                    description: "Centralize customer data, streamline sales pipelines, and improve customer retention.",
                    features: ["Lead & pipeline management", "Customer tracking", "Sales automation", "Reporting & analytics"]
                },
                {
                    number: "02", title: "Content Management System (CMS)",
                    description: "Manage your website and digital content without technical complexity.",
                    features: ["Easy content editing", "Role-based access control", "SEO-friendly architecture", "Media & asset management", "Multi-language support", "Custom workflow approvals"]
                },
                {
                    number: "03", title: "Enterprise Resource Planning (ERP)",
                    description: "Integrate core business processes into a single unified platform.",
                    features: ["Finance & accounting", "Inventory & supply chain", "HR management", "Procurement workflows", "Cross-department reporting"]
                },
                {
                    number: "04", title: "School Management System",
                    description: "Digitize academic and administrative operations for educational institutions.",
                    features: ["Student information management", "Attendance & examination tracking", "Fee management", "Parent-teacher communication", "Reporting dashboards"]
                },
                {
                    number: "05", title: "Retail & Point of Sale (POS)",
                    description: "Manage sales transactions, inventory, and multi-location retail operations efficiently.",
                    features: ["Billing & invoicing", "Inventory tracking", "Multi-store synchronization", "Barcode integration", "Sales analytics"]
                }
            ]
        },
        strategicApproach: {
            title: 'Our Strategic Approach',
            subTitle: 'We follow a structured, transparent delivery process to ensure successful outcomes.',
            items: [
                { step: 1, title: 'Discovery & Strategy', desc: 'Understanding business goals and defining the technology roadmap.' },
                { step: 2, title: 'Design & Architecture', desc: 'Creating scalable, secure, and future-proof system architecture.' },
                { step: 3, title: 'Development & Build', desc: 'Building high-performance solutions aligned with your requirements.' },
                { step: 4, title: 'Testing & QA', desc: 'Ensuring reliability, security, and seamless deployment.' },
                { step: 5, title: 'Support & Scale', desc: 'Continuous monitoring, improvements, and performance enhancements.' }
            ]
        },
        cta: {
            title: 'Ready to Build Something Scalable?',
            description: "Whether you need custom development, AI solutions, or a dedicated team — we're ready to help you accelerate your digital journey.",
            btnText: 'Speak with an Expert',
            link: '/contact'
        },
        sections: [
            {
                idForfrontendUse: 'AnimatedHeroSection',
                status: true,
                sortOrder: 1,
                title: 'End-to-End <span class="text-highlight">Technology Services</span>',
                subTitle: 'Our Services',
                description: 'At Codeifyy, we deliver comprehensive technology services designed to help businesses innovate, scale, and operate efficiently in a digital-first world.',
                ctaText: 'Talk to Us',
                ctaLink: '/contact',
                codeLines: [
                    { comment: 'End-to-End Solutions' },
                    { content: '<span class="c-purple">const</span> <span class="c-blue">Services</span> = <span class="c-yellow">()</span> <span class="c-purple">=&gt;</span> {' },
                    { content: '<span class="c-purple">return</span> <span class="c-green">"Full Lifecycle"</span>;', indent: true },
                    { content: '}' },
                    { br: true },
                    { comment: 'Strategy &amp; Execution' },
                    { content: '<span class="c-purple">await</span> <span class="c-blue">Codeifyy</span>.<span class="c-yellow">deliver</span>(<span class="c-white">Excellence</span>);' },
                    { br: true },
                    { comment: 'Global Scale' },
                    { content: '<span class="c-purple">if</span> (<span class="c-white">growth</span> &gt; <span class="c-yellow">0</span>) {' },
                    { content: '<span class="c-blue">scale</span>(<span class="c-green">"Unlimited"</span>);', indent: true },
                    { content: '}' }
                ],
                elements: [
                    { title: 'Expertise', className: 'badge-security', iconName: 'FaShieldAlt', color: '#10b981' },
                    { title: 'Scalability', className: 'badge-cloud', iconName: 'FaCloud', color: '#3b82f6' },
                    { title: 'Performance', className: 'badge-performance', iconName: 'FaRocket', color: '#f59e0b' }
                ]
            },
            {
                idForfrontendUse: 'ClientLogos',
                status: true,
                sortOrder: 2
            },
            {
                idForfrontendUse: 'AboutUs',
                status: true,
                sortOrder: 3,
                title: 'Flexible Talent. <span class="highlight-span">Immediate Impact.</span>',
                description: "Codeifyy's services enable businesses to expand their technical capabilities quickly and efficiently. We provide the expertise you need, when you need it, ensuring your projects remain on track and high-performing.",
                features: [
                    'Access engineering talent',
                    'Scale high-performing teams in 48 hours',
                    'Risk-free 2-week trial period'
                ],
                ctaText: "Let's Connect",
                ctaLink: '/contact',
                elements: [
                    { title: 'IT Professionals', shortDescription: '750+' },
                    { title: 'Developers', shortDescription: '500+' },
                    { title: 'Project Managers', shortDescription: '45+' },
                    { title: 'Delivery Experts', shortDescription: 'Global' }
                ]
            },
            {
                idForfrontendUse: 'CoreServices',
                status: true,
                sortOrder: 4,
                title: 'Our Core Services',
                items: [
                    {
                        number: "01", icon: "FaCode", title: "Software Development",
                        description: "Custom-built web, mobile, and enterprise applications designed for scalability and performance.",
                        features: ["Web Application Development", "Mobile App Development", "Enterprise Systems", "SaaS Platforms", "API Development & Integration", "Cloud-Based Applications"],
                        link: "/services/software-development", linkText: "Explore Software Development"
                    },
                    {
                        number: "02", icon: "FaBrain", title: "Artificial Intelligence Services",
                        description: "Intelligent systems that automate processes and enable data-driven decision-making.",
                        features: ["AI Strategy & Consulting", "Machine Learning Development", "Generative AI Integration", "Chatbots & Virtual Assistants", "Computer Vision", "AI Automation Solutions"],
                        link: "/services/artificial-intelligence", linkText: "Explore AI Services"
                    },
                    {
                        number: "03", icon: "FaUsers", title: "Staff Augmentation",
                        description: "Extend your in-house capabilities with skilled developers and engineers.",
                        features: ["IT Staff Augmentation", "Dedicated Development Team", "Full-Project Outsourcing", "Software Outsourcing"],
                        link: "/services/staff-augmentation", linkText: "Explore Staff Augmentation"
                    },
                    {
                        number: "04", icon: "FaRocket", title: "Product Engineering",
                        description: "End-to-end product lifecycle support — from idea validation to deployment and scaling.",
                        features: ["Product Strategy & Planning", "MVP Development", "UI/UX Design", "Architecture Design", "Ongoing Optimization"],
                        link: "/services/product-development", linkText: "Explore Product Engineering"
                    }
                ]
            },
            {
                idForfrontendUse: 'BusinessSolutions',
                status: true,
                sortOrder: 5,
                title: 'Business Solutions We Provide',
                subTitle: 'We deliver ready-to-deploy, customizable business systems designed to solve operational challenges and improve efficiency across departments.',
                items: [
                    {
                        number: "01", title: "Customer Relationship Management (CRM)",
                        description: "Centralize customer data, streamline sales pipelines, and improve customer retention.",
                        features: ["Lead & pipeline management", "Customer tracking", "Sales automation", "Reporting & analytics"]
                    },
                    {
                        number: "02", title: "Content Management System (CMS)",
                        description: "Manage your website and digital content without technical complexity.",
                        features: ["Easy content editing", "Role-based access control", "SEO-friendly architecture", "Media & asset management", "Multi-language support", "Custom workflow approvals"]
                    },
                    {
                        number: "03", title: "Enterprise Resource Planning (ERP)",
                        description: "Integrate core business processes into a single unified platform.",
                        features: ["Finance & accounting", "Inventory & supply chain", "HR management", "Procurement workflows", "Cross-department reporting"]
                    },
                    {
                        number: "04", title: "School Management System",
                        description: "Digitize academic and administrative operations for educational institutions.",
                        features: ["Student information management", "Attendance & examination tracking", "Fee management", "Parent-teacher communication", "Reporting dashboards"]
                    },
                    {
                        number: "05", title: "Retail & Point of Sale (POS)",
                        description: "Manage sales transactions, inventory, and multi-location retail operations efficiently.",
                        features: ["Billing & invoicing", "Inventory tracking", "Multi-store synchronization", "Barcode integration", "Sales analytics"]
                    }
                ]
            },
            {
                idForfrontendUse: 'TechWeWorkWith',
                status: true,
                sortOrder: 6,
                wrapperClass: "section-padding-md"
            },
            {
                idForfrontendUse: 'Industries',
                status: true,
                sortOrder: 7,
                wrapperClass: "section-padding-md",
                title: '<span class="highlight-span">Industries</span> We Serve',
                subTitle: 'We deliver domain-specific solutions tailored to each industry.',
                ctaText: 'Explore Industry Solutions',
                ctaLink: '/industries',
                elements: sharedIndustries
            },
            {
                idForfrontendUse: 'StrategicApproach',
                status: true,
                sortOrder: 8,
                title: 'Our Strategic Approach',
                subTitle: 'We follow a structured, transparent delivery process to ensure successful outcomes.',
                items: [
                    { step: 1, title: 'Discovery & Strategy', desc: 'Understanding business goals and defining the technology roadmap.' },
                    { step: 2, title: 'Design & Architecture', desc: 'Creating scalable, secure, and future-proof system architecture.' },
                    { step: 3, title: 'Development & Build', desc: 'Building high-performance solutions aligned with your requirements.' },
                    { step: 4, title: 'Testing & QA', desc: 'Ensuring reliability, security, and seamless deployment.' },
                    { step: 5, title: 'Support & Scale', desc: 'Continuous monitoring, improvements, and performance enhancements.' }
                ]
            },
            {
                idForfrontendUse: 'ReviewHome',
                status: true,
                sortOrder: 9,
                wrapperClass: "section-padding-md",
                title: 'What Our Clients Say About Us.',
                subTitle: 'Testimonials',
                description: 'Discover how we have helped global brands achieve their digital transformation goals.',
                elements: sharedTestimonials
            },
            {
                idForfrontendUse: 'EmpoweringBusiness',
                status: true,
                sortOrder: 10,
                wrapperClass: "section-padding-md",
                title: 'Success Stories from Our Clients',
                description: 'See how we deliver measurable results across industries.',
                ctaText: 'View All Case Studies',
                ctaLink: '/casestudy',
                elements: sharedCaseStudies
            },
            {
                idForfrontendUse: 'FinalCTA',
                status: true,
                sortOrder: 11,
                title: 'Ready to Build Something Scalable?',
                description: "Whether you need custom development, AI solutions, or a dedicated team — we're ready to help you accelerate your digital journey.",
                ctaText: 'Speak with an Expert',
                ctaLink: '/contact'
            }
        ]
    },
    'industries': {
        title: "Industry Specific Software Solutions | Codeifyy",
        description: "We deliver domain-focused digital solutions tailored to the operational, compliance, and scalability requirements of modern industries.",
        canonical: "/industries",
        sections: [
            {
                idForfrontendUse: 'AnimatedHeroSection',
                status: true,
                sortOrder: 1,
                title: 'Technology Solutions Built for <span class="text-highlight">Industry-Specific Demands</span>',
                subTitle: 'Industries We Serve',
                description: 'We deliver domain-focused digital solutions tailored to the operational, compliance, and scalability requirements of modern industries.',
                ctaText: 'Talk to an Expert',
                ctaLink: '/contact',
                codeLines: [
                    { comment: 'Industry-Specific Tech' },
                    { content: '<span class="c-purple">const</span> <span class="c-blue">Industry</span> = <span class="c-yellow">(<span class="c-white">sector</span>)</span> <span class="c-purple">=&gt;</span> {' },
                    { content: '<span class="c-purple">return</span> <span class="c-white">sector</span>.<span class="c-blue">optimize</span>();', indent: true },
                    { content: '}' },
                    { br: true },
                    { comment: 'Domain Excellence' },
                    { content: '<span class="c-purple">await</span> <span class="c-blue">Compliance</span>.<span class="c-yellow">verify</span>(<span class="c-white">Enterprise</span>);' },
                    { br: true },
                    { comment: 'Operational Efficiency' },
                    { content: '<span class="c-purple">if</span> (<span class="c-white">efficiency</span> < <span class="c-yellow">100</span>) {' },
                    { content: '<span class="c-blue">automate</span>(<span class="c-green">"Workflows"</span>);', indent: true },
                    { content: '}' }
                ],
                elements: [
                    { title: 'Industry 4.0', iconName: 'FaIndustry', className: 'badge-industry', color: 'var(--codeifyy-green)' },
                    { title: 'Automation', iconName: 'FaCogs', className: 'badge-automation', color: '#3b82f6' },
                    { title: 'Efficiency', iconName: 'FaChartLine', className: 'badge-efficiency', color: '#f59e0b' }
                ]
            },
            {
                idForfrontendUse: 'ClientLogos',
                status: true,
                sortOrder: 2
            },
            {
                idForfrontendUse: 'AboutUs',
                status: true,
                sortOrder: 3,
                title: 'Deep Industry <br />Expertise.',
                description: 'We combine technical excellence with domain knowledge to solve sector-specific challenges. Codeifyy delivers solutions that are not just technically sound, but operationally effective.',
                features: [
                    'Compliance & Security First',
                    'Tailored for Regulated Sectors',
                    'Scalable Architecture'
                ],
                ctaText: 'Talk to an Expert',
                ctaLink: 'contact',
                elements: [
                    { title: 'IT Professionals', shortDescription: '30+' },
                    { title: 'Countries Served', shortDescription: '15+' },
                    { title: 'Retention Rate', shortDescription: '90%' },
                    { title: 'Platform Experts', shortDescription: 'Global' }
                ]
            },
            {
                idForfrontendUse: 'DetailedIndustriesWeWorkWith',
                status: true,
                sortOrder: 4,
                elements: detailedIndustryData
            },
            {
                idForfrontendUse: 'CrossIndustryCapabilities',
                status: true,
                sortOrder: 5,
                title: 'Cross-Industry Capabilities',
                subTitle: 'Scalable solutions applicable across all sectors.',
                elements: [
                    { title: 'Custom Software Development', iconName: 'FaLaptopCode' },
                    { title: 'Artificial Intelligence Solutions', iconName: 'FaBrain' },
                    { title: 'CRM, ERP & CMS Implementation', iconName: 'FaCogs' },
                    { title: 'Process Automation', iconName: 'FaCheckCircle' },
                    { title: 'Staff Augmentation', iconName: 'FaUserCog' },
                    { title: 'Cloud & Infrastructure Services', iconName: 'FaCloud' }
                ]
            },
            {
                idForfrontendUse: 'IndustryApproach',
                status: true,
                sortOrder: 6,
                title: 'How We Approach Industry Projects',
                subTitle: "We don't deliver generic software. We align technology with sector-specific requirements.",
                elements: [
                    { title: 'Industry Analysis', description: 'We understand regulatory requirements, operational workflows, and customer expectations.' },
                    { title: 'Solution Mapping', description: 'We align services and solutions with real operational challenges.' },
                    { title: 'Custom Development', description: 'We design systems tailored to industry processes and compliance requirements.' },
                    { title: 'Secure Deployment', description: 'We ensure compliance, scalability, and long-term sustainability in every deployment.' }
                ]
            },
            {
                idForfrontendUse: 'EmpoweringBusiness',
                status: true,
                sortOrder: 7,
                title: 'Success Stories from Our Clients',
                description: 'See how we deliver measurable results for businesses across industries.',
                ctaText: 'View All Case Studies',
                ctaLink: '/casestudy',
                elements: sharedCaseStudies
            },
            {
                idForfrontendUse: 'ReviewHome',
                status: true,
                sortOrder: 8,
                wrapperClass: "section-padding-md",
                title: 'What Our Clients Say About Us.',
                subTitle: 'Testimonials',
                description: 'Discover how we have helped global brands achieve their digital transformation goals.',
                elements: sharedTestimonials
            },
            {
                idForfrontendUse: 'FinalCTA',
                status: true,
                sortOrder: 9,
                title: "Let’s Build a Solution for Your Industry",
                description: "Whether you operate in a regulated sector or a fast-scaling digital environment, we deliver technology aligned with your industry challenges.",
                ctaText: "Discuss Your Industry Needs",
                ctaLink: "/contact"
            }
        ]
    },
    'product-development': {
        title: "End-to-End Product Development Services | Codeifyy",
        description: "From MVP to enterprise-scale products, we provide strategy, design, and engineering to bring your digital vision to life.",
        canonical: "/services/product-development",
        sections: [
            {
                idForfrontendUse: 'AnimatedHeroSection',
                status: true,
                sortOrder: 1,
                title: 'Transforming Ideas into <span class="text-highlight">Market-Leading Products</span>',
                subTitle: 'Product Development',
                description: 'We don’t just build features; we build products. Our team combines market strategy with disciplined engineering to deliver sustainable digital growth.',
                ctaText: 'View Our Process',
                ctaLink: '/contact',
                codeLines: [
                    { comment: 'Product Roadmap' },
                    { content: '<span class="c-purple">const</span> <span class="c-blue">Product</span> = {\'' },
                    { content: '<span class="c-white">vision</span>: <span class="c-green">"ScalableInnovation"</span>,', indent: true },
                    { content: '<span class="c-white">strategy</span>: <span class="c-green">"DataDriven"</span>', indent: true },
                    { content: '};\'' }
                ],
                elements: [
                    { title: 'MVP Launch', iconName: 'FaRocket', className: 'badge-mvp', color: '#10b981' },
                    { title: 'Strategy', iconName: 'FaLightbulb', className: 'badge-strategy', color: '#3b82f6' },
                    { title: 'UX Focused', iconName: 'FaUsers', className: 'badge-ux', color: '#f59e0b' }
                ]
            },
            {
                idForfrontendUse: 'ClientLogos',
                status: true,
                sortOrder: 2
            },
            {
                idForfrontendUse: 'ServiceCapabilities',
                status: true,
                sortOrder: 3,
                title: "Our Product Engineering Models",
                subtitle: "How we help you build depends on where you are in your product lifecycle.",
                services: [
                    {
                        title: "MVP Development",
                        description: "Rapidly building the core version of your product to validate your business hypothesis with real users.",
                        capabilitiesHeading: "CAPABILITIES",
                        capabilities: ["Feature Prioritization", "Rapid Prototyping", "Scalable Base Architecture"]
                    },
                    {
                        title: "Product Scaling",
                        description: "Expanding your MVP into a full-featured enterprise product with high-availability and security.",
                        capabilitiesHeading: "CAPABILITIES",
                        capabilities: ["Infrastructure Scaling", "Feature Expansion", "Performance Optimization"]
                    },
                    {
                        title: "Legacy Modernization",
                        description: "Revitalizing older products with modern tech stacks, improved UX, and better performance.",
                        capabilitiesHeading: "CAPABILITIES",
                        capabilities: ["Stack Migration", "UX Overhaul", "Security Patching"]
                    },
                    {
                        title: "Product Strategy & UX",
                        description: "Mapping out the long-term roadmap and ensuring the product meets high usability standards.",
                        capabilitiesHeading: "CAPABILITIES",
                        capabilities: ["User Research", "Roadmap Planning", "Conversion Optimization"]
                    }
                ]
            },
            {
                idForfrontendUse: 'ServiceProcess',
                status: true,
                sortOrder: 4,
                dark: true,
                title: "Product Lifecycle Management",
                subtitle: "Our systematic approach from discovery to deployment.",
                steps: [
                    { title: "Discovery", icon: "FaSearch", description: "Market research & technical feasibility." },
                    { title: "Design", icon: "FaPalette", description: "UI/UX & technical architecture." },
                    { title: "Build", icon: "FaCode", description: "Agile sprints & QA testing." },
                    { title: "Launch", icon: "FaRocket", description: "Production release & monitoring." }
                ]
            },
            {
                idForfrontendUse: 'FinalCTA',
                status: true,
                sortOrder: 5,
                title: "Build Your Next Big Thing",
                description: "Work with a team that treats your product as their own. Let’s discuss your roadmap.",
                ctaText: "Start Discovery Phase",
                ctaLink: "/contact"
            }
        ]
    },
    'staff-augmentation': {
        title: "Technical Staff Augmentation Services | Codeifyy",
        description: "Scale your engineering team with pre-vetted, high-performing software engineers, architects, and DevOps specialists.",
        canonical: "/services/staff-augmentation",
        sections: [
            {
                idForfrontendUse: 'AnimatedHeroSection',
                status: true,
                sortOrder: 1,
                graphicType: 'profile',
                title: 'Scale Your Engineering <br /><span class="text-highlight">Capacity</span>',
                subTitle: 'Staff Augmentation Services',
                description: 'Access top-tier developers, engineers, and technical specialists who integrate seamlessly into your team and accelerate your roadmap.',
                ctaText: 'Request Developers',
                ctaLink: '/contact',
                profile: {
                    name: "Senior Developer",
                    role: "Full-Stack Engineer",
                    status: "Available Now",
                    avatarIcon: 'FaUserTie',
                    skills: [
                        { name: "React.js", icon: "FaCode", color: "#3b82f6" },
                        { name: "Node.js", icon: "FaCode", color: "#22c55e" },
                        { name: "AWS", icon: "FaCode", color: "#f59e0b" },
                        { name: "TypeScript", icon: "FaCode", color: "#6366f1" }
                    ]
                },
                codeLines: [
                    { content: '<span style="color: #c084fc">const</span> <span style="color: #60a5fa">engineer</span> = { <br />' },
                    { content: '&nbsp;&nbsp;experience: <span style="color: #facc15">"Senior"</span>, <br />' },
                    { content: '&nbsp;&nbsp;delivery: <span style="color: #4ade80">"Immediate"</span> <br />' },
                    { content: '};' }
                ],
                elements: [
                    { title: 'Top 1% Talent', subtitle: 'Vetted & Verified', className: 'card-verified', iconName: 'FaCheckCircle' },
                    { title: 'Ready to Deploy', subtitle: 'Onboard in 24h', className: 'card-experience', iconName: 'FaRocket' }
                ]
            },
            {
                idForfrontendUse: 'ClientLogos',
                status: true,
                sortOrder: 2
            },
            {
                idForfrontendUse: 'AboutUs',
                status: true,
                sortOrder: 3,
                showBottomMetrics: false,
                title: 'Flexible Talent. <br />Immediate Impact.',
                description: 'Codeifyy’s Staff Augmentation services enable businesses to expand their technical capabilities quickly and efficiently. We handle the recruiting, vetting, and payroll—you get the code.',
                features: [
                    'Work within your tools and sprint cycles',
                    'Align with your internal architecture',
                    'Follow your management structure',
                    'Accelerate delivery timelines'
                ],
                ctaText: "Let's Connect",
                ctaLink: 'contact',
                elements: [
                    { title: 'IT Professionals', shortDescription: '30+' },
                    { title: 'Countries Served', shortDescription: '15+' },
                    { title: 'Retention Rate', shortDescription: '90%' },
                    { title: 'Platform Experts', shortDescription: 'Certified' }
                ]
            },
            {
                idForfrontendUse: 'ServiceCapabilities', // Using ServiceCapabilities for richer lists
                status: true,
                sortOrder: 4,
                title: "Our Staff Augmentation Models",
                subtitle: "We offer flexible engagement models to suit your specific project needs.",
                elements: [
                    {
                        title: "IT Staff Augmentation",
                        subtitle: "Skilled Professionals Integrated Into Your Team",
                        description: "Strengthen your internal capabilities with experienced developers and technical specialists who seamlessly integrate into your existing workflows.",
                        capabilitiesHeading: "Our engineers:",
                        capabilities: [
                            "Work within your tools and sprint cycles",
                            "Align with your internal architecture",
                            "Follow your management structure",
                            "Accelerate delivery timelines"
                        ],
                        closingLine: "This model is ideal when you need to fill specific skill gaps or handle temporary workload increases without long-term hiring commitments.",
                        bestFor: ["Scaling startups", "Enterprises managing peak workloads", "Projects requiring niche expertise"]
                    },
                    {
                        title: "Dedicated Development Team",
                        subtitle: "Full-Time, Project-Focused Teams",
                        description: "Build a fully dedicated engineering team that works exclusively on your product or platform.",
                        capabilitiesHeading: "This model provides:",
                        capabilities: [
                            "Frontend & backend engineers",
                            "QA specialists",
                            "DevOps support",
                            "Project management (if required)"
                        ],
                        closingLine: "The team operates as an extension of your company, focused solely on achieving your product milestones.",
                        bestFor: ["Long-term product development", "Complex platforms", "Continuous feature expansion", "Technology-driven startups"]
                    },
                    {
                        title: "Full-Project Outsourcing",
                        subtitle: "End-to-End Execution with Predictable Outcomes",
                        description: "Entrust your entire project lifecycle to Codeifyy — from discovery to deployment.",
                        capabilitiesHeading: "We manage:",
                        capabilities: [
                            "Requirements gathering",
                            "Architecture design",
                            "Development",
                            "Testing & QA",
                            "Deployment & support"
                        ],
                        closingLine: "This approach ensures structured delivery, defined milestones, and predictable quality outcomes.",
                        bestFor: ["Businesses without internal technical teams", "Clearly defined project scopes", "Organizations seeking turnkey solutions"]
                    },
                    {
                        title: "Software Outsourcing",
                        subtitle: "Flexible Custom Software Delivery",
                        description: "Outsource specific software components or entire systems with flexibility, speed, and engineering excellence.",
                        capabilitiesHeading: "We provide:",
                        capabilities: [
                            "Custom application development",
                            "System modernization",
                            "Feature extensions",
                            "Integration services"
                        ],
                        closingLine: "This model allows businesses to maintain strategic oversight while leveraging external technical strength.",
                        bestFor: ["Companies optimizing development costs", "Businesses expanding digital capabilities", "Enterprises modernizing legacy systems"]
                    }
                ]
            },
            {
                idForfrontendUse: 'ReviewHome',
                status: true,
                sortOrder: 5,
                wrapperClass: "section-padding-md",
                title: 'What Our Clients Say About Us.',
                subTitle: 'Testimonials',
                description: 'Discover how we have helped global brands achieve their digital transformation goals.',
                elements: sharedTestimonials
            },
            {
                idForfrontendUse: 'ServiceProcess',
                status: true,
                sortOrder: 6,
                title: "Our Talent Selection Process",
                subtitle: "Precision Matching for High Performance.",
                description: "Every engineer undergoes:",
                closingLine: "We ensure enterprise-grade performance standards before deployment.",
                elements: [
                    { title: "Technical Evaluation", icon: "FaCode" },
                    { title: "Problem-Solving Assessment", icon: "FaProjectDiagram" },
                    { title: "Code Review", icon: "FaCheckCircle" },
                    { title: "Communication Screening", icon: "FaUserTie" },
                    { title: "Cultural Fit Validation", icon: "FaHandshake" }
                ]
            },
            {
                idForfrontendUse: 'BenefitGrid',
                status: true,
                sortOrder: 7,
                dark: true,
                title: "Benefits Of Partnering With Codeifyy",
                description: "We operate as a strategic partner — not just a staffing vendor.",
                elements: [
                    { title: "Rapid team scaling", icon: "FaRocket" },
                    { title: "Reduced recruitment overhead", icon: "FaUserTie" },
                    { title: "Flexible contracts", icon: "FaHandshake" },
                    { title: "Secure collaboration practices", icon: "FaShieldAlt" },
                    { title: "Transparent communication", icon: "FaCheckCircle" },
                    { title: "Long-term scalability support", icon: "FaChartLine" }
                ]
            },
            {
                idForfrontendUse: 'EmpoweringBusiness',
                status: true,
                sortOrder: 8,
                wrapperClass: "section-padding-md",
                title: 'Success Stories from Our Clients',
                description: 'See how we deliver measurable results across industries.',
                ctaText: 'View All Case Studies',
                ctaLink: '/casestudy',
                elements: sharedCaseStudies
            },
            {
                idForfrontendUse: 'TimelineProcess',
                status: true,
                sortOrder: 9,
                title: "Our Onboarding Timeline",
                subtitle: "Getting a new engineer into your team is a matter of days, not months.",
                elements: [
                    { title: "Requirement Analysis" },
                    { title: "Candidate Shortlisting" },
                    { title: "Interview & Selection" },
                    { title: "Contract Finalization" },
                    { title: "Seamless Integration" }
                ]
            },
            {
                idForfrontendUse: 'FinalCTA',
                status: true,
                sortOrder: 10,
                title: "Ready to Scale Your Team?",
                description: "Tell us about your stack and requirements, and we'll present candidate profiles within 48 hours.",
                ctaText: "Request Talent Profiles",
                ctaLink: "/contact"
            }
        ]
    },
    'software-development': {
        title: "Software Development Services | Codeifyy",
        description: "Codeifyy delivers scalable, secure, and high-performance software solutions tailored to business needs using modern technologies and clean architecture.",
        canonical: "/services/software-development",
        sections: [
            {
                idForfrontendUse: 'AnimatedHeroSection',
                status: true,
                sortOrder: 1,
                title: 'Engineering Software for <span class="text-highlight">Modern</span> Businesses.',
                subTitle: 'Software Development Services',
                description: 'We design and develop secure, scalable, and future-ready software solutions that solve complex business challenges and drive measurable growth.',
                ctaText: 'Schedule a Call',
                ctaLink: '/contact',
                codeLines: [
                    { comment: 'Enterprise Systems' },
                    { content: '<span class="c-purple">const</span> <span class="c-blue">Architecture</span> = <span class="c-yellow">()</span> <span class="c-purple">=&gt;</span> {' },
                    { content: '<span class="c-purple">return</span> <span class="c-green">"Scalable & Secure"</span>;', indent: true },
                    { content: '}' },
                    { br: true },
                    { comment: 'Cloud Integration' },
                    { content: '<span class="c-purple">await</span> <span class="c-blue">AWS</span>.<span class="c-yellow">deploy</span>(<span class="c-white">Microservices</span>);' },
                    { br: true },
                    { comment: 'Performance Optimization' },
                    { content: '<span class="c-purple">if</span> (<span class="c-white">latency</span> &gt; <span class="c-yellow">0.1</span>) {' },
                    { content: '<span class="c-blue">optimize</span>(<span class="c-green">"Edge Computing"</span>);', indent: true },
                    { content: '}' }
                ],
                elements: [
                    { title: 'Security First', iconName: 'FaShieldAlt', className: 'badge-security', color: '#10b981' },
                    { title: 'Cloud Native', iconName: 'FaCloud', className: 'badge-cloud', color: '#3b82f6' },
                    { title: 'High Performance', iconName: 'FaRocket', className: 'badge-performance', color: '#f59e0b' }
                ]
            },
            {
                idForfrontendUse: 'ClientLogos',
                status: true,
                sortOrder: 2
            },
            {
                idForfrontendUse: 'AboutUs',
                status: true,
                sortOrder: 3,
                showBottomMetrics: false,
                title: 'Flexible Talent. <br />Immediate Impact.',
                description: 'Codeifyy’s Staff Augmentation services enable businesses to expand their technical capabilities quickly and efficiently.',
                features: [
                    'Access top engineering talent',
                    'Scale teams in 48 hours',
                    'Risk-free trial period'
                ],
                ctaText: "Let's Connect",
                ctaLink: 'contact',
                elements: [
                    { title: 'IT Professionals', shortDescription: '30+' },
                    { title: 'Countries Served', shortDescription: '15+' },
                    { title: 'Retention Rate', shortDescription: '90%' },
                    { title: 'Platform Experts', shortDescription: 'Certified' }
                ]
            },
            {
                idForfrontendUse: 'ServiceCapabilities',
                status: true,
                sortOrder: 4,
                title: "Software Development Services",
                description: "We build secure, scalable, and high-performance software tailored to your goals. Our engineering approach ensures clean architecture, reliable delivery, and products built to evolve with your business.",
                elements: [
                    {
                        title: "Bespoke Software Development",
                        description: "We develop fully tailored applications aligned with your workflows, industry requirements, and growth goals.",
                        capabilitiesHeading: "Our capabilities include:",
                        capabilities: [
                            "Custom web applications",
                            "Internal business systems",
                            "SaaS platforms",
                            "Customer-facing portals",
                            "Workflow automation systems"
                        ],
                        closingLine: "Every solution is engineered for scalability, maintainability, and long-term performance."
                    },
                    {
                        title: "ERP Software Development",
                        subtitle: "Integrated Systems for Operational Excellence",
                        description: "We design and develop ERP solutions that unify core business functions into a centralized, streamlined platform.",
                        capabilitiesHeading: "ERP capabilities include:",
                        capabilities: [
                            "Finance & accounting modules",
                            "Inventory & supply chain management",
                            "HR & payroll systems",
                            "CRM integration",
                            "Reporting & analytics dashboards"
                        ],
                        closingLine: "Our ERP solutions improve visibility, reduce inefficiencies, and enable data-driven decision-making."
                    },
                    {
                        title: "Cloud Application Development",
                        subtitle: "Cloud-Native Systems Built for Scale",
                        description: "We design and deploy cloud-based applications that deliver flexibility, high availability, and global accessibility.",
                        capabilitiesHeading: "Our cloud expertise covers:",
                        capabilities: [
                            "SaaS product development",
                            "Cloud-native architecture",
                            "Microservices implementation",
                            "Serverless solutions",
                            "Secure cloud deployments"
                        ],
                        closingLine: "Built for performance, elasticity, and long-term cost efficiency."
                    },
                    {
                        title: "Software Modernization",
                        subtitle: "Transform Legacy Systems into Scalable Platforms",
                        description: "We help businesses modernize outdated systems and re-architect applications for improved performance and scalability.",
                        capabilitiesHeading: "Modernization services include:",
                        capabilities: [
                            "Code refactoring",
                            "Cloud migration",
                            "UI/UX redesign",
                            "Monolith-to-microservices transformation",
                            "Security upgrades"
                        ],
                        closingLine: "Future-proof your technology investments while minimizing operational disruption."
                    }
                ]
            },
            {
                idForfrontendUse: 'EmpoweringBusiness',
                status: true,
                sortOrder: 5,
                wrapperClass: "section-padding-md"
            },
            {
                idForfrontendUse: 'EngagementModels',
                status: true,
                sortOrder: 6,
                title: "Engagement Models for Software Development",
                description: "At Codeifyy, we partner with businesses to design, build, scale, and optimize digital products. From concept validation to post-launch support, we deliver tailored software solutions aligned with your business goals, timelines, and growth plans.",
                elements: [
                    {
                        title: "Full Software Development Outsourcing",
                        description: "We take full ownership of your project lifecycle — from strategy and architecture to deployment and maintenance. Our cross-functional team handles planning, UI/UX design, development, testing, and delivery under one roof."
                    },
                    {
                        title: "Dedicated Development Teams",
                        description: "We assemble a custom group of developers, designers, QA engineers, and project managers who work exclusively on your product. The team integrates with your internal workflows, giving you flexibility, scalability, and complete visibility."
                    },
                    {
                        title: "Staff Augmentation",
                        description: "Strengthen your existing team with specialized expertise. Whether you require backend engineers, frontend specialists, mobile app developers, DevOps professionals, or AI experts, we provide skilled professionals ready to plug into your project and accelerate delivery."
                    }
                ]
            },
            {
                idForfrontendUse: 'IndustriesWeWorkWith',
                status: true,
                sortOrder: 7,
                wrapperClass: "section-padding-md",
                title: '<span class="highlight-span">Industries</span> We Serve',
                subTitle: 'We deliver domain-specific solutions tailored to each industry.',
                ctaText: 'Explore Industry Solutions',
                ctaLink: '/industries',
                elements: sharedIndustries
            },
            {
                idForfrontendUse: 'ReviewHome',
                status: true,
                sortOrder: 8,
                wrapperClass: "section-padding-md",
                title: 'What Our Clients Say About Us.',
                subTitle: 'Testimonials',
                description: 'Discover how we have helped global brands achieve their digital transformation goals.',
                elements: sharedTestimonials
            },
            {
                idForfrontendUse: 'TechWeWorkWith',
                status: true,
                sortOrder: 9,
                wrapperClass: "section-padding-md integrated-tech-stack bg-white"
            },
            {
                idForfrontendUse: 'ServiceProcess',
                status: true,
                sortOrder: 10,
                dark: true,
                variant: 'minimal',
                title: "Our Development Approach",
                subTitle: "Structured. Agile. Results-Driven.",
                description: "We follow a disciplined engineering lifecycle:",
                closingLine: "Every phase is executed with transparency, documentation, and measurable milestones.",
                elements: [
                    { title: "Discovery & Planning", icon: "FaSearch" },
                    { title: "Architecture Design", icon: "FaPencilRuler" },
                    { title: "Agile Development", icon: "FaTasks" },
                    { title: "Quality Assurance", icon: "FaBug" },
                    { title: "Deployment", icon: "FaRocket" },
                    { title: "Continuous Optimization", icon: "FaChartLine" }
                ]
            },
            {
                idForfrontendUse: 'FinalCTA',
                status: true,
                sortOrder: 11,
                title: "Ready to Build Dependable, Scalable Software?",
                description: "Let’s design a solution that supports your long-term growth.",
                ctaText: "Discuss Your Project",
                ctaLink: "/contact"
            }
        ]
    },
    'artificial-intelligence': {
        title: "AI Development Services | Intelligent Systems | Codeifyy",
        description: "We build AI-powered applications, automation systems, and machine learning solutions that enhance decision-making and operational efficiency.",
        canonical: "/services/artificial-intelligence",
        sections: [
            {
                idForfrontendUse: 'AnimatedHeroSection',
                status: true,
                sortOrder: 1,
                title: 'Transform Your Business with <br /><span class="text-highlight">Intelligent</span> Solutions.',
                subTitle: 'Artificial Intelligence Services',
                description: 'We design and deploy AI-powered solutions that automate operations, enhance customer experiences, and enable data-driven decision-making.',
                ctaText: 'Talk to an AI Expert',
                ctaLink: '/contact',
                codeLines: [
                    { content: '<span class="c-gray">// AI Optimization Model</span><br />' },
                    { content: '<span class="c-purple">const</span> <span class="c-blue">AI_System</span> = <span class="c-yellow">()</span> <span class="c-purple">=&gt;</span> {<br />' },
                    { content: '&nbsp;&nbsp;<span class="c-purple">await</span> <span class="c-blue">Model</span>.<span class="c-yellow">train</span>(<span class="c-green">dataset</span>);<br />' },
                    { content: '&nbsp;&nbsp;<span class="c-purple">return</span> <span class="c-blue">PredictiveInsights</span>;<br />' },
                    { content: '}<br />' },
                    { content: '<span class="c-gray">// Neural Network Config</span><br />' },
                    { content: '<span class="c-blue">layers</span>: [<span class="c-yellow">128</span>, <span class="c-yellow">64</span>, <span class="c-yellow">32</span>],<br />' },
                    { content: '<span class="c-blue">activation</span>: <span class="c-green">\'ReLU\'</span>' }
                ],
                elements: [
                    { title: 'Deep Learning', className: 'badge-security', iconName: 'FaBrain', color: '#10b981' },
                    { title: 'Neural Networks', className: 'badge-cloud', iconName: 'FaNetworkWired', color: '#3b82f6' },
                    { title: 'Automation', className: 'badge-performance', iconName: 'FaRobot', color: '#f59e0b' }
                ]
            },
            {
                idForfrontendUse: 'ClientLogos',
                status: true,
                sortOrder: 2
            },
            {
                idForfrontendUse: 'AboutUs',
                status: true,
                sortOrder: 3,
                showBottomMetrics: false,
                title: 'AI Expertise. <br />Immediate Impact.',
                description: 'Codeifyy’s AI services enable businesses to leverage cutting-edge intelligence quickly and efficiently. We handle the data strategy, model training, and integration—you get the results.',
                features: [
                    'Access top AI talent',
                    'Scale AI squads in 48 hours',
                    'Risk-free pilot period'
                ],
                ctaText: "Let's Connect",
                ctaLink: 'contact',
                elements: [
                    { title: 'IT Professionals', shortDescription: '30+' },
                    { title: 'Countries Served', shortDescription: '15+' },
                    { title: 'Retention Rate', shortDescription: '90%' },
                    { title: 'Platform Experts', shortDescription: 'Certified' }
                ]
            },
            {
                idForfrontendUse: 'ServiceCapabilities',
                status: true,
                sortOrder: 4,
                title: "Our AI Capabilities",
                elements: [
                    {
                        title: "AI Strategy & Consulting",
                        description: "Successful AI starts with clarity. We help you identify high-impact opportunities and create a structured implementation roadmap.",
                        challengesHeading: "Challenges We Solve",
                        challenges: [
                            "Unclear AI use cases",
                            "Poor data readiness",
                            "Uncertain ROI expectations",
                            "Misaligned AI investments",
                            "Technology selection confusion"
                        ],
                        capabilitiesHeading: "What We Deliver",
                        capabilities: [
                            "AI readiness assessment",
                            "Business use-case identification",
                            "AI implementation roadmap",
                            "Data strategy planning",
                            "Architecture & technology advisory",
                            "ROI & feasibility analysis"
                        ]
                    },
                    {
                        title: "Machine Learning Development",
                        description: "We design and develop custom machine learning models that analyze data, recognize patterns, and generate predictive insights.",
                        challengesHeading: "Challenges We Solve",
                        challenges: [
                            "Inaccurate forecasting",
                            "Manual data analysis",
                            "Fraud detection limitations",
                            "Lack of predictive capabilities",
                            "Data underutilization"
                        ],
                        capabilitiesHeading: "What We Deliver",
                        capabilities: [
                            "Predictive analytics models",
                            "Forecasting systems",
                            "Recommendation engines",
                            "Classification & clustering models",
                            "Fraud detection systems",
                            "Custom ML algorithm development"
                        ]
                    },
                    {
                        title: "Generative AI Integration",
                        description: "We integrate Large Language Models (LLMs) and Generative AI technologies into your applications and workflows to enhance productivity and automation.",
                        challengesHeading: "Challenges We Solve",
                        challenges: [
                            "Manual content creation",
                            "Inefficient document handling",
                            "Limited internal knowledge access",
                            "Repetitive communication tasks"
                        ],
                        capabilitiesHeading: "What We Deliver",
                        capabilities: [
                            "LLM integration (OpenAI & custom models)",
                            "AI copilots for internal teams",
                            "Intelligent document processing",
                            "Automated content generation systems",
                            "AI-powered search & knowledge systems",
                            "Workflow automation using GenAI"
                        ]
                    },
                    {
                        title: "AI Chatbots & Virtual Assistants",
                        description: "We build AI-powered chatbots and virtual assistants that automate customer support, sales engagement, and internal communication.",
                        challengesHeading: "Challenges We Solve",
                        challenges: [
                            "High support response times",
                            "Repetitive customer queries",
                            "Inconsistent service availability",
                            "Overloaded support teams"
                        ],
                        capabilitiesHeading: "What We Deliver",
                        capabilities: [
                            "AI customer support bots",
                            "Sales & lead qualification assistants",
                            "Internal knowledge assistants",
                            "Web, mobile & messaging integrations",
                            "NLP-driven conversational systems",
                            "Multi-language capabilities"
                        ]
                    },
                    {
                        title: "Natural Language Processing (NLP)",
                        description: "We implement NLP systems that extract insights from unstructured text and speech data.",
                        challengesHeading: "Challenges We Solve",
                        challenges: [
                            "Large volumes of unstructured text",
                            "Limited sentiment visibility",
                            "Manual content analysis",
                            "Language processing inefficiencies"
                        ],
                        capabilitiesHeading: "What We Deliver",
                        capabilities: [
                            "Sentiment analysis systems",
                            "Text classification models",
                            "Speech-to-text integration",
                            "Text summarization tools",
                            "Multilingual NLP systems"
                        ]
                    },
                    {
                        title: "AI Automation & Intelligent Workflows",
                        description: "We design AI-powered automation systems that reduce repetitive work and improve operational efficiency.",
                        challengesHeading: "Challenges We Solve",
                        challenges: [
                            "Manual data processing",
                            "Repetitive administrative tasks",
                            "Slow document verification",
                            "Process bottlenecks"
                        ],
                        capabilitiesHeading: "What We Deliver",
                        capabilities: [
                            "Intelligent process automation",
                            "AI-driven workflow systems",
                            "Smart document extraction",
                            "Decision-support engines",
                            "Cross-system automation integration"
                        ]
                    }
                ]
            },
            {
                idForfrontendUse: 'EmpoweringBusiness',
                status: true,
                sortOrder: 5,
                wrapperClass: "section-padding-md",
                title: 'Success Stories from Our Clients',
                description: 'See how we deliver measurable results across industries.',
                ctaText: 'View All Case Studies',
                ctaLink: '/casestudy',
                elements: sharedCaseStudies
            },
            {
                idForfrontendUse: 'IndustriesWeWorkWith',
                status: true,
                sortOrder: 6,
                wrapperClass: "section-padding-md",
                title: '<span class="highlight-span">Industries</span> We Serve',
                subTitle: 'We deliver domain-specific solutions tailored to each industry.',
                ctaText: 'Explore Industry Solutions',
                ctaLink: '/industries',
                elements: sharedIndustries
            },
            {
                idForfrontendUse: 'ReviewHome',
                status: true,
                sortOrder: 7,
                wrapperClass: "section-padding-md",
                title: 'What Our Clients Say About Us.',
                subTitle: 'Testimonials',
                description: 'Discover how we have helped global brands achieve their digital transformation goals.',
                elements: sharedTestimonials
            },
            {
                idForfrontendUse: 'ServiceProcess',
                status: true,
                sortOrder: 8,
                dark: true,
                title: "Our AI Implementation Process",
                subtitle: "We follow a structured, scalable approach to ensure successful deployment.",
                description: "We evaluate your operations, identify high-impact use cases, and define measurable objectives.",
                variant: 'minimal',
                elements: [
                    {
                        title: "Discovery & Business Analysis",
                        icon: "FaSearch",
                        description: "We evaluate your operations, identify high-impact use cases, and define measurable objectives."
                    },
                    {
                        title: "Data Assessment & Preparation",
                        icon: "FaDatabase",
                        description: "We assess data quality, structure pipelines, and prepare datasets for model training."
                    },
                    {
                        title: "Model Development & Testing",
                        icon: "FaBrain",
                        description: "We build, train, validate, and optimize AI models tailored to your requirements."
                    },
                    {
                        title: "Integration & Deployment",
                        icon: "FaNetworkWired",
                        description: "We integrate AI solutions into your applications and deploy them securely in cloud or on-premise environments."
                    },
                    {
                        title: "Monitoring & Continuous Improvement",
                        icon: "FaChartLine",
                        description: "We monitor model performance, retrain when necessary, and continuously optimize for accuracy and efficiency."
                    }
                ]
            },
            {
                idForfrontendUse: 'FinalCTA',
                status: true,
                sortOrder: 9,
                wrapperClass: "mt-5",
                title: "Ready to Implement AI in Your Business?",
                description: "Let’s build scalable AI solutions that drive measurable impact.",
                ctaText: "Discuss Your Use Case",
                ctaLink: "/contact"
            }
        ]
    },
    'product-development': {
        title: "Product Development Services | Scalable Software | Codeifyy",
        description: "From concept to launch, Codeifyy designs and develops scalable software products with user-focused design and robust engineering foundations.",
        canonical: "/services/product-development",
        sections: [
            {
                idForfrontendUse: 'AnimatedHeroSection',
                status: true,
                sortOrder: 1,
                title: 'Full-Cycle Product <br /><span class="text-highlight">Development</span>',
                subTitle: 'Product Engineering Services',
                description: 'We partner with startups, enterprises, and innovators to design, build, and scale digital products that deliver real user value and measurable business growth.',
                ctaText: 'Discuss Your Idea',
                ctaLink: '/contact',
                codeLines: [
                    { content: '<span class="c-gray">// Product Launch Strategy</span><br />' },
                    { content: '<span class="c-purple">const</span> <span class="c-blue">MVP</span> = <span class="c-yellow">()</span> <span class="c-purple">=&gt;</span> {<br />' },
                    { content: '&nbsp;&nbsp;<span class="c-purple">return</span> <span class="c-green">"Market Ready"</span>;<br />' },
                    { content: '}<br />' },
                    { content: '<span class="c-gray">// Features & UI</span><br />' },
                    { content: '<span class="c-purple">await</span> <span class="c-blue">UserJourney</span>.<span class="c-yellow">optimize</span>(<span class="c-white">UX</span>);<br />' },
                    { content: '<span class="c-gray">// Growth & Scale</span><br />' },
                    { content: '<span class="c-purple">if</span> (<span class="c-white">users</span> &gt; <span class="c-yellow">1M</span>) {<br />' },
                    { content: '&nbsp;&nbsp;<span className="c-blue">deploy</span>(<span className="c-green">"Auto-Scaling"</span>);<br />' },
                    { content: '}' }
                ],
                elements: [
                    { title: 'Market Ready', className: 'badge-security', iconName: 'FaRocket', color: '#10b981' },
                    { title: 'User Centric', className: 'badge-cloud', iconName: 'FaUsers', color: '#3b82f6' },
                    { title: 'Scalable Growth', className: 'badge-performance', iconName: 'FaChartLine', color: '#f59e0b' }
                ]
            },
            {
                idForfrontendUse: 'ClientLogos',
                status: true,
                sortOrder: 2
            },
            {
                idForfrontendUse: 'AboutUs',
                status: true,
                sortOrder: 3,
                showBottomMetrics: false,
                title: 'Build Scalable. <br />Market-Ready Products.',
                description: 'At Codeifyy, product development goes beyond coding. We combine product strategy, UX thinking, and scalable engineering to transform ideas into successful digital solutions.',
                ctaText: 'Discuss Your Product',
                ctaLink: 'contact',
                elements: [
                    { title: 'IT Professionals', shortDescription: '30+' },
                    { title: 'Countries Served', shortDescription: '15+' },
                    { title: 'Retention Rate', shortDescription: '90%' },
                    { title: 'Platform Experts', shortDescription: 'Certified' }
                ]
            },
            {
                idForfrontendUse: 'ServiceCapabilities', // Our Product Development Services
                status: true,
                sortOrder: 4,
                title: "Our Product Development Services",
                elements: [
                    {
                        title: "Development Consulting",
                        subtitle: "Strategic Direction Before Execution",
                        description: "Successful products begin with strategic clarity.",
                        capabilitiesHeading: "Our development consulting services help you:",
                        capabilities: ["Validate product feasibility", "Define product scope and roadmap", "Identify risks and technical constraints", "Select optimal technology stacks", "Plan scalable architecture"],
                        closingLine: "We ensure your product vision is technically sound, strategically aligned, and ready for execution.",
                        bestFor: ["Early-stage product ideas", "Scaling product teams", "Businesses entering new digital markets"]
                    },
                    {
                        title: "Product Development",
                        subtitle: "Agile, Scalable, Market-Ready Solutions",
                        description: "We build robust product features and modules tailored to your roadmap and growth objectives.",
                        capabilitiesHeading: "Our approach includes:",
                        capabilities: ["MVP development", "Iterative feature expansion", "Agile sprint-based delivery", "Modular engineering architecture", "Secure and scalable backend systems"],
                        closingLine: "Whether launching a new SaaS platform or expanding an enterprise solution, we ensure predictable, high-quality delivery."
                    },
                    {
                        title: "Product Design",
                        subtitle: "Designing Competitive Digital Experiences",
                        description: "We research, define, and shape the product vision before development begins.",
                        capabilitiesHeading: "Our product design process includes:",
                        capabilities: ["Market and competitor research", "Product positioning strategy", "Feature definition & prioritization", "Concept validation", "Functional documentation"],
                        closingLine: "We transform ideas into structured product blueprints ready for engineering."
                    },
                    {
                        title: "Architecture Design",
                        subtitle: "Engineering for Scalability & Performance",
                        description: "Strong architecture determines long-term product stability.",
                        capabilitiesHeading: "We design:",
                        capabilities: ["Multi-tenant product architectures", "High-availability systems", "Microservices frameworks", "Secure data infrastructures", "Scalable cloud-native systems"],
                        closingLine: "Every architecture is built to support performance, user growth, and long-term evolution."
                    },
                    {
                        title: "UI & UX Design",
                        subtitle: "User-Centered Interfaces That Drive Adoption",
                        description: "We create intuitive, engaging, and conversion-focused product interfaces.",
                        capabilitiesHeading: "Our UI/UX services include:",
                        capabilities: ["User journey mapping", "Wireframing & prototyping", "Interaction design", "Design systems creation", "Usability testing"],
                        closingLine: "We ensure your product is not only functional — but desirable and intuitive."
                    },
                    {
                        title: "API Development",
                        subtitle: "Secure, Scalable System Connectivity",
                        description: "We build robust APIs and integration frameworks that connect your product to external systems and services.",
                        capabilitiesHeading: "Our API capabilities include:",
                        capabilities: ["RESTful API development", "Third-party system integration", "Payment gateway integration", "CRM/ERP integrations", "Secure authentication mechanisms"],
                        closingLine: "This ensures smooth interoperability and ecosystem expansion."
                    },
                    {
                        title: "Testing & Quality Assurance",
                        subtitle: "Quality Engineered into Every Release",
                        description: "We conduct comprehensive testing across all product layers.",
                        capabilitiesHeading: "Our QA processes include:",
                        capabilities: ["Functional testing", "Performance testing", "Security testing", "Usability testing", "Automated testing frameworks"],
                        closingLine: "We eliminate vulnerabilities and performance gaps before deployment."
                    },
                    {
                        title: "Support & Maintenance",
                        subtitle: "Continuous Optimization for Long-Term Success",
                        description: "Product development doesn't stop at launch.",
                        capabilitiesHeading: "We provide structured post-release support including:",
                        capabilities: ["Performance monitoring", "Proactive updates", "Bug fixes & feature enhancements", "Infrastructure management", "Security patches"],
                        closingLine: "We ensure your product remains stable, competitive, and future-ready."
                    }
                ]
            },
            {
                idForfrontendUse: 'SplitContentSection', // Why Codeifyy
                status: true,
                sortOrder: 5,
                wrapperClass: "bg-light",
                title: "Why Codeifyy For <br />Product Development?",
                subTitle: "We build digital products designed not just to launch — but to lead.",
                ctaText: "Discuss Your Product",
                ctaLink: "#contact",
                elements: [
                    'Business-aligned product strategy',
                    'Agile engineering excellence',
                    'Scalable architecture design',
                    'Security-first mindset',
                    'Long-term product partnership'
                ],
                featuredCard: {
                    icon: 'FaLaptopCode',
                    title: 'Partner with Experts',
                    description: 'Our team acts as an extension of your business, driving technical excellence.',
                    className: 'p-4 p-lg-5'
                }
            },
            {
                idForfrontendUse: 'ServiceModels', // Use dedicated component
                status: true,
                sortOrder: 6,
                title: "Which Service Model Do You Need?",
                elements: [
                    {
                        title: "Product Outsourcing",
                        description: "We deliver end-to-end outsourced software product development to help you launch a new solution or enhance products already on the market.",
                        link: "/contact",
                        linkText: "Outsource Product Development"
                    },
                    {
                        title: "Team Augmentation",
                        description: "We provide competent resources for design, programming, testing, and any other tasks to drive your product development ahead.",
                        link: "/contact",
                        linkText: "Hire Your Team"
                    }
                ]
            },
            {
                idForfrontendUse: 'IndustriesWeWorkWith',
                status: true,
                sortOrder: 7,
                wrapperClass: "section-padding-md",
                title: '<span class="highlight-span">Industries</span> We Serve',
                subTitle: 'We deliver domain-specific solutions tailored to each industry.',
                ctaText: 'Explore Industry Solutions',
                ctaLink: '/industries',
                elements: sharedIndustries
            },
            {
                idForfrontendUse: 'EmpoweringBusiness',
                status: true,
                sortOrder: 8,
                wrapperClass: "section-padding-md",
                title: 'Success Stories from Our Clients',
                description: 'See how we deliver measurable results across industries.',
                ctaText: 'View All Case Studies',
                ctaLink: '/casestudy',
                elements: sharedCaseStudies
            },
            {
                idForfrontendUse: 'TechWeWorkWith',
                status: true,
                sortOrder: 9,
                wrapperClass: "section-padding-md"
            },
            {
                idForfrontendUse: 'ReviewHome',
                status: true,
                sortOrder: 10,
                wrapperClass: "section-padding-md",
                title: 'What Our Clients Say About Us.',
                subTitle: 'Testimonials',
                description: 'Discover how we have helped global brands achieve their digital transformation goals.',
                elements: sharedTestimonials
            },
            {
                idForfrontendUse: 'ProductDeliveryApproach',
                status: true,
                sortOrder: 11,
                title: "Our Product Delivery Approach",
                elements: [
                    {
                        title: "Discovery & Research",
                        description: "We dive deep into your market, users, and business goals to define a clear product vision. Our team conducts thorough research to ensure we have a crystal-clear understanding of what success looks like for your project."
                    },
                    {
                        title: "Blueprint & Architecture",
                        description: "Based on research, we design a robust, scalable technical foundation. We select the best technology stack and plan the data flow, ensuring the system can handle growth and perform reliably under pressure."
                    },
                    {
                        title: "Agile Engineering",
                        description: "Our expert developers bring the architecture to life using clean, efficient, and maintainable code. We follow agile methodologies, with manageable sprints and regular updates to ensure transparency."
                    },
                    {
                        title: "Testing & Validation",
                        description: "Quality is paramount. Our QA team performs rigorous automated and manual testing to identify and fix bugs early. We check for usability, performance, and security to ensure a flawless user experience."
                    },
                    {
                        title: "Deployment",
                        description: "We manage a smooth and secure deployment process, moving your solution from development to production. Our team configures CI/CD pipelines to ensure zero downtime and a seamless transition."
                    },
                    {
                        title: "Continuous Improvement",
                        description: "The launch is just the beginning. We continuously monitor performance, user behavior, and security metrics. Through regular updates, we ensure your software remains efficient and ahead of the competition."
                    }
                ]
            },
            {
                idForfrontendUse: 'FinalCTA',
                status: true,
                sortOrder: 12,
                wrapperClass: "section-padding text-center",
                title: "Have a Product Vision Ready to Build?",
                description: "Let’s turn it into a scalable, high-performance digital solution.",
                ctaText: "Let’s Build Your Product",
                ctaLink: "/contact"
            }
        ]
    },
    'career': {
        title: "Careers at Codeifyy | Build the Future With Us",
        description: "Join Codeifyy and build intelligent, scalable software solutions. Explore future opportunities in engineering, AI, and digital innovation.",
        canonical: "/career",
        sections: [
            {
                idForfrontendUse: 'AnimatedHeroSection',
                status: true,
                sortOrder: 1,
                subTitle: 'Careers at Codeifyy',
                title: 'Join the <span class="text-highlight">Evolution</span> <br /> of Software Engineering.',
                description: "We're building intelligent software, scalable systems, and AI-powered solutions that shape industries. Join a team driven by ownership, innovation, and measurable impact.",
                ctaText: 'View Open Positions',
                ctaLink: '#open-positions',
                codeLines: [
                    { comment: 'Career at Codeifyy' },
                    { content: '<span class="c-purple">const</span> <span class="c-blue">Engineer</span> = <span class="c-yellow">()</span> <span class="c-purple">=&gt;</span> {' },
                    { content: '<span class="c-purple">return</span> <span class="c-green">"Impact + Growth"</span>;', indent: true },
                    { content: '}' },
                    { br: true },
                    { comment: 'Join the Mission' },
                    { content: '<span class="c-purple">await</span> <span class="c-blue">Codeifyy</span>.<span class="c-yellow">hire</span>(<span class="c-white">You</span>);' },
                    { br: true },
                    { comment: 'Build the Future' },
                    { content: '<span class="c-purple">if</span> (<span class="c-white">driven</span> === <span class="c-yellow">true</span>) {' },
                    { content: '<span class="c-blue">apply</span>(<span class="c-green">"Now"</span>);', indent: true },
                    { content: '}' }
                ],
                elements: [
                    { title: 'Remote & Flexible', className: 'badge-security', iconName: 'FaGlobe', color: '#10b981' },
                    { title: 'High Impact', className: 'badge-cloud', iconName: 'FaRocket', color: '#3b82f6' },
                    { title: 'Global Network', className: 'badge-performance', iconName: 'FaUsers', color: '#f59e0b' }
                ]
            },
            {
                idForfrontendUse: 'CareerPositions',
                status: true,
                sortOrder: 2,
                philosophyTitle: 'Our Philosophy',
                philosophySubtitle: 'How we work and why it matters.',
                positionsTitle: 'Open Positions',
                positionsSubtitle: 'Find your next challenge.',
                philosophy: [
                    { title: 'Remote & Flexible', desc: 'Work with global clients while maintaining work-life balance.', iconName: 'FaGlobe' },
                    { title: 'Ownership & Impact', desc: 'Build products used by real businesses across industries.', iconName: 'FaUsers' },
                    { title: 'Engineering Excellence', desc: 'Modern tech stacks, clean architecture, and scalable systems.', iconName: 'FaLaptopCode' },
                ],
                roles: [
                    { title: 'Senior Backend Engineer', location: 'Remote / Hybrid', department: 'Engineering', status: 'Coming Soon' },
                    { title: 'Product Manager', location: 'Remote', department: 'Product', status: 'Coming Soon' },
                    { title: 'Head of Business Development', location: 'Remote / Global', department: 'Business & Growth', status: 'Coming Soon' },
                    { title: 'Head of Content', location: 'Remote', department: 'Marketing', status: 'Coming Soon' },
                ],
            },
            {
                idForfrontendUse: 'FinalCTA',
                status: true,
                sortOrder: 3,
                wrapperClass: '',
                title: "Ready to Build the Future?",
                description: "Even if you don't see a perfect fit, we're always looking for exceptional talent to join our mission.",
                ctaText: "Send Your CV",
                ctaLink: "/contact"
            }
        ]
    }
};
