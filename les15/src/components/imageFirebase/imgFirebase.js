import React from "react";
import firebase from "../../firebase/firebase";

export default class ImageFirebase extends React.Component {
    // на вход поступает props imageName
    state = {url : ''};

    componentDidMount() {
        if (! this.props.imageName) return;
        firebase.getImageUrl(this.props.imageName)
        .then ( (url) => { this.setState({url}); });
    }

    render() {
        return(
            <img src={this.state.url} alt={this.props.imageName}></img>
        );
    }

}

