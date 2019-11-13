import React, {Component} from 'react';
import style from './itemOneCustom.module.css';

import Spinner from "../spinner/spinner";
import ErrMsg from "../errorMessage/errorMessage";


// что будет в props :
// 1. getDataFunc функция получения данных
// 2. charID - id персонажа
// 3. fieldList ="aa bb" список полей для вывода через пробел
// 4. primaryKeyField = название поля с ID
// nameField - название главного поля

export default class ItemOneCustom extends Component {

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

        console.log('ItemOneCustom  constructor : ',this.fldsArray);
    }

    state = {char : null, updateState : false, errorState : false};

    
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
            return (
                <span className={style.select_error}>Пожалуйста, выберите персонажа</span>
            );
        }

        if (this.state.updateState) {
            return <Spinner />
        }

        // nameField - название главного поля
        const { nameField = 'name'} = this.props;


        const char = this.state.char;

        return (
            <div className={style.char_details + " rounded"}>
                <h4>{char[nameField]}</h4>
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
            </div>
        );
    }
}