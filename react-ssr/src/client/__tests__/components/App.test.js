import React from 'react';
import { mount } from 'enzyme';
import App from '../../components/App';

describe('App', () => {
    let wrapper;

    it('renders without error', () => {
        wrapper = mount(<App />);
        expect(wrapper.length).toBe(1);
    });
});
