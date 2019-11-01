import App from './app';
import {MakeBusiness} from './les1/makeBusiness.js';

let a = new App(22);
a.show();
console.log("a.a : ",a.a);
console.log("App.static_prop : ",App.static_prop);

let m = new MakeBusiness();
m.showProps();

m.makeBusiness( ['Sam', null]);