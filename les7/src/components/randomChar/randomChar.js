import React, {Component} from 'react';
import './randomChar.css';
import dataIceAndFire from "../../services/getdata";

export default class RandomChar extends Component {

    constructor(props) {
        super(props);
        this.updateCharacter();
    }

    state = {
        name : null,
        gender : null,
        born : null,
        died : null,
        culture : null
    }

    updateCharacter() {
        dataIceAndFire.getApiNumData(0,2,10)
            .then( data => {
                
                
                console.log(data.lastPage);
                console.log(data.JSON_promice);

                let {name, gender, born, died, culture } = data.JSON_promice[5];
                culture = culture ? culture:null;
                name = name ? name:null;
                gender = gender ? gender:null;
                born = born ? born:null;
                died = died ? died:null;

                this.setState({name, gender, born, died, culture });
            });
    }

    render() {
        const {name, gender, born, died, culture } = this.state;

        return (
            <div className="random-block rounded">
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                            <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                            <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                            <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}
