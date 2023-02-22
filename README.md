# @valtech-commerce/jest-gwt

[![npm][npm-badge]][npm-url]
[![npms.io: Score][npmsio-badge]][npmsio-url]
[![libraries.io: SourceRank][librariesio-badge]][librariesio-url]
[![Tests][tests-badge]][tests-url]
[![License: MIT][license-badge]][license-url]

> [Given-When-Then](https://en.wikipedia.org/wiki/Given-When-Then) helper for [Jest](https://jestjs.io/).

## Install

```
$ npm install @valtech-commerce/jest-gwt
```

## Usage

Import the package in your Jest test files and extends the base GWT.

```js
//--------------------------------------------------------
//  xyz.gwt.js
//--------------------------------------------------------
import path from "node:path";
import { given as givenBase, when as whenBase, then as thenBase } from "@valtech-commerce/jest-gwt";

const given = { ...givenBase };
const when = { ...whenBase };
const then = { ...thenBase };

let rootPath;

given.noRootPath = () => {
	rootPath = undefined;
};

given.rootPath = (value) => {
	rootPath = value;
};

when.packageIsLoaded = () => {
	when.attempting(() => {
		require(path.join(rootPath, "package.json"));
	});
};

export { given, when, then };

//--------------------------------------------------------
//  xyz.test.js
//--------------------------------------------------------
import { given, when, then } from "./xyz.gwt";

describe("Validate package.json", () => {
	beforeEach(() => {
		given.noException();
		given.noRootPath();
	});

	test("Ensure package can be loaded", () => {
		given.rootPath("..");
		when.packageIsLoaded();
		then.shouldNotHaveThrown();
	});
});
```

## Helpers

The package comes with multiple helpers. If you want them all, import the root package `@valtech-commerce/jest-gwt`.

### Exception `@valtech-commerce/jest-gwt/exception`

> Check for thrown exceptions

#### `given.noException()`

Reset exception listener

#### `when.attempting(closure: Function)`

Listen for error when executing closure

#### `when.attemptingAsync(closure: Function)`

Listen for error when executing asynchronous closure

#### `then.shouldHaveThrown()`

Exception has been thrown

#### `then.shouldHaveThrownMessageContaining(message: string)`

Exception, with message excerpt, has been thrown

#### `then.shouldNotHaveThrown(closure: Function)`

No exception has been thrown

### Package `@valtech-commerce/jest-gwt/package`

> Tests for package.json

#### `given.noPackageRoot()`

Reset root path

#### `given.noPackageConfig()`

Reset parsed config

#### `given.noPackageNamePattern()`

Reset name pattern

#### `given.noPackageKeywords()`

Reset keywords

#### `given.packageRoot(value: string)`

Specify the root path of the package.json

#### `given.packageNamePattern(value: RegExp)`

Specify a pattern for the package name

#### `given.packageKeywords(value: string[])`

Specify mandatory keywords

#### `when.packageIsParsed()`

Parse the package.json file

#### `then.packageNameShouldBeValid()`

Package name matches the defined name pattern

#### `then.packageKeywordsShouldBeValid()`

Package keywords contain at least the defined keywords

#### `then.packageExportsShouldExist()`

Package exports point to existing files

## Documentation

See the [Changelog](CHANGELOG.md) to see what has changed.

## Contribute

See the [Contributing Guidelines](CONTRIBUTING.md) for ways to get started.

See the [Support Guide](SUPPORT.md) for ways to get help.

See the [Security Policy](SECURITY.md) for sharing vulnerability reports.

This project has a [Code of Conduct](CODE_OF_CONDUCT.md).
By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](LICENSE) © [Valtech Canada inc.](https://www.valtech.ca/)

[npm-badge]: https://img.shields.io/npm/v/@valtech-commerce/jest-gwt?style=flat-square
[npmsio-badge]: https://img.shields.io/npms-io/final-score/@valtech-commerce/jest-gwt?style=flat-square
[librariesio-badge]: https://img.shields.io/librariesio/sourcerank/npm/@valtech-commerce/jest-gwt?style=flat-square
[tests-badge]: https://img.shields.io/github/actions/workflow/status/valtech-commerce/jest-gwt/tests.yaml?style=flat-square&branch=main
[license-badge]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[npm-url]: https://www.npmjs.com/package/@valtech-commerce/jest-gwt
[npmsio-url]: https://npms.io/search?q=%40valtech-commerce%2Fjest-gwt
[librariesio-url]: https://libraries.io/npm/@valtech-commerce%2Fjest-gwt
[tests-url]: https://github.com/valtech-commerce/jest-gwt/actions/workflows/tests.yaml?query=branch%3Amain
[license-url]: https://opensource.org/licenses/MIT
