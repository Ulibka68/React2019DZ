import React, {Component} from 'react';
import './charDetails.css';
import dataIceAndFire from "../../services/getdata";

export default class CharDetails extends Component {

    state = {char : null};

    // componentDidMount() {
    //     console.log('CharDetails DidMount',this.props);
    //     this.updateChar();
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('CharDetails DidUpdate',this.props, prevProps);
        if (this.props.charID !== prevProps.charID) {
            this.updateChar();
        }
    }

    updateChar =() => {
        // console.log('updateChar');
        const charId = this.props.charID;
        if (!charId) return;

        dataIceAndFire.getApiNumDataID(0,charId)
            .then (data => {
                data.JSON_promice.ID = charId;
                this.setState({char : data.JSON_promice});

                console.log('updateChar : ',data.JSON_promice);
            });

    }

    render() {
        if (! this.state.char) {
            return (
                <span className='select-error'>Пожалуйста, выберите персонажа</span>
            );
        }

        const {name, gender, born, died, culture } = this.state.char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}