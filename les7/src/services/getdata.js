async function getData(url) {
    try {
        // url = 'https://jsonplaceholder.typicode.com/posts/1';

        const responce = await fetch(url);
        if (!responce.ok) {
            throw new Error('Ответ сети был не ok.');
        }
        const json = await responce.json();
        return JSON.stringify(json);
    } catch (error) {
        console.error('Возникла проблема с вашим fetch запросом: ', error.message);
    }
}

class DataIceAndFire {
     baseUrl='';
}

const dataIceAndFire = new DataIceAndFire();

export default dataIceAndFire;