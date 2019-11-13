import React from "react";
import {Col, Row} from 'reactstrap';
import ItemListCustom from './itemListCustom';
import ItemOneCustom from './itemOneCustom';
import ErrorMessage from "../errorMessage/errorMessage";

export default class CustomPage extends React.Component  {
    
    state = {
        selectedChar : null,
        error : false
    }

    componentDidCatch() {
        console.log('CharacterPage error --------------');
        this.setState({error : true});
    }


    onCharSelected = (ID) => {
        this.setState({selectedChar : ID});
    }

    render () {

        if (this.state.error) {
            return <ErrorMessage />
        }
    
        return (
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected}/>
                </Col>
                <Col md='6'>
                    <CharDetails charID = {this.state.selectedChar}/>
                </Col>
            </Row>
        );
    }

}