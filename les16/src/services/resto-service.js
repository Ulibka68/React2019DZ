import firebase from "../firebase/firebase";
import store from "../store";

export default class RestoService {

    categoryUrl = {};
    categoryUrl_isLoaded = false;

    // возвращает promice
    getMenuItems(filteredMenuKey) {
       
        return firebase.getDataFB(filteredMenuKey);
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
        const state = store.getState();
        console.log(state.user.uid);

        const uid = state.user.uid;
        const curDate = Date.now();
        let today = new Date(curDate);

        firebase.db.collection('orders').doc(uid).collection('userOrders').add( 
            {
                orderDate : curDate,
                orderDateString : today.toLocaleDateString() + " " + today.toLocaleTimeString(),
                ItemList : state.itemsInBasket
            }
        )
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            store.dispatch({type : "CART_CLEAR_ALL_ITEMS"});
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });


    }

}