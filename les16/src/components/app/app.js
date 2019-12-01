import React from 'react';
import {MainPage, CartPage,MainPageFilter,AuthPage} from '../pages';
import AppHeader from '../app-header';
import { Route,Switch} from "react-router-dom";
// import ImageFirebase from "../imageFirebase/imgFirebase";
// import MaterialIcons from "../other/materail";

import Background from './food-bg.jpg';

// поскольку app обернуто в conumer - то внутри меня ждет prop RestoService
class App extends React.Component  {

    render() {
        // const {RestoService} = this.props;
        // console.log(RestoService.getMenuItems())
        return (
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader />
               
                {/* <ImageFirebase imageName="catIcons/salad.png" /> */}
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/cart" exact component={CartPage} />
                    <Route path="/menu_filter" exact component={MainPageFilter} />
                    <Route path="/auth" exact component={AuthPage} />
                    
                    
                </Switch>
            </div>
        )};

}

export default App;
