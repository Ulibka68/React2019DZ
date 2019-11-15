import React from "react";
import CustomPage from "../listWithDetails/customPage";
import dataIceAndFire from "../../services/getdata";


function BooksPage () {
    return (
        <CustomPage 
                    getDataFuncList = {dataIceAndFire.getBooksPage}
                    pageNum="1"
                    fieldListList = "ID name authors"
                    getDataFuncOne = {dataIceAndFire.getOneBook}
                    fieldListOne = "Isbn/isbn/authors/authors/numberOfPages/numberOfPages"
                    nameFieldOne = "name"
                    promtThenEmpty = 'Пожалуйста, выберите книгу'
          />
    );
}


function HousesPage() {
    return (
    <CustomPage 
        getDataFuncList = {dataIceAndFire.getHousesPage}
        pageNum="1"
        fieldListList = "ID name region"
        getDataFuncOne = {dataIceAndFire.getOneHouse}
        fieldListOne = "region/region/coatOfArms/coatOfArms/founder/founder"
        nameFieldOne = "name"
        promtThenEmpty = 'Пожалуйста, выберите дом'
    />  
    )
}


function CharacterPagesCust() {
    return (                
                 <CustomPage 
                    getDataFuncList = {dataIceAndFire.getCharacterPage}
                    pageNum="15"
                    fieldListList = "ID name gender"
                    getDataFuncOne = {dataIceAndFire.getOneCharacter}
                    fieldListOne = "Пол/gender/Born/born/Died/died/Culture/culture/ID/ID"
                    nameFieldOne = "name"
                />
    )                
}                

export {BooksPage,HousesPage, CharacterPagesCust};