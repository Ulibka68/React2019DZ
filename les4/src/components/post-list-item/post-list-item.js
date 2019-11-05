import React from "react";
import "./post-list-item.css";

const PostListItem = ({label,important = false}) => {
    
    // сначала установить State из Props
    const [important_state, SetImportant] = React.useState(important);
    const [like_state, SetLike] = React.useState(false);
    
    const onImportant = (evt) => {
        
        // предотвратить обработку по умолчанию
        evt.preventDefault();
        // вернем противоположное
        SetImportant((imp) => (!imp ));
    };
    
    const onLike = (evt) => {
        evt.preventDefault();
        SetLike((imp) => (!imp ));
    };
    
    let classNames = 'app-list-item d-flex justify-content-between';
    if (important_state) {
        classNames += ' important';
    };
    if (like_state) { classNames += ' like'};


    return (
        
            <li className={classNames}>
                <span className="app-list-item-label" onClick = {onLike}>
                    {label}
                </span>
            
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        type="button" className="btn-star btn-sm"
                        onClick = {onImportant} 
                    >
                        <i className="fa fa-star"></i>
                        
                    </button>
                    
                    <button 
                        type="button" className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    
                    <i className="fa fa-heart"></i>
                </div>
            </li>
    );
}

export default PostListItem;