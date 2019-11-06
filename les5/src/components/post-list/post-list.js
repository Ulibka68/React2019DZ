import React from "react";

import { ListGroup } from 'reactstrap';

import PostListItem from "../post-list-item/post-list-item";
import "./post-list.css";

import FormEdit from "../modalForm/edit-form";

const PostList = ({posts, onDelete}) => {

    // второй вариант формирования массива
    // const elements = posts.map ( (post) => {
    //   return (  <PostListItem label={post.label} important = {post.important}/> );
    // } 

    // 2) Написать условие, что если в данных, которые приходят от сервера, есть что-то кроме объектов - они игнорируются. 
    // (Если в массив добавить число - пустой пост на его месте не создается)

    // Update от 06.11 15:51
    // Нам требуется игнорировать все что не является подходящим нам обьектом. 
    // Проверка на одну строчку на самом деле. то есть при добавлении в обьект элемента 1 или "строка" ничего не изменится

    let checkedPosts = [];

    function CheckInputData() {

        // ждем объект и массив
        if (typeof (posts) != "object"  || !Array.isArray(posts) ) {return false;};

        let rslt = true;
        posts.forEach( (elm) => {
            // В данных жду этих ключей :            
            let {label, important, key} = elm;
            if (label === undefined || important === undefined || key === undefined) {
                rslt = false;
            } else {
                checkedPosts.push(elm);  // если элемент прошел проверку - то запушим
            };
        });


        return rslt;
    };

    CheckInputData();
    // Ошибку не выводим
    // if (! CheckInputData() ) {
    //     return (
    //         <ul className="app-list list-group">
    //             Ошибка сервера - неправильный тип данных
    //         </ul>        
    //     );
    // };

    return (
        <React.Fragment>
        <ListGroup className="app-list">
            
            {/* можно применить выражение прямо внутри */}
            {checkedPosts.map ( (post) => {
                //   return (  <PostListItem label={post.label}  important = {post.important}/> );
                return (  <PostListItem {...post} onDelete = {
                    () => {
                            console.log("Deleted - вызвано в List :",post.key);
                            onDelete(post.key);
                          }
                }/> );
            } )}
            
        </ListGroup>

        <FormEdit />
        </React.Fragment>
    );
}

export default PostList;