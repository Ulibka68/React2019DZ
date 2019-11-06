import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

// import "./app.css";
// import style from "./App.module.css";

import styled from "styled-components";

import data_warehouse from "../../dataContainer/data-container";

// import ModalExample from "../modalForm/edit-form";

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;


// Styled можно наследовать от предыдущего стиля и добавлять стили
// const StyledAppBlock = styled(AppBlock)`
//     background-color : grey;
// `;


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      // eslint-disable-next-line  
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  

export default class App extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = { data : [
            {label : "1Going to learn react", important : true, key : 1},
            {label : "2Второй", important : false, key : 2},
            {label : "3Третий. I need break", important : false, key : 3}
            ]
        };
    };

    deleteItem = (id) =>  {
        console.log("App delete : ",id);
        this.setState (({data}) => {
            const index = data.findIndex ( el => (el.key === id));

            let data1 = [...data];
            if (index > -1) {
                data1.splice(index,1);
            };
            return {data : data1};
        } );
    };

    addItem = (newText) => {
        const kk = uuidv4();
        console.log(newText,' ', kk);
        const newItem = {label : newText, important : false, key : kk};

        this.setState(({data}) => {
            const data1 = [...data, newItem];
            return ( {data : data1} );
        });
    };

    render() {
        return (
            <AppBlock>
            {/* <div className={style.app}> */}
                <AppHeader  />
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter />
                </div>
                <PostList 
                    posts = {this.state.data} 
                    onDelete = {this.deleteItem}
                />
                <PostAddForm onAdd = {this.addItem} />
        
                
                {/* <ModalExample buttonLabel="Вася"/> */}
            {/* </div> */}
            </AppBlock>
        );
    }
}

