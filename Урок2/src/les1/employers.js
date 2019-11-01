// 1 файл: переменная employers, employersNames и манипуляции с ней.


const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames_olalala = employers.filter((elm) => {return elm.length > 0;})
    .map((elm) => {return elm.toLowerCase().trim()});

export {employers, employersNames_olalala};