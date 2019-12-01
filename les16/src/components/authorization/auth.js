import React from "react";
import styles from "./auth.module.css"

class AuthorizationForm extends React.Component {
    render() {
        console.log(styles);
        return(
            <div className={styles.auth__container}>
                Форма авторизации
            </div>
        );
    }
}

export default AuthorizationForm;