import React from "react";
import {Col, Row} from 'reactstrap';
import ItemListHOC from '../itemListHOC/itemListHOC';

import ErrorMessage from "../errorMessage/errorMessage";
import  CharDetails,{Field} from "../charDetails/charDetails";


export default class CharacterPageHOC extends React.Component  {
    
    state = {
        selectedChar : null,
        error : false
    }

    componentDidCatch() {
        console.log('CharacterPage error --------------');
        this.setState({error : true});
    }


    onItemSelected = (ID) => {
        this.setState({selectedChar : ID});
    }

    render () {

        if (this.state.error) {
            return <ErrorMessage />
        }
    
        return (
            <Row>
                <Col md='6'>
                    <ItemListHOC onItemSelected={this.onItemSelected}/>
                </Col>
                <Col md='6'>
                    <CharDetails charID = {this.state.selectedChar}>
                        <Field field = 'gender' label = 'Пол' />
                        <Field field = 'born' label = 'Born' />
                        <Field field = 'died' label = 'Died' />
                        <Field field = 'culture' label = 'Culture' />
                        
                    </CharDetails>
                </Col>
            </Row>
        );
    }

}