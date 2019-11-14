import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../errorMessage/errorMessage";
import dataIceAndFire from "../../services/getdata";
import CustomPage from "../listWithDetails/customPage";

import CharacterPage from "../characterPage/characterPage";

import f from '../itemListHOC/itemListHOC';

const ItmLSTHOC = f();

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
                <Row>
                    <Col lg={{size: 7, offset: 0}}>
                        {/* ---------// чтобы работал деструктор компонента нужно писать так */}
                        {/* ----------<RandomChar showRandom = {this.state.showRandomChar}/> */}
                        
                        {/* {this.state.showRandomChar ? <RandomChar showRandom /> : null} */}
                    </Col>
                </Row>


                <ItmLSTHOC />

                {/* <CharacterPage /> */}

                {/* Characters */}


                {/* <CustomPage 
                    getDataFuncList = {dataIceAndFire.getCharacterPage}
                    pageNum="15"
                    fieldListList = "ID name gender"
                    getDataFuncOne = {dataIceAndFire.getOneCharacter}
                    fieldListOne = "Пол/gender/Born/born/Died/died/Culture/culture"
                    nameFieldOne = "name"
                />
                */}

                {/* <Row>
                    <Col md='12'>
                        <span style={styleDivider}>КНИГИ</span>
                    </Col>
                </Row>


                <CustomPage 
                    getDataFuncList = {dataIceAndFire.getBooksPage}
                    pageNum="1"
                    fieldListList = "ID name authors"
                    getDataFuncOne = {dataIceAndFire.getOneBook}
                    fieldListOne = "Isbn/isbn/authors/authors/numberOfPages/numberOfPages"
                    nameFieldOne = "name"
                    promtThenEmpty = 'Пожалуйста, выберите книгу'
                />

                <Row>
                    <Col md='12'>
                        <span style={styleDivider}>ДОМА</span>
                    </Col>
                </Row>

                <CustomPage 
                    getDataFuncList = {dataIceAndFire.getHousesPage}
                    pageNum="1"
                    fieldListList = "ID name region"
                    getDataFuncOne = {dataIceAndFire.getOneHouse}
                    fieldListOne = "region/region/coatOfArms/coatOfArms/founder/founder"
                    nameFieldOne = "name"
                    promtThenEmpty = 'Пожалуйста, выберите дом'
                />  */}

            </Container>
        </>
    );
};
}
export default App;