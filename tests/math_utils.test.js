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
