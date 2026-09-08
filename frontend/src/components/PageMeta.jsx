import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalUrl, metadataForPath } from "../util/pageMeta";

function uniqueElement(selector, create) {
    const matches = Array.from(document.head.querySelectorAll(selector));
    const el = matches[0] || create();
    if (!matches[0]) {
        document.head.appendChild(el);
    }
    matches.slice(1).forEach((node) => node.remove());
    return el;
}

function setMeta(attr, key, content) {
    const el = uniqueElement(`meta[${attr}="${key}"]`, () => {
        const meta = document.createElement("meta");
        meta.setAttribute(attr, key);
        return meta;
    });
    el.setAttribute("content", content);
}

function setCanonical(href) {
    const el = uniqueElement('link[rel="canonical"]', () => {
        const link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        return link;
    });
    el.setAttribute("href", href);
}

function PageMeta() {
    const { pathname } = useLocation();

    useEffect(() => {
        const meta = metadataForPath(pathname);
        const url = canonicalUrl(pathname);

        document.title = meta.title;
        setMeta("name", "description", meta.description);
        setMeta("property", "og:title", meta.title);
        setMeta("property", "og:description", meta.description);
        setMeta("property", "og:url", url);
        setMeta("name", "twitter:title", meta.title);
        setMeta("name", "twitter:description", meta.description);
        setCanonical(url);
    }, [pathname]);

    return null;
}

export default PageMeta;
