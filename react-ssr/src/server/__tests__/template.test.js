import template from '../template';

describe('template', () => {
    const templateStrip = input => template(input).replace(/\n|\r/g, '');

    it('returns templated html', () => {
        const input = '<h1>hello world</h1>';
        expect(templateStrip(input).includes(`>${input}<`)).toBe(true);
    });

    it('contains an app div', () => {
        expect(templateStrip('').includes('<div id="app"'));
    });

    it('contains the bundle script tag', () => {
        expect(templateStrip('').includes('<script src="./bundle.js"'));
    });
});
