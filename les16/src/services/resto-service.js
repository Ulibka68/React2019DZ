import firebase from "../firebase/firebase";
import store from "../store";

export default class RestoService {

    categoryUrl = {};
    categoryUrl_isLoaded = false;

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
                    this.categoryUrl_isLoaded = true;

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

    putOrderToFirebase() {
        const user = store.getState().user;
        console.log(user.uid);


    }

}