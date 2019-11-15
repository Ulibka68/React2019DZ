import React from "react";
import {Col, Row} from 'reactstrap';

import ItemOneCustom from '../listWithDetails/itemOneCustom';
import ErrorMessage from "../errorMessage/errorMessage";
import dataIceAndFire from "../../services/getdata";



// Перечень props :
// getDataFuncList :   getDataFunc={dataIceAndFire.getCharacterPage}
// pageNum             pageNum="15"
// fieldListList       fieldList = "ID name gender"

// getDataFuncOne      getDataFunc={dataIceAndFire.getOneCharacter}
// fieldListOne        fieldList="Пол/gender/Born/born/Died/died/Culture/culture"
// nameFieldOne           nameField="name"


export default class RandomPage extends React.Component  {
    
    constructor (props) {
        super(props);

        this.timerId = null;
        this.timerId = setInterval( () => {this.updateCharacter();},10000);
    }

    state = {
        error : false,
        selectedChar : 25
    }

    updateCharacter() {
        let newCharNum = dataIceAndFire.getRandomCharacterNumber();
        if (! newCharNum) return;
        console.log('RandomPage == ',newCharNum);
        this.setState({selectedChar : newCharNum});
    }

    // получается типа деструктора - перед тем как компонент разрушится
    componentWillUnmount() {
        console.log('RandomPage componentWillUnmount');
        if (this.timerId != null ) {
            clearInterval(this.timerId);
            this.timerId = null;
       }
    }
    
    componentDidCatch() {
        console.log('CharacterPage error --------------');
        this.setState({error : true});
    }



    render () {

        if (this.state.error) {
            return <ErrorMessage />
        }
    
        // if (! this.props.showRandomChar ) return null;        

        return (

        <Row>
            <Col md='10'>
                <ItemOneCustom 
                    charID = {this.state.selectedChar}
                    getDataFunc={dataIceAndFire.getOneCharacter}
                    fieldList = "Пол/gender/Born/born/Died/died/Culture/culture"
                    nameField="name"
                    promtThenEmpty="случайный персонаж"
                    
                />
            </Col>
        </Row>
        );
    }

}