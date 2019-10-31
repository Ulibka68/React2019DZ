
const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

// было
let employersNames = [];
for (var i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].length != '') {
		employersNames.push(employers[i]);
	}
}


for (var i = 0; i < employersNames.length; i++) {
	employersNames[i] = employersNames[i].toLowerCase().trim();
}

console.log('employersNames : ',employersNames);

// стало
let employersNames1 = employers.filter((elm) => {return elm.length > 0;})
    .map((elm) => {return elm.toLowerCase().trim()})
console.log('employersNames1 : ',employersNames1);


var sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

// было
function calcCash(own) {
    own = own || 0;
    var everyCash = Array.prototype.slice.call(arguments);
    var total = own;
    for (var i = 0; i < everyCash[1].length; i++) {
        total += +everyCash[1][i];
    }
    return total;
}

var money = calcCash(null, sponsors.cash);
console.log(money);

// стало
function calcCash1(CashArray,StartVal = 0) {
    return CashArray.reduce((StartVal,elm) => StartVal+elm);
}

const money1 = calcCash1( sponsors.cash);
console.log(money1);



// было
function makeBusiness(owner, director, cash, emp) {
    director = director || 'Victor';
    var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
    emp);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}
makeBusiness.apply(null, ['Sam', null, money, employersNames]);
console.log("========================");

// стало
function makeBusiness1(argum) {
    let [owner, director, cash, emp] = argum;
    director = director || 'Victor';
    let sumSponsors = [...sponsors.eu,...sponsors.rus, 'unexpected sponsor'];
    console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
    emp);
    console.log('And we have a sponsors: ');
    console.log( sumSponsors);
    console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}
makeBusiness1( ['Sam', null, money, employersNames]);


