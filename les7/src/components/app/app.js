import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


class App extends React.Component {

    state = {
        showRandomChar : true,
        selectedChar : null
    }

    onClick= () => {
        this.setState( (oldState) => ({showRandomChar : ! oldState.showRandomChar}) );

    }

    onCharSelected = (ID) => {
        console.log('onCharSelected ',ID);
        this.setState({selectedChar : ID});
    }

render () {
    console.log('this.state.selectedChar : ',this.state.selectedChar);
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
                        {this.state.showRandomChar ? <RandomChar showRandom /> : null}
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList onCharSelected={this.onCharSelected}/>
                    </Col>
                    <Col md='6'>
                        <CharDetails charID = {this.state.selectedChar}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
}
export default App;