import React, {Component} from 'react';
import './randomChar.css';
import dataIceAndFire from "../../services/getdata";
import Spinner from "../spinner/spinner"
import ErrorComp from "../errorMessage/errorMessage";

export default class RandomChar extends Component {

    constructor(props) {
        super(props);

        this.timerId = null;
        this.state = {char : {}, book : {}, loading : true, error : false, errMsg : ''};
     
    }

    onError = (err) => {
        // console.log (err.message);
        this.setState({error : true, loading : false, errMsg : err.message});
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading : false
        });
    }


    componentDidMount() {
        // на всякий случай
        if (this.timerId != null ) {
             clearInterval(this.timerId);
             this.timerId = null;
        }
        
        // нужно время дождаться пока придет общее количество страниц
        if (this.props.showRandom)  {
            this.timerId = setInterval( () => {this.updateCharacter();},3000);
        }
    }

    // получается типа деструктора - перед тем как компонент разрушится
    componentWillUnmount() {
        console.log('componentWillUnmount');
        if (this.timerId != null ) {
            clearInterval(this.timerId);
            this.timerId = null;
       }
    }

    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        // console.log('componentDidUpdate : ',this.props.showRandom);
        if (this.timerId != null ) {
            clearInterval(this.timerId);
            this.timerId = null;
        }

        if ( this.props.showRandom && this.timerId === null) {
            this.timerId = setInterval( () => {this.updateCharacter();},3000);
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
