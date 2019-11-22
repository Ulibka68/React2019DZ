import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from "../hoc";
import { Route,Switch} from "react-router-dom";

import Background from './food-bg.jpg';

import ImageFirebase from "../imageFirebase/imgFirebase";

// поскольку app обернуто в conumer - то внутри меня ждет prop RestoService
class App extends React.Component  {

    render() {
        const {RestoService} = this.props;
        console.log(RestoService.getMenuItems())
        return (
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader total={50}/>
                <ImageFirebase imageName="cowboysteak.webp" />
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/cart" exact component={CartPage} />
                </Switch>
            </div>
        )};

}

export default WithRestoService(App);



/* 
<Route path='/books/:id' render = {
    ({match,location,history})=> {
    return  <BookOne bookID={match.params.id} />
    }
} />
*/

// {/*  если ничего не найдено path можно опустить  */}
// <Route  render = {
//     ({match,location,history})=> {
//     return  <Page404 match={match} location={location} history={history} />
//     }
// } /> */}