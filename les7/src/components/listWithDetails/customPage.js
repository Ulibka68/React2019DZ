import React from "react";
import {Col, Row} from 'reactstrap';
import ItemListCustom from './itemListCustom';
import ItemOneCustom from './itemOneCustom';
import ErrorMessage from "../errorMessage/errorMessage";
// import dataIceAndFire from "../../services/getdata";


// Перечень props :
// getDataFuncList :   getDataFunc={dataIceAndFire.getCharacterPage}
// pageNum             pageNum="15"
// fieldListList       fieldList = "ID name gender"

// getDataFuncOne      getDataFunc={dataIceAndFire.getOneCharacter}
// fieldListOne        fieldList="Пол/gender/Born/born/Died/died/Culture/culture"
// nameFieldOne           nameField="name"


export default class CustomPage extends React.Component  {
    
    state = {
        selectedChar : null,
        error : false
    }

    componentDidCatch() {
        console.log('CharacterPage error --------------');
        this.setState({error : true});
    }


    onCharSelected = (ID) => {
        this.setState({selectedChar : ID});
    }

    render () {

        if (this.state.error) {
            return <ErrorMessage />
        }
    
        const {getDataFuncList,pageNum,fieldListList,getDataFuncOne,fieldListOne,nameFieldOne} = this.props;
        // Перечень props :
        // getDataFuncList :   getDataFunc={dataIceAndFire.getCharacterPage}
        // pageNum             pageNum="15"
        // fieldListList       fieldList = "ID name gender"

        // getDataFuncOne      getDataFunc={dataIceAndFire.getOneCharacter}
        // fieldListOne        fieldList="Пол/gender/Born/born/Died/died/Culture/culture"
        // nameFieldOne           nameField="name"
 

        return (
        <Row>
            <Col md='6'>
            {/* // что будет в props :
            // 1. getDataFunc функция получения данных
            // 2. pageNum номер страницы
            // 3. fieldList ="aa bb" список полей для вывода через пробел
            // 4. primaryKeyField = название поля с ID 
            */}
                <ItemListCustom 
                    onCharSelected={this.onCharSelected}
                    getDataFunc={getDataFuncList}
                    pageNum={pageNum}
                    fieldList = {fieldListList}
                />
            </Col>
            <Col md='6'>
                <ItemOneCustom 
                    charID = {this.state.selectedChar}
                    getDataFunc={getDataFuncOne}
                    fieldList={fieldListOne}
                    nameField={nameFieldOne}
                />
            </Col>
        </Row>
        );
    }

}