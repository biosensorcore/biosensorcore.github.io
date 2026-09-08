import { canonicalUrl, metadataForPath, PAGE_META } from './util/pageMeta';

test('builds production canonical URLs', () => {
    expect(canonicalUrl('/')).toBe('https://biosensors.ucsd.edu/');
    expect(canonicalUrl('/about')).toBe('https://biosensors.ucsd.edu/about');
    expect(canonicalUrl('/rates/')).toBe('https://biosensors.ucsd.edu/rates');
});

test('covers every public route', () => {
    const routes = ['/', '/about', '/people', '/rates', '/collections', '/resources', '/gallery', '/contact'];
    routes.forEach((path) => {
        expect(metadataForPath(path).title).toBe(PAGE_META[path].title);
        expect(metadataForPath(path).description).toBe(PAGE_META[path].description);
    });
});
