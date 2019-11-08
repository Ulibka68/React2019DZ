import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";


// import style from "./App.module.css";

import styled from "styled-components";

// import data_warehouse from "../../dataContainer/data-container";

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
            ],
            term : '',
            filter : 'all'
        };
    };

    searchPosts(items, term) {
        if (term.length === 0) {return items;}

        return (items.filter ( (item) => {
            return item.label.indexOf(term) > -1;
        }));
    }

    filterPost(items,filter) {
        if (filter === 'like') {
            return (items.filter ( (item) => ( item.like) ));
    
        } else {
            return items;
        }
    }

    countLiked() { 
        return (
         this.state.data.reduce( (acc,curVal) =>{ 
                return acc + (  !!curVal.like ? 1 : 0);
            },0 )
        );
    }

    countPosts() {
        return this.state.data.length;
    }

    deleteItem = (id) =>  {
        
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
        // отладка еще пригодится
        // console.log(newText,' ', kk);
        const newItem = {label : newText, important : false, key : kk};

        this.setState(({data}) => {
            const data1 = [...data, newItem];
            return ( {data : data1} );
        });
    };


    onToogleCommon = (id, fieldName) => {
        // console.log(`app onToggleImportant : ${id}`);

        this.setState (({data}) => {
            const index = data.findIndex ( el => (el.key === id));

            let data1 = [...data];
            if (index > -1) {
                data1[index][fieldName]= ! ( !! data1[index][fieldName]);
            };
            return {data : data1};
        } );

    }

    // 3) Сделать так, чтобы код в функциях onToggleImportant и onToggleLiked не дублировался.
    onToggleImportant = (id ) => {
        this.onToogleCommon(id,'important');
    }
    onToggleLiked = (id) => {
        this.onToogleCommon(id,'like');
    }

    // onToggleImportant = (id ) => {
    //     // console.log(`app onToggleImportant : ${id}`);

    //     this.setState (({data}) => {
    //         const index = data.findIndex ( el => (el.key === id));

    //         let data1 = [...data];
    //         if (index > -1) {
    //             data1[index].important= ! ( !! data1[index].important);
    //         };
    //         return {data : data1};
    //     } );
    // };

    // onToggleLiked = (id) => {
    //     // console.log(`app onToggleLiked : ${id}`);

    //     this.setState (({data}) => {
    //         const index = data.findIndex ( el => (el.key === id));

    //         let data1 = [...data];
    //         if (index > -1) {
    //             data1[index].like= ! ( !! data1[index].like);
    //         };
    //         return {data : data1};
    //     } );
    // };

    onUpdateSearch = (newTerm) => {
        this.setState({term : newTerm});
    }

    onAllItems = () => {
        this.setState({term : '', filter : ''});
        
    }

    onLikedItems = ()=> {
        this.setState({filter : 'like'});
    }

    render() {
        let  visiblePosts =[];
        // if (this.state.filter === '') {
        //     visiblePosts = this.searchPosts(this.state.data,this.state.term);
        // } else {
        //      visiblePosts = this.filterPost(this.state.data,'like');
        // };

        visiblePosts = this.filterPost (this.searchPosts(this.state.data,this.state.term), this.state.filter)

        

        return (
            <AppBlock>
                <AppHeader  countPost={this.countPosts()} countLiked ={this.countLiked()} />
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch = {this.onUpdateSearch} startVal ={this.state.term}/>
                    <PostStatusFilter 
                        onAllItems={this.onAllItems} 
                        onLikedItems = {this.onLikedItems} 
                        filter = {this.state.filter}
                    />
                </div>
                <PostList 
                    posts = {visiblePosts} 
                    onDelete = {this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked = {this.onToggleLiked}
                />
                <PostAddForm onAdd = {this.addItem} />
            </AppBlock>
        );
    }
}

