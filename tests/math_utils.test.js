const math_utils = require('../services/math_utils');

test('add 3 and 5 to be 8', () => {
    expect( math_utils.sum( 3, 5 ) ).toBe(8);
});

test('sum values in array [3, 5, 10] to be 18', () => {
    expect( math_utils.sum( ...[3, 5, 10] ) ).toBe(18);
});

test('add 3 to be 3', () => {
    expect( math_utils.sum( 3 ) ).toBe(3);
});

test("add '3' and '5' to be '35'", () => {
    expect( math_utils.sum( '3', '5' ) ).toBe('035');
});

test("avg of 3, 1 to be 2", () => {
    expect( math_utils.avg( 3, 1 ) ).toBe(2);
});

test('avg of 6, 2, 1 to be 3', () => {
    expect( math_utils.avg( 6, 2, 1 ) ).toBe(3);
});

test("avg of '2','1' to be 10.5", () => {
    expect( math_utils.avg( '2', '1' ) ).toBe(10.5);
});

test("avg of '21','a' to be NaN", () => {
    expect( math_utils.avg( '21', 'a' ) ).toBe(NaN);
});

test("median of 2, 3, 1 to be 2", () => {
    expect( math_utils.median( 2, 3, 1 ) ).toBe(2);
});

test("median of 2, 2, 3, 1 to be 2", () => {
    expect( math_utils.median( 2, 2, 3, 1 ) ).toBe(2);
});