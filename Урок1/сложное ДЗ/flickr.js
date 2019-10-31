
// это секретный ключ. надо получать самостоятельно
//  Как получить написано тут в ApiKeys (надо предварительно зарегистрироваться во Flickr)
// https://www.flickr.com/services/api/
// пункт меню -  Api Keys

// В оригинале присутствует модуль apikey.js с функцией (одна строка) :
// 
// const getApiKey = () => '0009617c0a5018ae4ee610b0c800000';
     
// https://javascript.info/async-iterators-generators
// По хорошему надо из него сделать асинхронный генератор

// параметры вызова поиска фотографий описаны тут :
// https://www.flickr.com/services/api/explore/flickr.photos.search
// функция возвращает promise
 function flickrTagSearchPromice (tag, page=1) {
  const apiKey = getApiKey();
  return fetch(
      'https://api.flickr.com/services/rest/' +
      '?method=flickr.photos.search' +
      '&api_key=' + apiKey +
      '&page=' + page +
      '&per_page=50'+
      '&tags=' + tag +
      // '&text=' + tag +
      '&content_type=1'+
      '&sort=relevance'+
      '&in_gallery=true'+
      // '&is_commons=true'+
      '&tag_mode=AND' +
      '&format=json' +
      '&nojsoncallback=1'
  )     
  .then(response => { 
    if (response.ok)  { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа 
        return response.json(); // json тоже вернет promice

    } else {
      alert('Ошибка HTTP :' + response.status);
    }
 })
.catch(err => {console.log('Fetch Error :',err)});

}



 // Один элементЖ
            // 0:
            // farm: 66
            // id: "48971887813"
            // isfamily: 0
            // isfriend: 0
            // ispublic: 1
            // owner: "16854222@N05"
            // secret: "efdce9d68c"
            // server: "65535"
            // title: "Paddling Towards New Adventures"
// получить URL фото
function GetPhotoURL(photo) {

  return (  `https://farm${photo.farm}.staticflickr.com/` +
    `${photo.server}/${photo.id}_${photo.secret}_q.jpg`);
}       



const ImgArray = [];
const PromiseArray = [];

function imgLoaded(evnt){
  console.log('img loaded : ' ,evnt.target.dataset.title);
  let promise_resolve = evnt.target.promise_resolve;
  promise_resolve(evnt.target.dataset.title);
};

function insertCacheImage(photo) {
  
  let p2 = new Promise ( function(resolve,reject) {
  
    let img2 = document.createElement('img'); // Use DOM HTMLImageElement
    img2.src = GetPhotoURL(photo);
    img2.dataset.title = photo.title;
    img2.promise_resolve = resolve;
    img2.onload = imgLoaded;

    ImgArray.push(img2);
    });

    // положим promise
    PromiseArray.push (p2);
    
}

async function GetPhotoUrls() {

  let ft = await flickrTagSearchPromice('cats',2);

  // console.log(ft);
  // let UrlPhotos = ft.photos.photo.map(photo => GetPhotoURL(photo));
  // console.dir (UrlPhotos);
  // return UrlPhotos;
  
  ft.photos.photo.forEach(element => {
       insertCacheImage(element);
  });

  Promise.all(PromiseArray).then((val)=>{
    // все изображения загрузились
    console.log('Все изображения загружены');
   
    let i = 1;
    ImgArray.forEach( img => {
      let container=document.createElement('div');
      container.classList.add('imgContainer');
      container.appendChild(img);
      let p = document.createElement('p');
      p.classList.add("imgDesc");
      p.textContent = i++;
      container.appendChild(p);
      document.body.appendChild(container);
    });
  });
}

