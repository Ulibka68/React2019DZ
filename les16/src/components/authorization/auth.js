import React from "react";
import style from  "./auth.module.scss"

class AuthorizationForm extends React.Component {
    render() {
        
        return(
            <div className={style.auth__container}>
                Форма авторизации
            </div>
        );
    }
}

export default AuthorizationForm;