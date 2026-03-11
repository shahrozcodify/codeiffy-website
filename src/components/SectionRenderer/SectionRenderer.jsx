import React, { lazy, Suspense } from 'react';
const ClientLogos = lazy(() => import('../ClientLogos/ClientLogos'));

// Lazy load existing components to preserve layout
const Hero = lazy(() => import('../Hero/Hero'));
const Features = lazy(() => import('../Features/Features-services'));
const BenefitSection = lazy(() => import('../BenefitSection/BenefitSection'));
const Industries = lazy(() => import('../Industries/Industries'));
const DetailedIndustries = lazy(() => import('../Industries/DetailedIndustries'));
const CustomerStories = lazy(() => import('../CustomerStories/CustomerStories'));
const TechStack = lazy(() => import('../TechStack/TechStack'));
const ArticleCarousel = lazy(() => import('../ArticleCarousel/ArticleCarousel'));
const WhyChooseCodeifyy = lazy(() => import('../WhyChooseCodeifyy/WhyChooseCodeifyy'));
const NextStep = lazy(() => import('../NextStep/NextStep'));
const CTOMessage = lazy(() => import('../CTOMessage/CTOMessage'));
const ProductsAndScale = lazy(() => import('../ProductsAndScale/ProductsAndScale'));
const VisionMission = lazy(() => import('../VisionMission/VisionMission'));
const CoreValues = lazy(() => import('../CoreValues/CoreValues'));
const ExpertiseGrid = lazy(() => import('../ExpertiseGrid/ExpertiseGrid'));
const LocationMap = lazy(() => import('../LocationMap/LocationMap'));
const FinalCTA = lazy(() => import('../cta/FinalCTA'));
const CrossIndustryCapabilities = lazy(() => import('../Industries/CrossIndustryCapabilities'));
const IndustryApproach = lazy(() => import('../Industries/IndustryApproach'));
const ServiceModels = lazy(() => import('../ServiceModels/ServiceModels'));
const ServiceCapabilities = lazy(() => import('../ServiceCapabilities/ServiceCapabilities'));
const ServiceProcess = lazy(() => import('../ServiceProcess/ServiceProcess'));
const TimelineProcess = lazy(() => import('../TimelineProcess/TimelineProcess'));
const BenefitList = lazy(() => import('../BenefitList/BenefitList'));
const BenefitGrid = lazy(() => import('../BenefitGrid/BenefitGrid'));
const EngagementModels = lazy(() => import('../EngagementModels/EngagementModels'));
const ProductDeliveryApproach = lazy(() => import('../ProductDeliveryApproach/ProductDeliveryApproach'));
const SplitContentSection = lazy(() => import('../SplitContentSection/SplitContentSection'));
const CoreServices = lazy(() => import('../CoreServices/CoreServices'));
const BusinessSolutions = lazy(() => import('../BusinessSolutions/BusinessSolutions'));
const StrategicApproach = lazy(() => import('../StrategicApproach/StrategicApproach'));
const CareerPositions = lazy(() => import('../CareerPositions/CareerPositions'));

/**
 * Component Mapper
 * Maps API "idForfrontendUse" to our existing local components
 */
const COMPONENT_MAP = {
    'AnimatedHeroSection': Hero,
    'ClientLogos': ClientLogos,
    'AboutUs': BenefitSection,
    'DevLifeCycle - 1': Features,
    'IndustriesWeWorkWith': Industries,
    'DetailedIndustriesWeWorkWith': DetailedIndustries,
    'EmpoweringBusiness': CustomerStories,
    'TechWeWorkWith': TechStack,
    'ReviewHome': ArticleCarousel,
    'WhyChooseCodeifyy': WhyChooseCodeifyy,
    'NextStep': NextStep,
    'CTOMessage': CTOMessage,
    'OutsourceServiceOverview-2': ProductsAndScale,
    'EmergingInnovation': WhyChooseCodeifyy, // Mapping this to WhyChooseCodeifyy style grid
    'VisionMission': VisionMission,
    'CoreValues': CoreValues,
    'ExpertiseGrid': ExpertiseGrid,
    'LocationMap': LocationMap,
    'FinalCTA': FinalCTA,
    'CrossIndustryCapabilities': CrossIndustryCapabilities,
    'IndustryApproach': IndustryApproach,
    ServiceModels: ServiceModels,
    'ServiceCapabilities': ServiceCapabilities,
    'ServiceProcess': ServiceProcess,
    'TimelineProcess': TimelineProcess,
    'BenefitList': BenefitList,
    'BenefitGrid': BenefitGrid,
    'EngagementModels': EngagementModels,
    'ProductDeliveryApproach': ProductDeliveryApproach,
    'SplitContentSection': SplitContentSection,
    'CoreServices': CoreServices,
    'BusinessSolutions': BusinessSolutions,
    'StrategicApproach': StrategicApproach,
    'CareerPositions': CareerPositions,
};

const SectionRenderer = ({ sections = [] }) => {
    if (!sections || sections.length === 0) return null;

    return (
        <Suspense fallback={null}>
            {sections
                .filter(section => section.status) // Only render active sections
                .sort((a, b) => parseInt(a.sortOrder) - parseInt(b.sortOrder)) // Sort by API order
                .map((section, index) => {
                    const Component = COMPONENT_MAP[section.idForfrontendUse];

                    if (!Component) {
                        console.warn(`Unmapped component ID: ${section.idForfrontendUse}`);
                        return null;
                    }

                    // Pass entire section data as props to the component
                    // Components will need to be updated to consume these dynamic props
                    return (
                        <div key={section.id || index} className={section.wrapperClass || ""}>
                            <Component
                                data={section}
                            />
                        </div>
                    );
                })
            }
        </Suspense>
    );
};

export default SectionRenderer;
