// 2 файл: переменная sponsors, money и функция calcCash.

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(CashArray,StartVal = 0) {
    return CashArray.reduce((StartVal,elm) => StartVal+elm);
}

const money = calcCash( sponsors.cash);

export {sponsors, calcCash, money};