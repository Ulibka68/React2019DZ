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
    
    console.log("********************************");
    let storageRef = firebase.storage.ref("decalogo_avpn_1.jpg");

    console.log(storageRef.fullPath);
    console.log(storageRef.name);
    console.log(storageRef.bucket);


    storageRef.getDownloadURL()
    .then(function(url) {
        // Insert url into an <img> tag to "download"
        console.log('url : ',url);
        console.log("====================");
      })
      .catch(function(error) {
      
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        console.error(error.message)
          
      });
}    

export {getDataTest,testImageUrl};