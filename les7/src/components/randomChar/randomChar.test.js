import React from "react";
import RandomChar from "./randomChar";
import {shallow} from "enzyme";


describe('Test <RandomChar>', () => {

    const char  =shallow(<RandomChar showRandom />);

    describe ('Test snapshot && state',() => {

    
        it('Random have rendered correctly', () => {
            expect(char).toMatchSnapshot();
        });
    
        // тест на props
        // it('Should render a title', () => {
        //     const wrapper = shallow(<Document title = 'Some title' />);
        //     expect (wrapper.prop('title')).toEqual('Some title');
        // });
    
        // тест на state
        it('Randomchar state char is empty', () => {
            expect(char.state().char).toBeObject();
        });
        
        it('Randomchar state loading', () => {
            expect(char.state().loading).toBeTruthy();
        });
        
        it('Randomchar state error', () => {
            expect(char.state().error).toBeFalsy();
        });
    });


    describe('Handlers tests', () => {
        it('onCharLoaded',() => {
            // на экземпляре компонента вызвать функцию
            char.instance().onCharLoaded();
            expect(char.state().loading).toBeFalsy();
        });
        // it('onError',() => {
            
        //     char.instance().onError();
        //     expect(char.state().loading).toBeFalsy();
        //     expect(char.state().error).toBeTruthy();
        // });
    });
}) 
