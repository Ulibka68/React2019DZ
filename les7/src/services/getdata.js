async function getData(url,baseurl) {
    try {
        // url = 'https://jsonplaceholder.typicode.com/posts/1';

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
        if ( regex.length > 1) { lastPage = regex[1]++;}


        const json = await responce.json();
        return { JSON_promice : json , lastPage : lastPage};
    } catch (error) {
        console.error('Возникла проблема с вашим fetch запросом: ', error.message);
    }
}

class DataIceAndFire {
    baseUrl = 'https://www.anapioficeandfire.com/api/';
    resources = ['characters','books','houses'];

    //  ?page
    //  ?pageSize
    //  ?page=1&pageSize=10

    getApiData (name,page,pageSize) {
        const url = `${this.baseUrl}${name}?page=${page}&pageSize=${pageSize}`;
        return getData(url,this.baseUrl);
    }

    testApi1() {
        let a = dataIceAndFire.getApiData('houses',1,10);
        a.then( data => {
            console.log(data)
            console.log(data.JSON_promice[0]);
        });
    }
}

const dataIceAndFire = new DataIceAndFire();

export default dataIceAndFire;

/*
characters:
{
    "url": "https://www.anapioficeandfire.com/api/characters/2135",
    "name": "Zekko",
    "gender": "Male",
    "culture": "Dothraki",
    "born": "",
    "died": "",
    "titles": ["Khal"],
    "aliases": [""],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [],
    "books": ["https://www.anapioficeandfire.com/api/books/8"],
    "povBooks": [],
    "tvSeries": [""],
    "playedBy": [""]
}
*/