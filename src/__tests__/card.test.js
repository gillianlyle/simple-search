import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './../common/Card';

Enzyme.configure({ adapter: new Adapter() });

describe("Card()", () => {
    it("renders correctly", () => {
        const id = "1";
        const avatar_url = "http://avatarurl.com";
        const login = "username";
        const html_url = "http://htmlurl.com";
        const score = "1";
        const card = "width:1rem";
        const wrapper = shallow(<Card />);

        expect(wrapper.length).toEqual(1);
        
    });
})