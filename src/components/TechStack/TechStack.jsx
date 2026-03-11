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
import { sharedTechStack } from '../../data/pagesContent';

const IconMap = {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaDatabase, FaJava,
    FaAngular, FaVuejs, FaPhp, FaSalesforce, FaWordpress, FaAndroid,
    FaApple, FaGitlab, FaGithub, FaJira, FaFigma, FaSwift,
    SiTailwindcss, SiTypescript, SiPostgresql, SiRedis, SiKubernetes,
    SiVite, SiNextdotjs, SiNestjs, SiMongodb, SiMysql, SiOracle,
    SiSpringboot, SiDjango, SiLaravel, SiDotnet, SiFlutter,
    SiTensorflow, SiPytorch, SiPandas, SiNumpy, SiScikitlearn,
    SiOpencv, SiKeras, SiJenkins, SiTerraform, SiAnsible,
    SiCircleci, SiSelenium, SiCypress, SiAdobephotoshop,
    SiSketch, SiInvision, SiKotlin,
    SiGooglecloud, SiFirebase, SiApachekafka,
    TbBrandKotlin, TbBrandGolang
};

const TechStack = ({ data }) => {
    const title = data?.title || '<span class="highlight-text">Technologies</span> We Work With';
    const description = data?.description || 'We leverage modern, enterprise-grade technologies to deliver secure and scalable solutions.';
    
    // Use dynamic elements if provided, otherwise fallback to sharedTechStack
    const techData = data?.elements || sharedTechStack;

    return (
        <section className="tech-stack-section">
            <div className="container">
                <div className="tech-stack-header">
                    <h2 className="tech-stack-title" dangerouslySetInnerHTML={{ __html: title }} />
                    <p className="tech-stack-description">
                        {description}
                    </p>
                </div>

                <div className="tech-marquee-wrapper">
                    <div className="tech-marquee-container">
                        <div className="tech-marquee-track">
                            {/* First set of items */}
                            {techData.map((tech, index) => {
                                const Icon = tech.icon || (tech.iconName ? IconMap[tech.iconName] : null);
                                return (
                                    <div key={`tech-${index}-1`} className="tech-card-marquee">
                                        <div className="tech-icon-marquee">
                                            {Icon && (typeof Icon === 'object' ? Icon : <Icon />)}
                                        </div>
                                        <span className="tech-name-marquee">{tech.name}</span>
                                    </div>
                                );
                            })}

                            {/* Duplicate set for seamless looping */}
                            {techData.map((tech, index) => {
                                const Icon = tech.icon || (tech.iconName ? IconMap[tech.iconName] : null);
                                return (
                                    <div key={`tech-${index}-2`} className="tech-card-marquee">
                                        <div className="tech-icon-marquee">
                                            {Icon && (typeof Icon === 'object' ? Icon : <Icon />)}
                                        </div>
                                        <span className="tech-name-marquee">{tech.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="tech-marquee-container">
                        <div className="tech-marquee-track reverse">
                            {/* First set of items */}
                            {techData.map((tech, index) => {
                                const Icon = tech.icon || (tech.iconName ? IconMap[tech.iconName] : null);
                                return (
                                    <div key={`tech-${index}-rev-1`} className="tech-card-marquee">
                                        <div className="tech-icon-marquee">
                                            {Icon && (typeof Icon === 'object' ? Icon : <Icon />)}
                                        </div>
                                        <span className="tech-name-marquee">{tech.name}</span>
                                    </div>
                                );
                            })}

                            {/* Duplicate set for seamless looping */}
                            {techData.map((tech, index) => {
                                const Icon = tech.icon || (tech.iconName ? IconMap[tech.iconName] : null);
                                return (
                                    <div key={`tech-${index}-rev-2`} className="tech-card-marquee">
                                        <div className="tech-icon-marquee">
                                            {Icon && (typeof Icon === 'object' ? Icon : <Icon />)}
                                        </div>
                                        <span className="tech-name-marquee">{tech.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
