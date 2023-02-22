//--------------------------------------------------------
//-- Standards tests
//--------------------------------------------------------
import { given, when, then } from "./package.gwt";

describe(`Validate package.json`, () => {
	beforeEach(() => {
		given.noPackageRoot();
		given.noPackageConfig();
		given.noPackageNamePattern();
		given.noPackageKeywords();
	});

	test(`Ensure name is valid`, () => {
		given.currentRoot();
		given.currentNamePattern();
		when.packageIsParsed();
		then.packageNameShouldBeValid();
	});

	test(`Ensure keywords are valid`, () => {
		given.currentRoot();
		given.currentKeywords();
		when.packageIsParsed();
		then.packageKeywordsShouldBeValid();
	});

	test(`Ensure exports endpoints exist`, () => {
		given.currentRoot();
		when.packageIsParsed();
		then.packageExportsShouldExist();
	});
});
