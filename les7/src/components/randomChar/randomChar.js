import React, {Component} from 'react';
import './randomChar.css';
import dataIceAndFire from "../../services/getdata";
import Spinner from "../spinner/spinner"
import ErrorComp from "../errorMessage/errorMessage";

export default class RandomChar extends Component {

    constructor(props) {
        super(props);


        // нужно время дождаться пока придет общее количество страниц
        setInterval( () => {this.updateCharacter();},3000);
        // setTimeout( () => {this.updateCharacter();},3000);
        
    }

    // state = {
    //     name : null,
    //     gender : null,
    //     born : null,
    //     died : null,
    //     culture : null
    // }

    state = {char : {}, book : {}, loading : true, error : false, errMsg : ''};

    onError = (err) => {
        // console.log (err.message);
        this.setState({error : true, loading : false, errMsg : err.message});
    }

    updateCharacter() {
        dataIceAndFire.getRandomCharacter()
        // dataIceAndFire.getApiNumData(0,2,10)
            .then( data => {
                
                // console.log(data.lastPage);
                // console.log(data.JSON_promice);
                // console.log(data);

                let char = dataIceAndFire.transformCharacter(data.JSON_promice);
                // console.log(char);
                if (char.name === null) return;

                this.setState({char : char, loading : false, error : false, errMsg : ''});
            })
            .catch (this.onError);
            ;
    }

    render() {
        const { loading, error} = this.state;
        
        let InsideElm;
        if (error ) {
             InsideElm = <ErrorComp errMSG={this.state.errMsg} />;
        } else {
          InsideElm = loading ?  <Spinner /> : <ViewOneChar {... this.state.char}/>;
        }
        

        return (
            <div className="random-block rounded">
               {InsideElm}
            </div>
        );
    }
}

const ViewOneChar = ({name, gender, born, died, culture }) => {
    
    return (
        <>
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
        </>
    );
}
