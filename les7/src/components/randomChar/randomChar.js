import React, {Component} from 'react';
import './randomChar.css';
import dataIceAndFire from "../../services/getdata";
import Spinner from "../spinner/spinner"
import ErrorComp from "../errorMessage/errorMessage";

export default class RandomChar extends Component {

    constructor(props) {
        super(props);


        this.state = {char : {}, book : {}, loading : true, error : false, errMsg : '', timerId : null};

        // нужно время дождаться пока придет общее количество страниц
        if (props.showRandom)  {
            let timerId = setInterval( () => {this.updateCharacter();},3000);
            this.state.timerId = timerId;
            //  clearInterval
        }


        // setTimeout( () => {this.updateCharacter();},3000);
        
    }

    // state = {
    //     name : null,
    //     gender : null,
    //     born : null,
    //     died : null,
    //     culture : null
    // }

    

    onError = (err) => {
        // console.log (err.message);
        this.setState({error : true, loading : false, errMsg : err.message});
    }

    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        // console.log('componentDidUpdate : ',this.props.showRandom);
        if (! this.props.showRandom && this.state.timerId != null) {
            clearInterval(this.state.timerId);
            this.setState({timerId : null});
        }

        if ( this.props.showRandom && this.state.timerId === null) {
            let timerId = setInterval( () => {this.updateCharacter();},3000);
            this.setState({timerId : timerId});
        }

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
        let { loading, error} = this.state;
        
        if (! this.props.showRandom ) {
            return <div></div>;
        }
        
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
