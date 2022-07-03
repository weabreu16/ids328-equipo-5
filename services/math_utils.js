const { ESLint } = require('eslint');

function sum( ...args ) {
    let sum = 0;

    for ( let num of args )
        sum += num;

    return sum;
};

function avg( ...args ) {
    let count = args.length;

    let sum_result = sum( ...args );

    return sum_result / count;
}

module.exports = { sum, avg };
