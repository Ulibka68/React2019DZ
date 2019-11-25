import React from "react";
import firebase from "../../firebase/firebase";

//  props
//  imageName
//  imageTitle
export default class ImageFirebase extends React.Component {
    // на вход поступает props imageName
    state = {url : ''};
    queryData = false;

    componentDidMount() {
        if (! this.props.imageName) return;
        this.queryData = true;
        firebase.getImageUrl(this.props.imageName)
        .then ( 
            (url) => { 
                        if ( this.queryData ) this.setState({url}); 
                        this.queryData = false;
                     }
        );
       
    }

    componentWillUnmount() {
        this.queryData = false;        
    }

    render() {
        // если rest не развренуть - то класс не передастся
        const {imageTitle,imageName, ...rest} = this.props;
        
        return(
            <img src={this.state.url} alt={imageTitle} {...rest} ></img>
        );
    }

}

