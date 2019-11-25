import firebase from "../firebase/firebase";

export default class RestoService {

    categoryUrl = {};

    // возвращает promice
    getMenuItems() {
        return firebase.getDataFB();
    }

    // прочитать категории и определить URL
    async getCategoryIcons() {
        let querySnapshot = await firebase.db.collection("category").get();
          
            querySnapshot.forEach(
                (doc) => {
                    const {catName, urlName} = doc.data();
                    this.categoryUrl[catName] = urlName;

                    // firebase.getImageUrl(urlName).then (
                    //     (url) => {
                    //                 this.categoryUrl[catName] = url;
                    //                 // console.log(this.categoryUrl);
                    //             }
                    // );
                }
            );

            // console.log(this.categoryUrl);
        }


}