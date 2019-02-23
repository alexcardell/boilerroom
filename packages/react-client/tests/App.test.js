import React from 'react';
import { mount } from 'enzyme';

import App from '../src/App';

describe('App', () => {
    it('runs smoke tests', () => {});

    it('runs enzyme successfully', () => {
        expect(
            mount(<App />)
                .find('h1')
                .text()
        ).toContain('React');
    });
});
