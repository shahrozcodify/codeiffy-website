import React, { useState } from 'react';
import './TechStack.css';
import {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaDatabase, FaJava,
    FaAngular, FaVuejs, FaPhp, FaSalesforce, FaWordpress, FaAndroid,
    FaApple, FaGitlab, FaGithub, FaJira, FaFigma, FaSwift
} from 'react-icons/fa';
import {
    SiTailwindcss, SiTypescript, SiPostgresql, SiRedis, SiKubernetes,
    SiVite, SiNextdotjs, SiNestjs, SiMongodb, SiMysql, SiOracle,
    SiSpringboot, SiDjango, SiLaravel, SiDotnet, SiFlutter,
    SiTensorflow, SiPytorch, SiPandas, SiNumpy, SiScikitlearn,
    SiOpencv, SiKeras, SiJenkins, SiTerraform, SiAnsible,
    SiCircleci, SiSelenium, SiCypress, SiAdobephotoshop,
    SiSketch, SiInvision, SiKotlin,
    SiGooglecloud, SiFirebase, SiApachekafka
} from 'react-icons/si';
import { TbBrandKotlin, TbBrandGolang } from 'react-icons/tb';

const TechStack = () => {
    // Component updated for marquee
    const techData = [
        // Design
        { name: 'Figma', icon: <FaFigma />, category: 'Design' },
        { name: 'Photoshop', icon: <SiAdobephotoshop />, category: 'Design' },
        { name: 'Sketch', icon: <SiSketch />, category: 'Design' },

        // Platforms (CRM/CMS)
        { name: 'Salesforce', icon: <FaSalesforce />, category: 'Platforms' },
        { name: 'WordPress', icon: <FaWordpress />, category: 'Platforms' },

        // Backend
        { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend' },
        { name: 'Python', icon: <FaPython />, category: 'Backend' },
        { name: 'Java', icon: <FaJava />, category: 'Backend' },
        { name: 'PHP', icon: <FaPhp />, category: 'Backend' },
        { name: 'Go', icon: <TbBrandGolang />, category: 'Backend' },
        { name: '.NET Core', icon: <SiDotnet />, category: 'Backend' },
        { name: 'Django', icon: <SiDjango />, category: 'Backend' },
        { name: 'Spring Boot', icon: <SiSpringboot />, category: 'Backend' },
        { name: 'Laravel', icon: <SiLaravel />, category: 'Backend' },
        { name: 'NestJS', icon: <SiNestjs />, category: 'Backend' },

        // Frontend
        { name: 'React', icon: <FaReact />, category: 'Frontend' },
        { name: 'Angela', icon: <FaAngular />, category: 'Frontend' },
        { name: 'Vue.js', icon: <FaVuejs />, category: 'Frontend' },
        { name: 'Next.js', icon: <SiNextdotjs />, category: 'Frontend' },
        { name: 'TypeScript', icon: <SiTypescript />, category: 'Frontend' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'Frontend' },

        // Databases
        { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'Databases' },
        { name: 'MySQL', icon: <SiMysql />, category: 'Databases' },
        { name: 'MongoDB', icon: <SiMongodb />, category: 'Databases' },
        { name: 'Oracle', icon: <SiOracle />, category: 'Databases' },
        { name: 'Redis', icon: <SiRedis />, category: 'Databases' },

        // AI/ML
        { name: 'TensorFlow', icon: <SiTensorflow />, category: 'AI/ML' },
        { name: 'PyTorch', icon: <SiPytorch />, category: 'AI/ML' },
        { name: 'Pandas', icon: <SiPandas />, category: 'AI/ML' },
        { name: 'NumPy', icon: <SiNumpy />, category: 'AI/ML' },
        { name: 'Keras', icon: <SiKeras />, category: 'AI/ML' },
        { name: 'OpenCV', icon: <SiOpencv />, category: 'AI/ML' },

        // DevOps
        { name: 'Docker', icon: <FaDocker />, category: 'DevOps' },
        { name: 'Kubernetes', icon: <SiKubernetes />, category: 'DevOps' },
        { name: 'Jenkins', icon: <SiJenkins />, category: 'DevOps' },
        { name: 'GitLab', icon: <FaGitlab />, category: 'DevOps' },
        { name: 'Terraform', icon: <SiTerraform />, category: 'DevOps' },

        // Mobile
        { name: 'Flutter', icon: <SiFlutter />, category: 'Mobile' },
        { name: 'React Native', icon: <FaReact />, category: 'Mobile' },
        { name: 'iOS (Swift)', icon: <FaSwift />, category: 'Mobile' },
        { name: 'Android (Kotlin)', icon: <TbBrandKotlin />, category: 'Mobile' },

        // Cloud
        { name: 'AWS', icon: <FaAws />, category: 'Cloud' },
        { name: 'Google Cloud', icon: <SiGooglecloud />, category: 'Cloud' },
        { name: 'Firebase', icon: <SiFirebase />, category: 'Cloud' },

        // QA
        { name: 'Selenium', icon: <SiSelenium />, category: 'QA' },
        { name: 'Cypress', icon: <SiCypress />, category: 'QA' }
    ];

    return (
        <section className="tech-stack-section">
            <div className="container">
                <div className="tech-stack-header">
                    <h2 className="tech-stack-title">
                        <span className="highlight-text">Technologies</span> We Work With
                    </h2>
                    <p className="tech-stack-description">
                        We leverage modern, enterprise-grade technologies to deliver secure and scalable solutions.
                    </p>
                </div>

                <div className="tech-marquee-wrapper">
                    <div className="tech-marquee-container">
                        <div className="tech-marquee-track">
                            {/* First set of items */}
                            {techData.map((tech, index) => (
                                <div key={`tech-${index}-1`} className="tech-card-marquee">
                                    <div className="tech-icon-marquee">
                                        {tech.icon}
                                    </div>
                                    <span className="tech-name-marquee">{tech.name}</span>
                                </div>
                            ))}

                            {/* Duplicate set for seamless looping */}
                            {techData.map((tech, index) => (
                                <div key={`tech-${index}-2`} className="tech-card-marquee">
                                    <div className="tech-icon-marquee">
                                        {tech.icon}
                                    </div>
                                    <span className="tech-name-marquee">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="tech-marquee-container">
                        <div className="tech-marquee-track reverse">
                            {/* First set of items */}
                            {techData.map((tech, index) => (
                                <div key={`tech-${index}-rev-1`} className="tech-card-marquee">
                                    <div className="tech-icon-marquee">
                                        {tech.icon}
                                    </div>
                                    <span className="tech-name-marquee">{tech.name}</span>
                                </div>
                            ))}

                            {/* Duplicate set for seamless looping */}
                            {techData.map((tech, index) => (
                                <div key={`tech-${index}-rev-2`} className="tech-card-marquee">
                                    <div className="tech-icon-marquee">
                                        {tech.icon}
                                    </div>
                                    <span className="tech-name-marquee">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
