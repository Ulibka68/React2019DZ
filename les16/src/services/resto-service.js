import firebase from "../firebase/firebase";

export default class RestoService {
    // возвращает promice
    getMenuItems() {
        return firebase.getDataFB();
    }
}