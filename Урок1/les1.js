
const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];


// стало
let employersNames1 = employers.filter((elm) => {return elm.length > 0;})
    .map((elm) => {return elm.toLowerCase().trim()})


var sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};


// стало
function calcCash1(CashArray,StartVal = 0) {
    return CashArray.reduce((StartVal,elm) => StartVal+elm);
}

const money1 = calcCash1( sponsors.cash);


// стало
function makeBusiness1(argum) {
    let [owner, director, cash, emp] = argum;
    director = director || 'Victor';
    let sumSponsors = [...sponsors.eu,...sponsors.rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.dir( sumSponsors);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}
makeBusiness1( ['Sam', null, money1, employersNames1]);


