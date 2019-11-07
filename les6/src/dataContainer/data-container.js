// класс для работы с сервером - работа с данными


const localData = [
    {label : "1Going to learn react", important : true, key : 1},
    {label : "2Второй", important : false, key : 2},
    {label : "3Третий. I need break", important : false, key : 3}
    ]
;

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      // eslint-disable-next-line  
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


class DataWarehouse {
    constructor (props) {
        // на вход поступил массив
        this.container = props;
    }

    

    getData() {
        return {data : this.container};
    }

    addData(newData) {
        const newItem = {label : newData, important : false, key : uuidv4()};
        const data1 = [...this.container, newItem];
        return ( {data : data1} );
    }

}

const data_warehouse = new DataWarehouse(localData);

export default data_warehouse;