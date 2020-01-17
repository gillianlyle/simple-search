import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Input, PrimaryButton } from '../common/InputControls';

Enzyme.configure({ adapter: new Adapter() });

describe("Input()", () => {

    it('renders 1 <Input /> component', () => {
        const wrapper = mount(<Input />);
        expect(wrapper.find(Input)).toHaveLength(1);
      });
    
});

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