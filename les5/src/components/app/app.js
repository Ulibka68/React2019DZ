import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

// import "./app.css";
// import style from "./App.module.css";

import styled from "styled-components";

// import ModalExample from "../modalForm/edit-form";

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const StyledAppBlock = styled(AppBlock)`
    background-color : grey;
`;

const App = () => {

    const data = [
        {label : "1Going to learn react", important : true, key : 1},
        {label : "2Второй", important : false, key : 2},
        {label : "3Третий. I need break", important : false, key : 3}
    ];

    
    return (
        <AppBlock>
        {/* <div className={style.app}> */}
            <AppHeader  />
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter />
            </div>
            <PostList 
                posts = {data} 
                onDelete = { id => console.log("App delete : ",id)}
            />
            <PostAddForm />
    
            
            {/* <ModalExample buttonLabel="Вася"/> */}
        {/* </div> */}
        </AppBlock>
    );
}

export default App;