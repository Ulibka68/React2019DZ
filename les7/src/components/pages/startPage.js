import React from "react";
// eslint-disable-next-line
import {Col, Row, Container} from 'reactstrap';
import style from "./startPage.module.css";
import img from "./img/tron.jpeg";

export default function () {
 return (
    <Container className={style.container+' rounded'}>
        <Row className="justify-content-center">
            <h1>Welcome TO GOT</h1>
        </Row>
        <Row>
            {/* <img 
                src={process.env.PUBLIC_URL + '/img/tron.jpeg'} 
                className={style.img_tron }
                alt="tron"/> */}
            <img 
                src={img} 
                className={style.img_tron }
                alt="tron"/>


        </Row>
        <Row className="justify-content-center font-weight-bold">
            Game of Thrones
        </Row>
        <Row className="justify-content-center">
            8 SEASONS |73 EPISODES |TV-MA
        </Row>
    </Container>
 );
}