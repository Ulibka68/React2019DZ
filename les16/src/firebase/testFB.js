import firebase from "./firebase";

function getDataTest() {

    firebase.db.collection("menu")
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(
                (doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    
                }
            );
            });
    };


function testImageUrl() {    
    firebase.getImageUrl("salat-cezar.jpg")
    .then ( (url) => {console.log(url)});
}



export {getDataTest,testImageUrl};