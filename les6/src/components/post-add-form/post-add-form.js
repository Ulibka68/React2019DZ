import React from "react";
import {Input, Button } from "reactstrap";
import style from "./PostAddForm.module.scss";

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">

            <Input placeholder="О чем Вы думаете ?" className={style.new_post_label} />


            <Button 
                outline color="secondary"
                onClick = { () => onAdd('Hello')}
            >
                Добавить
            </Button>


        </div>
    );
}

export default PostAddForm;