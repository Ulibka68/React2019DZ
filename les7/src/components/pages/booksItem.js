import React from "react";
import BookOneBase from "./BooksItem_base";
import dataIceAndFire from "../../services/getdata";


// что будет в props :
// 1. getDataFunc функция получения данных
// 2. charID - id персонажа
// 3. fieldList ="aa bb" список полей для вывода через пробел
// 4. primaryKeyField = название поля с ID
// nameField - название главного поля
// promtThenEmpty = Пожалуйста, выберите персонажа
export default function BookOne({bookID}) {
    return (
        <BookOneBase 
        
            getDataFunc = {dataIceAndFire.getOneBook}
            charID = {bookID}
            fieldList = "Isbn/isbn/authors/authors/numberOfPages/numberOfPages/ID/ID"
            primaryKeyField = "ID"
            nameField = "name"
            promtThenEmpty = "Выбранная книга" 
        
        />
    );
}
