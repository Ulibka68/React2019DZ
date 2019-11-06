import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css";

// import ModalExample from "../modalForm/edit-form";

const App = () => {

    const data = [
        {label : "1Going to learn react", important : true, key : 1},
        {label : "2Второй", important : false, key : 2},
        {label : "3Третий. I need break", important : false, key : 3}
    ];

    
    return (
        <div className="app">
            <AppHeader  />
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter />
            </div>
            <PostList posts = {data} />
            <PostAddForm />
    
            
            {/* <ModalExample buttonLabel="Вася"/> */}
        </div>
    );
}

export default App;