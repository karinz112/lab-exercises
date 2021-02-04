var calculator = require("../app/calculator");
var assert = require("chai").assert;

describe("add", function() {
    function makeAddTest(i,j, expected) {

        it(`Addition ${i} to ${j} equals to ${expected}`, () => {
            assert.equal(calculator.add(i,j), expected);
        });
    }

    makeAddTest(5,2,7);
    makeAddTest(5,2,8);

});

describe("sub", function() {
    function makeSubTest(i,j, expected) {

        it(`Subtraction ${i} in ${j} equals to ${expected}`, () => {
            assert.equal(calculator.sub(i,j), expected);
        });
    }

    makeSubTest(5,2,3);
    makeSubTest(5,2,5);
})

describe("mul", function() {
    function makeMulTest(i,j, expected) {

        it(`Multiplication ${i} in ${j} equals to ${expected}`, () => {
            assert.equal(calculator.mul(i,j), expected);
        });
    }

    makeMulTest(5,2,10);
    makeMulTest(5,2,12);
})

describe("div", function() {
    function makeDivTest(i,j, expected) {

        it(`Division ${i} in ${j} equals to ${expected}`, () => {
            assert.equal(calculator.div(i,j), expected);
        });
    }

    makeDivTest(10,2,5);
    makeDivTest(10,2,2);
})