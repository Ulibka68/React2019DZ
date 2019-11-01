class App {

    constructor(a) {
        this.a = a;
    }

    static static_prop = 220;

    state = {
        showModal: false
    }

    show = () => {
        console.log('state : ',this.state);
    }

}

export default App;