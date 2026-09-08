export const SITE_ORIGIN = "https://biosensors.ucsd.edu";

export const DEFAULT_DESCRIPTION =
    "The UC San Diego Biosensor Core provides consultation, training, quantitative imaging and analysis, biosensor characterization, and custom biosensor development for academic and commercial investigators.";

export const PAGE_META = {
    "/": {
        title: "UC San Diego Biosensor Core",
        description: DEFAULT_DESCRIPTION
    },
    "/about": {
        title: "About | UC San Diego Biosensor Core",
        description: "Learn about the UC San Diego Biosensor Core and its support for rigorous use, characterization, imaging, and development of genetically encoded biosensors and related optical tools."
    },
    "/people": {
        title: "People | UC San Diego Biosensor Core",
        description: "Meet the leadership, staff, and Scientific Advisory Board of the UC San Diego Biosensor Core."
    },
    "/rates": {
        title: "Services & Rates | UC San Diego Biosensor Core",
        description: "Services, rates, and typical project planning ranges for biosensor consultation, imaging and analysis, characterization, molecular biology, and custom biosensor development."
    },
    "/collections": {
        title: "Biosensor Collection | UC San Diego Biosensor Core",
        description: "Explore biosensor and optical-tool categories maintained, developed, or supported by the UC San Diego Biosensor Core."
    },
    "/resources": {
        title: "Resources | UC San Diego Biosensor Core",
        description: "Links to biosensor, fluorescent protein, bioluminescence, imaging, and related scientific resources from the UC San Diego Biosensor Core."
    },
    "/gallery": {
        title: "Gallery | UC San Diego Biosensor Core",
        description: "Videos from the UC San Diego Biosensor Core showing biosensor imaging and related optical tools and applications."
    },
    "/contact": {
        title: "Contact | UC San Diego Biosensor Core",
        description: "Contact the UC San Diego Biosensor Core to discuss biosensor selection, imaging and analysis, characterization, or biosensor development."
    }
};

export function canonicalUrl(pathname) {
    const path = pathname.replace(/\/+$/, "") || "/";
    return path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
}

export function metadataForPath(pathname) {
    const path = pathname.replace(/\/+$/, "") || "/";
    return PAGE_META[path] || PAGE_META["/"];
}
