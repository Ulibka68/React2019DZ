import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";

const App = () => {
    return (
        <AppHeader  />
        <div className="search-panel d-flex">
            <SearchPanel/>
        </div>
    );
}

export default App;