import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './../common/Input';

Enzyme.configure({ adapter: new Adapter() });

describe("Input()", () => {

    it('renders 1 <Input /> component', () => {
        const wrapper = mount(<Input />);
        expect(wrapper.find(Input)).toHaveLength(1);
      });
    
});