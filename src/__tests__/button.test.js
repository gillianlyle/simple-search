import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PrimaryButton } from '../common/Button';

Enzyme.configure({ adapter: new Adapter() });


describe("Button()", () => {
    
    it("renders submit button", () => {
        const defaultProps = {
            type:'submit',
            children:'Search',

        }

        const wrapper = mount(
            <PrimaryButton {...defaultProps} />
        );
        expect(wrapper.find(PrimaryButton).prop('type')).toBe('submit');
        expect(wrapper.find(PrimaryButton).prop('children')).toBe('Search');
    })

    
})