import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, meteFields = [], googleScripts = [] }) => {
    const baseUrl = 'https://codeifyy.com';
    const fallbackCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

    // Map meteFields to meta tags
    // The API sends an array like [{ key: 'og:title', value: '...' }, ...]
    const dynamicMeta = meteFields.map(field => {
        if (field.key === 'title') return null; // Title is handled separately
        return (
            <meta key={field.id} name={field.key} property={field.key} content={field.value} />
        );
    }).filter(Boolean);

    // Get title from meta fields or fallback to prop
    const dynamicTitle = meteFields.find(f => f.key === 'title')?.value || title;

    return (
        <Helmet>
            {dynamicTitle && <title>{dynamicTitle}</title>}
            {description && <meta name="description" content={description} />}
            <link rel="canonical" href={fallbackCanonical} />

            {dynamicMeta}

            {/* Inject External Scripts (Schema, GTM, etc.) */}
            {googleScripts.map(script => (
                <script key={script.id} type="application/ld+json">
                    {/* Note: If the script is already wrapped in <script> tags in the API, 
                        we might need to strip them or use a different component.
                        For now, assuming it's raw JSON-LD as per your sample.
                    */}
                    {script.value.replace(/<\/?[^>]+(>|$)/g, "")}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
