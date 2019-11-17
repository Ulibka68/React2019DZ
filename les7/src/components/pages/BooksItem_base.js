import React, {Component} from 'react';
import style from './BooksItem_base.module.css';

import Spinner from "../spinner/spinner";
import ErrMsg from "../errorMessage/errorMessage";
// eslint-disable-next-line
import {Col, Row, Container} from 'reactstrap';


// что будет в props :
// 1. getDataFunc функция получения данных
// 2. charID - id персонажа
// 3. fieldList ="aa bb" список полей для вывода через пробел
// 4. primaryKeyField = название поля с ID
// nameField - название главного поля
// promtThenEmpty = Пожалуйста, выберите персонажа

export default class  extends Component {

    constructor (props) {
        super(props);

        // Пол/gender/Born/born/Died/died/Culture/culture
        const fld = this.props.fieldList || 'Пол/gender';
        let pairs =fld.split('/');
        
        this.fldsArray=[];
        
        for (let i=0;i < pairs.length;i+=2) {
            let fld = {fldDesc : pairs[i] , fldName : pairs[i+1] };
            this.fldsArray.push(fld);
        }

        // console.log('ItemOneCustom  constructor : ',this.props);
        // console.log('ItemOneCustom  constructor : ',this.fldsArray);

        this.state = {char : null, updateState : false, errorState : false};

        // поскольку componentDidUpdate не вызывается при первом рендере
        if (this.props.charID ) {
            this.state = {char : null, updateState : true, errorState : false};
            this.updateChar();
        }

        
    }

    books_titles = {
        "1" : "01 A Game of Thrones.jpg",
        "2" : "02 A Clash of Kings.jpg",
        "3" : "03 A Storm of Swords.jpg",
        "4" : "04 The Hedge Knight.jpg"
    }

    

    // не вызывается при первом рендере
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('CharDetails DidUpdate',this.props, prevProps);
        if (this.props.charID !== prevProps.charID) {
            this.setState({updateState : true, errorState : false});
            this.updateChar();
        }
    }

    updateChar =() => {
        // console.log('updateChar');

        const charId = this.props.charID;
        if (!charId) return;

        this.props.getDataFunc(charId)
        .then ( data => {

            let book_title = this.books_titles[data.ID];
            if (! book_title) book_title = "tron.jpeg";
            data.book_title = book_title;
            // console.log('ItemOneCustom updateChar : ',data);

            this.setState({char : data, updateState : false, errorState : false});
           }
        )
        .catch (
                err => {
                    this.setState({errorState : true});
                }
            );

    }

    render() {
        if (this.state.errorState) {
            return <ErrMsg />
        }

        if (! this.state.char) {
            // promtThenEmpty = Пожалуйста, выберите персонажа
            const {promtThenEmpty = 'Пожалуйста, выберите персонажа'} = this.props;
            return (
                <span className={style.select_error}>{promtThenEmpty}</span>
            );
        }

        if (this.state.updateState) {
            return <Spinner />
        }

        // nameField - название главного поля
        const { nameField = 'name'} = this.props;


        const char = this.state.char;

        return (
            <Container className={style.char_details + " rounded"}>
                <Row className="justify-content-center">
                    <h4>{char[nameField]}</h4>
                </Row>
                <Row>
                    <Col lg="3">
                        Обложка книги
                        <img 
                            src={process.env.PUBLIC_URL + '/img/' + char.book_title} 
                            className={style.img_book }
                            alt="картинка книги"
                        />
                        
                    </Col >
                    <Col lg="9">
                        <ul className="list-group list-group-flush">
                            {this.fldsArray.map( fld => (
                                char[fld.fldName] ?
                                    <li key={fld.fldName} className="list-group-item d-flex justify-content-between">
                                        <span className="term">{fld.fldDesc}</span>
                                        <span>{char[fld.fldName]}</span>
                                    </li>
                                : null
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row>--</Row>
            </Container>
        );
    }
}