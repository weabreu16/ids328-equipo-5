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

function median( ...args ) {
    let count = args.length;

    args.sort();

    let medianIndex = Math.round( count / 2 ) - 1;

    return args[ medianIndex ];
}

module.exports = { sum, avg, median };
