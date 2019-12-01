import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import ErrorBoundry from "./components/error-boundry";
import RestoService from "./services/resto-service";
import RestoServiceContext from "./components/resto-service-context";
import store from "./store";
import firebase from "./firebase";
import './index.scss';

/*
console.log('авторизация firebase : ')
firebase.login("t2@t.ru","123456")
    .then ( (user) => { 
        console.log(user) ;
        console.log('user.displayName : ', user.user.displayName);
        console.log('user.uid : ', user.user.uid);

        // let userFB = firebase.auth.currentUser;
        // console.log('firebase.auth.currentUser : ',userFB);

        store.dispatch({
            type: 'USER_SET',
            user: user.user
          })
          

    }  );
*/

    // let userFB = firebase.auth.currentUser;
    // console.log('firebase.auth.currentUser : ',userFB);



const restoService = new RestoService();
restoService.getCategoryIcons();

ReactDOM.render(
    // redux srore
    <Provider store = {store}>
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <App />
                </Router>

            </RestoServiceContext.Provider>

        </ErrorBoundry>
    </Provider>

    , document.getElementById('root'));

