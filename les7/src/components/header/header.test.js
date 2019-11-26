import React from "react";
import Header from "./header";

// import renderer from "react-test-renderer";
import {shallow} from "enzyme";


describe('Test <Header>', () => {
    it('Header have rendered correctly', () => {
        const header  = shallow(<Header  />);
        expect(header).toMatchSnapshot();
    })
}) 