import React from "react";
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

export default class CharacterPage extends React.Component  {
    
    state = {
        selectedChar : null
    }

    onCharSelected = (ID) => {
        this.setState({selectedChar : ID});
    }

    render () {
    
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