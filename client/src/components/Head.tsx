import { useEffect } from 'react';

interface HeadProps {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  canonical?: string;
}

export default function Head({ 
  title, 
  description, 
  keywords = [], 
  ogTitle, 
  ogDescription, 
  ogUrl, 
  canonical 
}: HeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (property: string, content: string, type: 'name' | 'property' = 'name') => {
      let meta = document.querySelector(`meta[${type}="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(type, property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Helper function to update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (link) {
        link.setAttribute('href', href);
      } else {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        link.setAttribute('href', href);
        document.head.appendChild(link);
      }
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords.length > 0) {
      updateMetaTag('keywords', keywords.join(', '));
    }

    // Open Graph tags
    updateMetaTag('og:title', ogTitle || title, 'property');
    updateMetaTag('og:description', ogDescription || description, 'property');
    updateMetaTag('og:type', 'website', 'property');
    if (ogUrl) {
      updateMetaTag('og:url', ogUrl, 'property');
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);

    // Canonical URL
    if (canonical) {
      updateLinkTag('canonical', canonical);
    }

    // JSON-LD structured data for calculators
    const existingJsonLd = document.querySelector('script[type="application/ld+json"]');
    if (existingJsonLd) {
      existingJsonLd.remove();
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": title,
      "description": description,
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "CalcHub Tools",
        "url": "https://calchubtools.com"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function to remove added elements when component unmounts
    return () => {
      // Note: We don't clean up meta tags here as they might be needed for other pages
      // The update logic handles overwriting existing tags
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogUrl, canonical]);

  return null; // This component only manages document head, renders nothing
}