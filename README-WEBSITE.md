# Codeifyy Website — Architecture & Developer Guide

> **Last Updated:** March 2026  
> This document explains the complete structure of the Codeifyy website, how pages are rendered, which files are actively used, and which files are deprecated/legacy.

---

## 📖 Table of Contents

1. [Tech Stack](#-tech-stack)
2. [Project Structure Overview](#-project-structure-overview)
3. [How the Website Works — The Full Flow](#-how-the-website-works--the-full-flow)
4. [Key Files Explained](#-key-files-explained)
5. [Component Map — What Renders What](#-component-map--what-renders-what)
6. [Pages Content Data (pagesContent.js)](#-pages-content-data-pagescontentjs)
7. [How to Add a New Page](#-how-to-add-a-new-page)
8. [How to Add a New Section to a Page](#-how-to-add-a-new-section-to-a-page)
9. [File Status — NEEDED vs DEPRECATED](#-file-status--needed-vs-deprecated)
10. [CSS Files — What Still Matters](#-css-files--what-still-matters)
11. [Special Pages (Non-Dynamic)](#-special-pages-non-dynamic)

---

## ⚙️ Tech Stack

| Technology | Purpose |
|---|---|
| **React + Vite** | Frontend framework & build tool |
| **React Router v6** | Client-side routing |
| **React Icons** | Icon library (`react-icons/fa`) |
| **Vanilla CSS** | All custom styling (no Tailwind) |
| **Lazy Loading** | All pages and components are lazy-loaded for performance |

---

## 📂 Project Structure Overview

```
e:\codeifyy-website\
├── public/
├── src/
│   ├── App.jsx                  ← Route definitions
│   ├── main.jsx                 ← React entry point
│   ├── index.css                ← Global styles
│   │
│   ├── pages/                   ← Page-level files
│   │   ├── index.jsx            ← ★ THE UNIVERSAL DYNAMIC PAGE (CRITICAL)
│   │   ├── Home/
│   │   │   └── Home.jsx         ← ★ Active (Home page only)
│   │   ├── Blogs/               ← ★ Active
│   │   ├── CaseStudies/         ← ★ Active
│   │   ├── Contact/             ← ★ Active
│   │   ├── Career/              ← ★ Active
│   │   ├── Legal/               ← ★ Active (Privacy Policy, Terms)
│   │   ├── About/               ← ⚠️ JSX deprecated, CSS still used
│   │   ├── Industries/          ← ⚠️ JSX deprecated, CSS still used
│   │   └── Services/            ← ⚠️ All JSX deprecated, CSS still used
│   │
│   ├── components/              ← ★ All reusable UI components (ACTIVE)
│   │   ├── SectionRenderer/     ← ★ CRITICAL — maps IDs to components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── BenefitSection/
│   │   ├── CoreServices/
│   │   ├── BusinessSolutions/
│   │   ├── StrategicApproach/
│   │   ├── ServiceCapabilities/
│   │   ├── ServiceModels/
│   │   ├── ServiceProcess/
│   │   ├── EngagementModels/
│   │   ├── TimelineProcess/
│   │   ├── BenefitList/
│   │   ├── BenefitGrid/
│   │   ├── SplitContentSection/
│   │   ├── ProductDeliveryApproach/
│   │   ├── WhyChooseCodeifyy/
│   │   ├── TechStack/
│   │   ├── Industries/
│   │   ├── CustomerStories/
│   │   ├── ArticleCarousel/
│   │   ├── ClientLogos/
│   │   ├── FAQ/
│   │   ├── SEO/
│   │   ├── cta/
│   │   └── ...more
│   │
│   └── data/
│       ├── pagesContent.js      ← ★ CRITICAL — all page content lives here
│       └── caseStudies.js       ← Case study data
```

---

## 🔄 How the Website Works — The Full Flow

The website uses a **data-driven, component-based architecture**. There is **one universal page renderer** that handles almost all pages.

### Step-by-Step Flow

```
1. User visits a URL (e.g., /services/staff-augmentation)
         ↓
2. App.jsx matches the route → loads <DynamicPage /> (pages/index.jsx)
         ↓
3. DynamicPage reads the URL slug → "staff-augmentation"
         ↓
4. Looks up pagesContent["staff-augmentation"] in data/pagesContent.js
         ↓
5. Gets a sections[] array from the data
         ↓
6. Passes sections to <SectionRenderer />
         ↓
7. SectionRenderer loops through each section object
         ↓
8. Finds the matching component using the section's "idForfrontendUse" field
         ↓
9. Renders the component and passes the section's data as props
         ↓
10. The component displays the content on screen
```

### Visual Diagram

```
URL Slug
   │
   ▼
pagesContent.js ──► sections array
                          │
                          ▼
                   SectionRenderer.jsx
                          │
                    ┌─────┴──────┐
                    │            │
              section[0]    section[1] ...
           idForfrontendUse  idForfrontendUse
                    │
                    ▼
            COMPONENT_MAP lookup
                    │
                    ▼
         <ActualComponent data={section} />
```

---

## 📄 Key Files Explained

### 1. `src/App.jsx` — Route Definitions

Defines which URLs map to which page component.

```jsx
// Most routes go to DynamicPage
<Route path="/about"            element={<DynamicPage />} />
<Route path="/services"         element={<DynamicPage />} />
<Route path="/services/:slug"   element={<DynamicPage />} />
<Route path="/industries"       element={<DynamicPage />} />
<Route path="/:slug"            element={<DynamicPage />} />

// Special standalone pages
<Route path="/"                 element={<Home />} />
<Route path="/blog"             element={<BlogList />} />
<Route path="/contact"          element={<Contact />} />
<Route path="/career"           element={<Career />} />
```

---

### 2. `src/pages/index.jsx` — The Universal DynamicPage ⭐ CRITICAL

This is the **single most important file** for all dynamic pages. It:
- Reads the URL slug using `useParams()`
- Looks up `pagesContent[slug]`  
- Renders `<Header />`, `<SectionRenderer />`, `<Footer />`
- If no data found → redirects to `/`

**DO NOT DELETE OR MODIFY THIS FILE without understanding the impact.**

---

### 3. `src/data/pagesContent.js` — The Content Brain ⭐ CRITICAL

This is where **all page content lives**. Every page that uses `DynamicPage` has an entry here.

Currently defined pages:
| Key (slug) | Page URL |
|---|---|
| `about` | `/about` |
| `services` | `/services` |
| `industries` | `/industries` |
| `product-development` | `/services/product-development` |
| `staff-augmentation` | `/services/staff-augmentation` |
| `artificial-intelligence` | `/services/artificial-intelligence` |
| `software-development` | `/services/software-development` |
| `partnerships` | `/partnerships` |

Each entry has:
```js
'your-slug': {
    title: "SEO Page Title",
    description: "Meta description",
    canonical: "/your-slug",
    sections: [
        {
            idForfrontendUse: 'ComponentName', // Must match COMPONENT_MAP key
            status: true,                       // true = visible, false = hidden
            sortOrder: 1,                       // Controls order on page
            // ... any extra props the component needs
        }
    ]
}
```

---

### 4. `src/components/SectionRenderer/SectionRenderer.jsx` ⭐ CRITICAL

The **routing engine for sections**. It contains a `COMPONENT_MAP` that links string IDs to actual React components:

```js
const COMPONENT_MAP = {
    'AnimatedHeroSection'    : Hero,
    'ClientLogos'            : ClientLogos,
    'AboutUs'                : BenefitSection,
    'CoreServices'           : CoreServices,
    'BusinessSolutions'      : BusinessSolutions,
    'StrategicApproach'      : StrategicApproach,
    'ServiceCapabilities'    : ServiceCapabilities,
    'ServiceProcess'         : ServiceProcess,
    'ServiceModels'          : ServiceModels,
    'TimelineProcess'        : TimelineProcess,
    'EngagementModels'       : EngagementModels,
    'BenefitList'            : BenefitList,
    'BenefitGrid'            : BenefitGrid,
    'SplitContentSection'    : SplitContentSection,
    'ProductDeliveryApproach': ProductDeliveryApproach,
    'WhyChooseCodeifyy'      : WhyChooseCodeifyy,
    'IndustriesWeWorkWith'   : Industries,
    'TechWeWorkWith'         : TechStack,
    'ReviewHome'             : ArticleCarousel,
    'EmpoweringBusiness'     : CustomerStories,
    'VisionMission'          : VisionMission,
    'CoreValues'             : CoreValues,
    'ExpertiseGrid'          : ExpertiseGrid,
    'LocationMap'            : LocationMap,
    'FinalCTA'               : FinalCTA,
    'CrossIndustryCapabilities': CrossIndustryCapabilities,
    'IndustryApproach'       : IndustryApproach,
    'NextStep'               : NextStep,
    'CTOMessage'             : CTOMessage,
    // ...
};
```

> ⚠️ If an `idForfrontendUse` in `pagesContent.js` does NOT match a key in `COMPONENT_MAP`, the section **will not render** and a console warning appears.

---

## 🧩 Component Map — What Renders What

| `idForfrontendUse` (in pagesContent.js) | Actual Component File | Purpose |
|---|---|---|
| `AnimatedHeroSection` | `Hero/Hero.jsx` | Page hero with animated code graphic |
| `ClientLogos` | `ClientLogos/ClientLogos.jsx` | Scrolling client logo strip |
| `AboutUs` | `BenefitSection/BenefitSection.jsx` | Stats + features two-column section |
| `CoreServices` | `CoreServices/CoreServices.jsx` | Service cards grid |
| `BusinessSolutions` | `BusinessSolutions/BusinessSolutions.jsx` | Business solution cards |
| `StrategicApproach` | `StrategicApproach/StrategicApproach.jsx` | Numbered approach steps |
| `ServiceCapabilities` | `ServiceCapabilities/ServiceCapabilities.jsx` | Detailed service model cards |
| `ServiceProcess` | `ServiceProcess/ServiceProcess.jsx` | Step process flow |
| `ServiceModels` | `ServiceModels/ServiceModels.jsx` | Engagement model cards |
| `TimelineProcess` | `TimelineProcess/TimelineProcess.jsx` | Timeline-style steps |
| `EngagementModels` | `EngagementModels/EngagementModels.jsx` | Engagement model options |
| `BenefitList` | `BenefitList/BenefitList.jsx` | Bullet list of benefits |
| `BenefitGrid` | `BenefitGrid/BenefitGrid.jsx` | Grid of benefit items |
| `SplitContentSection` | `SplitContentSection/SplitContentSection.jsx` | Left/right split content |
| `ProductDeliveryApproach` | `ProductDeliveryApproach/ProductDeliveryApproach.jsx` | Delivery approach section |
| `WhyChooseCodeifyy` | `WhyChooseCodeifyy/WhyChooseCodeifyy.jsx` | Feature grid cards |
| `IndustriesWeWorkWith` | `Industries/Industries.jsx` | Industries tab/card selector |
| `TechWeWorkWith` | `TechStack/TechStack.jsx` | Tech stack icons |
| `ReviewHome` | `ArticleCarousel/ArticleCarousel.jsx` | Testimonials / reviews |
| `EmpoweringBusiness` | `CustomerStories/CustomerStories.jsx` | Case study previews |
| `VisionMission` | `VisionMission/VisionMission.jsx` | Vision & Mission cards |
| `CoreValues` | `CoreValues/CoreValues.jsx` | Company values grid |
| `ExpertiseGrid` | `ExpertiseGrid/ExpertiseGrid.jsx` | Skills/expertise grid |
| `LocationMap` | `LocationMap/LocationMap.jsx` | Office location & map |
| `FinalCTA` | `cta/FinalCTA.jsx` | Call-to-action banner |
| `CrossIndustryCapabilities` | `Industries/CrossIndustryCapabilities.jsx` | Cross-industry features |
| `IndustryApproach` | `Industries/IndustryApproach.jsx` | Industry methodology |
| `NextStep` | `NextStep/NextStep.jsx` | Next steps CTA section |
| `CTOMessage` | `CTOMessage/CTOMessage.jsx` | CTO quote/message |

---

## 📦 Pages Content Data (`pagesContent.js`)

To control pages, **you only need to edit this one file**.

### Turning a section ON/OFF
```js
{
    idForfrontendUse: 'ClientLogos',
    status: true,   // ← true = visible | false = hidden
    sortOrder: 2
}
```

### Changing section order
Change the `sortOrder` number. Lower number = appears higher on the page.

### Passing content to a section
Each component reads data from the `data` prop it receives. For example:
```js
{
    idForfrontendUse: 'FinalCTA',
    status: true,
    sortOrder: 11,
    title: 'Ready to Build Something Scalable?',   // ← component reads this
    description: 'Your description here.',
    ctaText: 'Speak with an Expert',
    ctaLink: '/contact'
}
```

---

## ➕ How to Add a New Page

1. **Open** `src/data/pagesContent.js`
2. **Add a new key** matching the URL slug you want:
```js
'my-new-page': {
    title: "SEO Title for My New Page | Codeifyy",
    description: "Meta description for SEO.",
    canonical: "/my-new-page",
    sections: [
        {
            idForfrontendUse: 'AnimatedHeroSection',
            status: true,
            sortOrder: 1,
            title: 'My Hero Title',
            description: 'Hero description here.',
            ctaText: 'Get Started',
            ctaLink: '/contact',
        },
        {
            idForfrontendUse: 'FinalCTA',
            status: true,
            sortOrder: 2,
            title: 'Ready?',
            description: 'Contact us today.',
            ctaText: 'Contact',
            ctaLink: '/contact'
        }
    ]
}
```
3. **Visit** `http://localhost:5173/my-new-page` — it works automatically!

> No need to create a new JSX file. No need to add a route in `App.jsx` (the `/:slug` wildcard route catches it).

---

## ➕ How to Add a New Section to a Page

1. **Choose a component** from the Component Map table above
2. **Open** `src/data/pagesContent.js`
3. **Add a new object** to the `sections[]` array of the page you want:
```js
{
    idForfrontendUse: 'WhyChooseCodeifyy',  // must match COMPONENT_MAP key
    status: true,
    sortOrder: 5,                            // position on the page
    // add any data this component needs
}
```
4. Adjust `sortOrder` values of other sections as needed.

---

## ✅ / ❌ File Status — NEEDED vs DEPRECATED

### `src/pages/` — Page Files

| File | Status | Reason |
|---|---|---|
| `pages/index.jsx` | ✅ **NEEDED — CRITICAL** | The universal DynamicPage used for all dynamic routes |
| `pages/Home/Home.jsx` | ✅ **NEEDED** | The home page (`/`) is a standalone component |
| `pages/Blogs/BlogList.jsx` | ✅ **NEEDED** | Blog listing page |
| `pages/Blogs/BlogDetails.jsx` | ✅ **NEEDED** | Individual blog post page |
| `pages/CaseStudies/CaseStudyList.jsx` | ✅ **NEEDED** | Case study listing |
| `pages/CaseStudies/CaseStudyDetails.jsx` | ✅ **NEEDED** | Individual case study |
| `pages/Contact/Contact.jsx` | ✅ **NEEDED** | Contact form page |
| `pages/Career/Career.jsx` | ✅ **NEEDED** | Career/jobs page |
| `pages/Legal/PrivacyPolicy.jsx` | ✅ **NEEDED** | Privacy policy page |
| `pages/Legal/TermsOfUse.jsx` | ✅ **NEEDED** | Terms of use page |
| `pages/About/About.jsx` | ❌ **DEPRECATED** | All code commented out. DynamicPage handles `/about` |
| `pages/Industries/Industries.jsx` | ❌ **DEPRECATED** | All code commented out. DynamicPage handles `/industries` |
| `pages/Services/Services.jsx` | ❌ **DEPRECATED** | All code commented out. DynamicPage handles `/services` |
| `pages/Services/SoftwareDevelopment.jsx` | ❌ **DEPRECATED** | DynamicPage handles `/services/software-development` |
| `pages/Services/AI.jsx` | ❌ **DEPRECATED** | DynamicPage handles `/services/artificial-intelligence` |
| `pages/Services/StaffAugmentation.jsx` | ❌ **DEPRECATED** | DynamicPage handles `/services/staff-augmentation` |
| `pages/Services/ProductDevelopment.jsx` | ❌ **DEPRECATED** | DynamicPage handles `/services/product-development` |
| `pages/DynamicPage/` | ⚠️ **Check if empty** | May be an older version of `pages/index.jsx` |
| `pages/Partnerships/` | ⚠️ **Check** | Likely handled by DynamicPage |

### `src/components/` — Component Files

| Folder | Status | Notes |
|---|---|---|
| `SectionRenderer/` | ✅ **NEEDED — CRITICAL** | Core rendering engine |
| `Header/` | ✅ **NEEDED** | Used on all pages |
| `Footer/` | ✅ **NEEDED** | Used on all pages |
| `SEO/` | ✅ **NEEDED** | All pages use it |
| `Hero/` | ✅ **NEEDED** | Used for `AnimatedHeroSection` |
| `BenefitSection/` | ✅ **NEEDED** | Used for `AboutUs` sections |
| `CoreServices/` | ✅ **NEEDED** | Services page |
| `BusinessSolutions/` | ✅ **NEEDED** | Services page |
| `StrategicApproach/` | ✅ **NEEDED** | Services page |
| `ServiceCapabilities/` | ✅ **NEEDED** | Sub-service pages |
| `ServiceModels/` | ✅ **NEEDED** | Sub-service pages |
| `ServiceProcess/` | ✅ **NEEDED** | Sub-service pages |
| `EngagementModels/` | ✅ **NEEDED** | Staff Augmentation page |
| `TimelineProcess/` | ✅ **NEEDED** | Sub-service pages |
| `BenefitList/` | ✅ **NEEDED** | Sub-service pages |
| `BenefitGrid/` | ✅ **NEEDED** | Sub-service pages |
| `SplitContentSection/` | ✅ **NEEDED** | Sub-service pages |
| `ProductDeliveryApproach/` | ✅ **NEEDED** | Product Development page |
| `WhyChooseCodeifyy/` | ✅ **NEEDED** | Multiple pages |
| `TechStack/` | ✅ **NEEDED** | About + Services pages |
| `Industries/` | ✅ **NEEDED** | 3 components inside |
| `CustomerStories/` | ✅ **NEEDED** | Multiple pages |
| `ArticleCarousel/` | ✅ **NEEDED** | Reviews/testimonials |
| `ClientLogos/` | ✅ **NEEDED** | Most pages |
| `VisionMission/` | ✅ **NEEDED** | About page |
| `CoreValues/` | ✅ **NEEDED** | About page |
| `ExpertiseGrid/` | ✅ **NEEDED** | About page |
| `LocationMap/` | ✅ **NEEDED** | About page |
| `NextStep/` | ✅ **NEEDED** | Some pages |
| `CTOMessage/` | ✅ **NEEDED** | Some pages |
| `ProductsAndScale/` | ✅ **NEEDED** | About/Services |
| `cta/` | ✅ **NEEDED** | FinalCTA used on all pages |
| `ContactForm/` | ✅ **NEEDED** | Contact page |
| `Blog/` | ✅ **NEEDED** | Blog pages |
| `ScrollToTop.jsx` | ✅ **NEEDED** | Scroll utility |
| `LoadingBar/` | ✅ **NEEDED** | Page transition bar |
| `FAQ/` | ⚠️ **Check** | May be unused — verify in pagesContent.js |
| `Features/` | ⚠️ **Check** | `Features-services.jsx` — check if in COMPONENT_MAP |

### `src/data/` — Data Files

| File | Status | Notes |
|---|---|---|
| `pagesContent.js` | ✅ **NEEDED — CRITICAL** | All dynamic page content |
| `caseStudies.js` | ✅ **NEEDED** | Case study data for CaseStudy pages |

---

## 🎨 CSS Files — What Still Matters

Even though the old `.jsx` page files are deprecated, their **CSS files are still imported** in `pages/index.jsx`:

```js
// Lines 10-17 in pages/index.jsx
import './About/About.css';
import './Services/Services.css';
import './Services/StaffAugmentation.css';
import './Industries/Industries.css';
import './Services/SoftwareDevelopment.css';
import './Services/AI.css';
import './Services/ProductDevelopment.css';
```

These CSS files **still apply styles** to the components rendered by the DynamicPage. **Do NOT delete these CSS files** unless you have moved all the styles elsewhere.

| CSS File | Still Needed? | Why |
|---|---|---|
| `pages/About/About.css` | ✅ Yes | Styles for the `about-page` class + component styles |
| `pages/Services/Services.css` | ✅ Yes | Styles for service sections |
| `pages/Services/StaffAugmentation.css` | ✅ Yes | Staff augmentation page styles |
| `pages/Services/SoftwareDevelopment.css` | ✅ Yes | Software development page styles |
| `pages/Services/AI.css` | ✅ Yes | AI page styles |
| `pages/Services/ProductDevelopment.css` | ✅ Yes | Product development page styles |
| `pages/Industries/Industries.css` | ✅ Yes | Industries page styles |

---

## 🌐 Special Pages (Non-Dynamic)

These pages have their **own standalone JSX files** and are NOT part of the `DynamicPage` / `pagesContent.js` system:

| Page | Route | File | Notes |
|---|---|---|---|
| Home | `/` | `pages/Home/Home.jsx` | Has its own component-based layout |
| Blog List | `/blog` | `pages/Blogs/BlogList.jsx` | Fetches blog data |
| Blog Post | `/blog/:slug` | `pages/Blogs/BlogDetails.jsx` | Single post view |
| Case Study List | `/casestudy` | `pages/CaseStudies/CaseStudyList.jsx` | Uses `caseStudies.js` data |
| Case Study Post | `/casestudy/:slug` | `pages/CaseStudies/CaseStudyDetails.jsx` | Single case study |
| Contact | `/contact` | `pages/Contact/Contact.jsx` | Contact form |
| Career | `/career` | `pages/Career/Career.jsx` | Job listings |
| Privacy Policy | `/privacy-policy` | `pages/Legal/PrivacyPolicy.jsx` | Static content |
| Terms of Use | `/terms-of-use` | `pages/Legal/TermsOfUse.jsx` | Static content |

---

## 🚀 Quick Reference

### To change content on any dynamic page:
→ Edit `src/data/pagesContent.js`

### To hide a section on a page:
→ Set `status: false` on the section in `pagesContent.js`

### To add a brand new component type:
1. Create the component in `src/components/YourComponent/`
2. Import it in `SectionRenderer.jsx`
3. Add it to the `COMPONENT_MAP` with a unique key
4. Use that key as `idForfrontendUse` in `pagesContent.js`

### To delete old legacy JSX page files (safe):
→ Only delete if all code is commented out (About.jsx, Industries.jsx, Services/*.jsx)
→ **Keep their `.css` files** OR move those styles to component-level CSS files first
→ Remove the corresponding `import` line from `pages/index.jsx`

---

*Built by the Codeifyy team — Component-driven, data-powered architecture.*
