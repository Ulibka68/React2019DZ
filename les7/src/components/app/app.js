import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';

import ErrorMessage from "../errorMessage/errorMessage";
import dataIceAndFire from "../../services/getdata";
import CustomPage from "../listWithDetails/customPage";

import CharacterPage from "../characterPage/characterPage";

import RandomPage from "../randomChar/randomPage";
import  {BooksPage,HousesPage} from "../pages/pagesCall";

import {BrowserRouter as Router} from "react-router-dom";


class App extends React.Component {

    state = {
        showRandomChar : true,
        
        error : false
    }

    componentDidCatch() {
        console.log('error --------------');
        this.setState({error : true});
    }


    onClick= () => {
        this.setState( (oldState) => ({showRandomChar : ! oldState.showRandomChar}) );

    }

    onCharSelected = (ID) => {
        console.log('onCharSelected ',ID);
        this.setState({selectedChar : ID});
    }

render () {
    // console.log('app this.state.selectedChar : ',this.state.selectedChar);

    if (this.state.error) {
        return <ErrorMessage />
    }

    const styleDivider = {
        color: "blue",
        textAlign : "center",
        fontSize: "26px",
        backgroundColor : "lightGray",
        margin : "20px 0px",
        padding : "10px 7px"
      };

    return (
        <> 
            <Container>
                <Header click={this.onClick} showRandom = {this.state.showRandomChar} />
            </Container>
            <Container>
                {/* <Row> */}
                    {/* <Col lg={{size: 7, offset: 0}}> */}
                        {/* ---------// чтобы работал деструктор компонента нужно писать так */}
                        {/* ----------<RandomChar showRandom = {this.state.showRandomChar}/> */}
                        
                        {/* {this.state.showRandomChar ? <RandomChar showRandom /> : null} */}
                        
                    {/* </Col> */}
                {/* </Row> */}

                {this.state.showRandomChar ? <RandomPage /> : null }

                <Row>
                    <Col md='12'>
                        <span style={styleDivider}>ПЕРСОНАЖИ</span>
                    </Col>
                </Row>

                {/* пример страницы в которой используется High order component HOC  */}
                {/* <CharacterPageHOC /> */}

                <CharacterPage />

                {/* Этот варинат показывает персонажа на основе CustomPage */}
                {/* <CustomPage 
                    getDataFuncList = {dataIceAndFire.getCharacterPage}
                    pageNum="15"
                    fieldListList = "ID name gender"
                    getDataFuncOne = {dataIceAndFire.getOneCharacter}
                    fieldListOne = "Пол/gender/Born/born/Died/died/Culture/culture"
                    nameFieldOne = "name"
                />
                */}

                <Row>
                    <Col md='12'>
                        <span style={styleDivider}>КНИГИ</span>
                    </Col>
                </Row>



                <BooksPage />

                <Row>
                    <Col md='12'>
                        <span style={styleDivider}>ДОМА</span>
                    </Col>
                </Row>

                <HousesPage />
                
            </Container>
        </>
    );
};
}
export default App;