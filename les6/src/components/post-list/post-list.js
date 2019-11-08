import React from "react";

import { ListGroup } from 'reactstrap';

import PostListItem from "../post-list-item/post-list-item";
// import style from "./post-list.module.css";
import "./post-list.css";

// import FormEdit from "../modalForm/edit-form";

const PostList = ({posts, onDelete,onToggleImportant,onToggleLiked}) => {

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
            if (typeof elm === "object" && elm != null) {
                
                let {label, important, key} = elm;
                if (label === undefined || important === undefined || key === undefined) {
                    rslt = false;
                } else {
                    checkedPosts.push(elm);  // если элемент прошел проверку - то запушим
                };
            } else {
                rslt = false;
            }
        });


        return rslt;
    };

    CheckInputData();
    // const clazz = style.app_list + ' ' + style.list_group_item;
    const clazz = ' app-list ';

    return (
        <ListGroup className={clazz}>
            
            {/* можно применить выражение прямо внутри */}
            {checkedPosts.map ( (post) => {
                //   return (  <PostListItem label={post.label}  important = {post.important}/> );
                return (  <PostListItem {...post} 
                            onDelete = {() => onDelete(post.key) }
                            onToggleImportant = {() => onToggleImportant(post.key)}
                            onToggleLiked = {()=>onToggleLiked(post.key)}
                /> );
            } )}
            
        </ListGroup>

    );
}

export default PostList;