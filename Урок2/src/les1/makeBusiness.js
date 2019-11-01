// 3 файл, результирующий: функцию makeBusiness превратить в класс, у которого будет метод для вывода всей информации в консоль.
//  Здесь же создать экземпляр класса, который будет использовать полученные данные.

import {employers, employersNames_olalala as employersNames} from "./employers.js";
import * as SponsorsA from "./sponsors.js";

class MakeBusiness {
        
    props = {employers,employersNames};
    propsSponsor = {sponsors : SponsorsA.sponsors, calcCash : SponsorsA.calcCash, money : SponsorsA.money};

    showProps() {
        console.log("employers : ");
        console.log(employers);
        console.log("employersNames : ");    
        console.log(employersNames);    
    }

    makeBusiness(argum) {
        let [owner, director] = argum;
        let cash = this.propsSponsor.money;
        let emp = this.props.employersNames;
        director = director || 'Victor';
        let sumSponsors = [...this.propsSponsor.sponsors.eu,...this.propsSponsor.sponsors.rus, 'unexpected sponsor'];
        console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
        console.log('And we have a sponsors: ');
        console.dir( sumSponsors);
        console.log(`Note. Be careful with ${this.propsSponsor.sponsors.eu[0]}. It's a huge risk.`);
    }
    
}

export {MakeBusiness};

// makeBusiness1( ['Sam', null, money1, employersNames1]);