import firebase from "./firebase";

export default function getDataTest() {

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


