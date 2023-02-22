//--------------------------------------------------------
//-- Package
//--------------------------------------------------------
const path = require("node:path");
const { fsSync } = require("@valtech-commerce/fs");

const given = {};
const when = {};
const then = {};

let root;
let config;
let namePattern;
let keywords;

//-- Given - Reset
given.noPackageRoot = () => {
	root = undefined;
};

given.noPackageConfig = () => {
	config = undefined;
};

given.noPackageNamePattern = () => {
	namePattern = undefined;
};

given.noPackageKeywords = () => {
	keywords = undefined;
};

//-- Given - Values
given.packageRoot = (value) => {
	root = value;
};

given.packageNamePattern = (value) => {
	namePattern = value;
};

given.packageKeywords = (value) => {
	keywords = value;
};

//-- When - Package
when.packageIsParsed = () => {
	config = fsSync.readJson(path.join(root, "package.json"));
};

//-- Then - Config
then.packageNameShouldBeValid = () => {
	expect(config.name).toMatch(namePattern);
};

then.packageKeywordsShouldBeValid = () => {
	expect(config.keywords).toEqual(expect.arrayContaining(keywords));
};

then.packageExportsShouldExist = () => {
	Object.values(config.exports).forEach((file) => {
		expect(fsSync.exists(path.join(root, file))).toBe(true);
	});
};

module.exports = { given, when, then };
