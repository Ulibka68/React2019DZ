import React from "react";
import PostListItem from "../post-list-item/post-list-item";
import "./post-list.css";

const PostList = ({posts}) => {

    // const elements = posts.map ( (post) => {
    //   return (  <PostListItem label={post.label} important = {post.important}/> );
    // } 

    return (
        <ul className="app-list list-group">
            
            {/* можно применить выражение прямо внутри */}
            {posts.map ( (post) => {
            //   return (  <PostListItem label={post.label}  important = {post.important}/> );
              return (  <PostListItem {...post} /> );
            } )}
            
        </ul>
    );
}

export default PostList;