import React from 'react';

// eslint-disable-next-line 
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';

import ErrorMessage from "../errorMessage/errorMessage";

import RandomPage from "../randomChar/randomPage";
import  {BooksPage,HousesPage, CharacterPagesCust,BookListPage} from "../pages/pagesCall";
import {BrowserRouter as Router, Route} from "react-router-dom";
import BookOne from "../pages/booksItem";
import StartPage from "../pages/startPage";


class App extends React.Component {

    state = {
        showRandomChar : false,
        
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
        <Router>
        <div className="app"> 
            <Container>
                <Header click={this.onClick} showRandom = {this.state.showRandomChar} />
            </Container>
            
            
            <Container>
                {this.state.showRandomChar ? <RandomPage /> : null }

                <Route path='/' exact component = {StartPage}/>
                <Route path='/characters' component = {CharacterPagesCust}/>
                <Route path='/houses' component = {HousesPage}/>
                
                <Route path='/books' exact component = {BooksPage}/>

                <Route path='/bookslist/:id' exact render = {
                    ({match}) => {
                        return (
                            <BookListPage pageNum = {match.params.id}  />
                        );}
                }/>

                {/* <Route path='/bookslist' exact component = { BookListPage} /> */}


                <Route path='/books/:id' render = {
                    ({match,location,history})=> {
                       return  <BookOne bookID={match.params.id} />
                    }
                } />
                
            </Container>
        </div>
        </Router>
    );
};
}
export default App;