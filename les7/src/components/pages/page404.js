import React from "react";
// eslint-disable-next-line 
import { Container, Button} from 'reactstrap';

export default function ({match,location,history}) {
    // console.log('page404 ',match);
    // console.log(location);
    // console.log(history);

    const styleCont = {
        backgroundColor: "#fff",
        padding: "25px 25px 15px 25px",
        marginBottom: "40px"
    };

    return (
        <Container style ={styleCont}>
            <h1>Неверная ссылка</h1>
            <Button 
                color="primary"
                onClick = {()=>{
                    
                    history.push(`/`);
                }}
            >
                Вернуться на главную страницу
            </Button>
        </Container>
    );
}