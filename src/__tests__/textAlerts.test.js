import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AlertDanger, AlertWarning, AlertInfo } from '../common/TextAlerts';

Enzyme.configure({ adapter: new Adapter() });

describe("AlertDanger()", () => {
    it("has class name 'alert-danger", () => {
        const wrapper = shallow(<AlertDanger />);
        expect(wrapper.length).toEqual(1);
        expect(
            wrapper.contains(
                <div className="alert alert-danger" role="alert"></div>
            )
        ).toEqual(true);
    });
})

describe("AlertWarning()", () => {
    it("has class name 'alert-danger", () => {
        const wrapper = shallow(<AlertWarning />);
        expect(wrapper.length).toEqual(1);
        expect(
            wrapper.contains(
                <div className="alert alert-warning" role="alert"></div>
            )
        ).toEqual(true);
    });
})

describe("AlertInfo()", () => {
    it("has class name 'alert-danger", () => {
        const wrapper = shallow(<AlertInfo />);
        expect(wrapper.length).toEqual(1);
        expect(
            wrapper.contains(
                <div className="alert alert-info" role="alert"></div>
            )
        ).toEqual(true);
    });
})