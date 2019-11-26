import React from "react";
import ItemList from "./itemList";
import {mount} from "enzyme";

describe('ItemList ',() => {
    // функция получения данных приходит через props (у меня нет)
    // import gotService ....
    // const service=new gotService();

    const gotService = () => {};
    const onItemSelected  = () => {};
    const list = mount (<ItemList  getData={gotService} onItemSelected={onItemSelected}  />);

    it('Click on itemlist - rerender', () => {
        list.setState({charList: [
            {ID : 1,name : "Vasya"},
            {ID : 2,name : "petya"}
        ]});
        list.find('.list-group-item:first-child').simulate('click');
        expect(list.find('ul')).toHaveLength(1);
    });
});