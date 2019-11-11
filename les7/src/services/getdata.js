
async function getData(url,baseurl) {
    try {
        // console.log(url);

        const responce = await fetch(url);
        if (!responce.ok) {
            throw new Error('Ответ сети был не ok.');
        }
        
        // console.log(responce.headers.get('link'));
        // let i=1;
        let urlResponce = '';
        for (let value of responce.headers.values()) {
            // console.log(i++);
            // console.log(value); 
            if (value.includes(baseurl)) {
                urlResponce = value;
                break;
            }
         }

        //  console.log('urlResponce : ',urlResponce);
         // найти номер последней страницы с данными
         const regex =urlResponce.match( /[\w?=&>]+page=([\d]+)&[\w?=&>]+; rel="last"/ );
        //  console.log(regex);
        //  console.log(regex[1]);

        let lastPage=0;
        try {
            if ( regex.length > 1) { lastPage = regex[1]++;}
        } finally {};


        const json = await responce.json();
        return { JSON_promice : json , lastPage : lastPage};
    } catch (error) {
        console.error('Возникла проблема с вашим fetch запросом: ', error.message);
    }
}

async function getDataSimple(url) {

    // обработку ошибок отсюда необходимо передать на уровень компонента - где она будет подхватываться и выводиться в браузер

    // console.log(url);
    // try {

        const responce = await fetch(url);
        if (!responce.ok) {
            throw new Error('Ответ сети был не ok.');
        }

        const json = await responce.json();
        return { JSON_promice : json , lastPage : 0};

    // } catch (error) {
    //     console.error('Возникла проблема с вашим fetch запросом: ', error.message);
    // }
}

class DataIceAndFire {

    constructor() {
        this.getCountPages();
    }

    baseUrl = 'https://www.anapioficeandfire.com/api/';
    resources = ['characters','books','houses'];

    countCharactersPages=0;
    countBooksPages =0;
    countHousesPages = 0;

    countCharacters=0;
    countBooks =0;
    countHouses = 0;


    //  ?page
    //  ?pageSize
    //  ?page=1&pageSize=10

    getApiData (name,page,pageSize) {
        const url = `${this.baseUrl}${name}?page=${page}&pageSize=${pageSize}`;
        return getData(url,this.baseUrl);
    }

    getApiNumData (resourceNum,page,pageSize) {
        const name = this.resources[resourceNum];
        const url = `${this.baseUrl}${name}?page=${page}&pageSize=${pageSize}`;
        return getData(url,this.baseUrl);
    }

    getApiNumDataID (resourceNum,ID) {
        const name = this.resources[resourceNum];
        const url = `${this.baseUrl}${name}/${ID}`;
        return getDataSimple(url,this.baseUrl);
    }

    getRandomCharacter () {
        if (this.countCharacters === 0 ) {
            console.log('нет count');
            return  Promise.resolve( {});
        } else {
            let ID = Math.floor(Math.random()* (this.countCharacters - 25) +25);
            
            // ***********************************************************************************************
            // Чтобы получить ошибку необходимо раскоментировать строку
            // ID = 10000000;
            
            
            console.log('ID ======== ',ID);
            return (this.getApiNumDataID(0,ID)); 
        }
    }

    transformCharacter(data = {}) {
        // console.log(data);
        let {name, gender, born, died, culture } = data;
        culture = culture ? culture:null;
        name = name ? name:null;
        gender = gender ? gender:null;
        born = born ? born:null;
        died = died ? died:null;

        return {name, gender, born, died, culture }
    }                


    transformHouse(data = {}) {
        let {name,region, words, titles, overlord, ancestralWeapons} =data;
        return  {name,region, words, titles, overlord, ancestralWeapons} ;
    }

    transformBook(data = {}) {
        let {name, numberOfPages,publiser,released} = data;
        return {name, numberOfPages,publiser,released} ;
    }

    // получить количество страниц
    
    getCountPages() {
        this.getApiNumData(0,1,10)
            .then (data =>{this.countCharactersPages=data.lastPage; this.countCharacters = this.countCharactersPages*10;} );

        this.getApiNumData(1,1,10)
            .then (data =>{
                        this.countBooksPages=data.lastPage;
                        this.countBooks = this.countBooksPages*10;
                    } );

            this.getApiNumData(1,1,10)
            .then (data =>{this.countHousesPages=data.lastPage; this.countHouses=this.countHousesPages*10;} );

        }

    testApi1() {

        // let c =getDataSimple2('https://www.anapioficeandfire.com/api/');
        // console.log(c);

        // let a = dataIceAndFire.getApiNumData(0,1,10);
        // // console.log(a);
        // a.then( data => {
        //     console.log(data)
        //     console.log(data.JSON_promice[0]);
        // });

        // setTimeout(() => {
        //     console.log('delay --');
        //     dataIceAndFire.getRandomCharacter()
        //         .then( data => console.log(data));
        // },3000);
    }
}

const dataIceAndFire = new DataIceAndFire();

export default dataIceAndFire;

