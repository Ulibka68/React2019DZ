import React from "react";
import RandomChar from "./randomChar";
import renderer from "react-test-renderer";


describe('Test <RandomChar>', () => {
    it('Random have rendered correctly', () => {
        const char  =renderer.create(<RandomChar showRandom />).toJSON();
        expect(char).toMatchSnapshot();
    })
}) 
