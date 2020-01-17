import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { H1 } from '../common/Headings';

Enzyme.configure({ adapter: new Adapter() });

describe("h1()", () => {
    it("has a title and description", () => {
        const title = "page title";
        const children = "page description"
        const wrapper = shallow(<H1 title={title}>{children}</H1>);
        expect(wrapper.length).toEqual(1);
        expect(
            wrapper.contains(
                <>
                     <h1 className="display-4 text-center">{title}</h1>
                    <p className="lead text-center">{children}</p>
                </>
            )
        ).toEqual(true);
    });
})