import style from "./material.module.scss";
import React from "react";
import WithRestoService from "../hoc";
import { withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {filterSet,filterReset} from "../../actions";

class MaterialIcons extends React.Component {
 
    onClick (id) {
        console.log('onClick',id);
        this.props.filterSet(id);
        this.props.history.push('/');
    }

    render() {
    const {RestoServiceProp} = this.props;

    let body=[];
    if (RestoServiceProp.categoryUrl_isLoaded ) {
        for (let [key, value] of Object.entries( RestoServiceProp.categoryUrl )) {
            body.push(
                <li key={key} className = {style.listItem}  onClick = { (evnt) => this.onClick(key, evnt) } >
                     <img 
                        className={style.icon}
                        alt={key}
                        src={value}
                    />
                    {key}
                </li>
            );
        }
    }  

    return (
    <div className = {style.container}>
        {/* <i className={style.material_icons+" "+style.orange600}>fastfood location_on monetization_on </i>
        <i className={style.material_icons}>fastfood location_on monetization_on </i> */}

        <ul>
           {body}
        </ul>
    </div>
    );
    }

}


const mapStateToProps = (state) => {
    
    return {
        filteredMenu : state.filteredMenu,
        filteredMenuKey : state.filteredMenuKey
    }
}

const mapDispatchToProps = {filterSet,filterReset} ;


export default withRouter(WithRestoService(   connect(mapStateToProps,mapDispatchToProps)(MaterialIcons)));

// https://material.io/resources/icons/?style=baseline