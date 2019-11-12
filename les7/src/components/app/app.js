import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../errorMessage/errorMessage";
import CharacterPage from "../characterPage/characterPage";

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
                        {this.state.showRandomChar ? <RandomChar showRandom /> : null}
                    </Col>
                </Row>
                <CharacterPage />
            </Container>
        </>
    );
};
}
export default App;