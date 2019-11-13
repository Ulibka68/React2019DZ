import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../errorMessage/errorMessage";
import dataIceAndFire from "../../services/getdata";

import ItemListCustom from "../listWithDetails/itemListCustom";
import ItemOneCustom from "../listWithDetails/itemOneCustom";
// import CharacterPage from "../characterPage/characterPage";

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

    return (
        <> 
            <Container>
                <Header click={this.onClick} showRandom = {this.state.showRandomChar} />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {/* // чтобы работал деструктор компонента нужно писать так */}
                        {/* <RandomChar showRandom = {this.state.showRandomChar}/> */}
                        
                        {/* {this.state.showRandomChar ? <RandomChar showRandom /> : null} */}
                    </Col>
                </Row>

                {/* <CharacterPage /> */}
                <Row>
                    <Col md='6'>
                    {/* // что будет в props :
                    // 1. getDataFunc функция получения данных
                    // 2. pageNum номер страницы
                    // 3. fieldList ="aa bb" список полей для вывода через пробел
                    // 4. primaryKeyField = название поля с ID */}
                        <ItemListCustom 
                            onCharSelected={this.onCharSelected}
                            getDataFunc={dataIceAndFire.getCharacterPage}
                            pageNum="15"
                            fieldList = "ID name gender"
                        />
                    </Col>
                    <Col md='6'>
                        <ItemOneCustom 
                            charID = {this.state.selectedChar}
                            getDataFunc={dataIceAndFire.getOneCharacter}
                            fieldList="Пол/gender/Born/born/Died/died/Culture/culture"
                            nameField="name"
                        />
                    </Col>
                </Row>
            
            </Container>
        </>
    );
};
}
export default App;