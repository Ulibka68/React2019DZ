import React, {Component} from 'react';
import './charDetails.css';
import dataIceAndFire from "../../services/getdata";
import Spinner from "../spinner/spinner";
import ErrMsg from "../errorMessage/errorMessage";

const Field = ({char, field, label}) => {
    return (
        <li 
            className="list-group-item d-flex justify-content-between"
            key={char.ID}
        >
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </li>
    );
}

export {
    Field
}

export default class CharDetails extends Component {

    state = {char : null, updateState : false, errorState : false};

    // componentDidMount() {
    //     console.log('CharDetails DidMount',this.props);
    //     this.updateChar();
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('CharDetails DidUpdate',this.props, prevProps);
        if (this.props.charID !== prevProps.charID) {
            this.setState({updateState : true, errorState : false});
            this.updateChar();
        }
    }

    updateChar =() => {
        // console.log('updateChar');

        // чтобы была ошибка
        // this.foo.bar =1;

        const charId = this.props.charID;
        if (!charId) return;

        dataIceAndFire.getApiNumDataID(0,charId)
            .then (data => {
                data.JSON_promice.ID = charId;
                this.setState({char : data.JSON_promice, updateState : false, errorState : false});

                // console.log('updateChar : ',data.JSON_promice);
            })
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
                <span className='select-error'>Пожалуйста, выберите персонажа</span>
            );
        }

        if (this.state.updateState) {
            return <Spinner />
        }

        const {char} = this.state;
        const {name } = char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map( this.props.children, (child) => {
                            return React.cloneElement(child,{char})
                        } )
                    }
                </ul>
            </div>
        );
    }
}