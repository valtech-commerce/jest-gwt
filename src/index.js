//--------------------------------------------------------
//-- Given-When-Then
//--------------------------------------------------------
const { given: givenException, when: whenException, then: thenException } = require("./exception.gwt");
const { given: givenPackage, when: whenPackage, then: thenPackage } = require("./package.gwt");

const given = { ...givenException, ...givenPackage };
const when = { ...whenException, ...whenPackage };
const then = { ...thenException, ...thenPackage };

module.exports = { given, when, then };
