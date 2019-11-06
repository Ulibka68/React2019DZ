import React from "react";
import PostListItem from "../post-list-item/post-list-item";
import "./post-list.css";

import FormEdit from "../modalForm/edit-form";

const PostList = ({posts}) => {

    // второй вариант формирования массива
    // const elements = posts.map ( (post) => {
    //   return (  <PostListItem label={post.label} important = {post.important}/> );
    // } 

    // 2) Написать условие, что если в данных, которые приходят от сервера, есть что-то кроме объектов - они игнорируются. 
    // (Если в массив добавить число - пустой пост на его месте не создается)
    function CheckInputData() {

        // ждем объект и массив
        if (typeof (posts) != "object"  || !Array.isArray(posts) ) {return false;};

        let rslt = true;
        posts.forEach( (elm) => {
            // В данных жду этих ключей :            
            let {label, important, key} = elm;
            if (label === undefined || important === undefined || key === undefined) {rslt = false;};
        });


        return rslt;
    };

    if (! CheckInputData() ) {
        return (
            <ul className="app-list list-group">
                Ошибка сервера - неправильный тип данных
            </ul>        
        );
    };

    return (
        <React.Fragment>
        <ul className="app-list list-group">
            
            {/* можно применить выражение прямо внутри */}
            {posts.map ( (post) => {
            //   return (  <PostListItem label={post.label}  important = {post.important}/> );
              return (  <PostListItem {...post} /> );
            } )}
            
        </ul>
        <FormEdit />
        </React.Fragment>
    );
}

export default PostList;