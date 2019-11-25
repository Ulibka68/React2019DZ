import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import { Route,Switch} from "react-router-dom";
// import ImageFirebase from "../imageFirebase/imgFirebase";

import Background from './food-bg.jpg';

// поскольку app обернуто в conumer - то внутри меня ждет prop RestoService
class App extends React.Component  {

    render() {
        // const {RestoService} = this.props;
        // console.log(RestoService.getMenuItems())
        return (
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader total={50}/>
                {/* <ImageFirebase imageName="catIcons/salad.png" /> */}
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/cart" exact component={CartPage} />
                </Switch>
            </div>
        )};

}

export default App;
