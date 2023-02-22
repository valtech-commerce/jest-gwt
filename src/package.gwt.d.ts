declare const given: {
	noPackageRoot: () => void;
	noPackageConfig: () => void;
	noPackageNamePattern: () => void;
	noPackageKeywords: () => void;
	packageRoot: (value: string) => void;
	packageNamePattern: (value: RegExp) => void;
	packageKeywords: (value: string[]) => void;
};

declare const when: {
	packageIsParsed: () => void;
};

declare const then: {
	packageNameShouldBeValid: () => void;
	packageKeywordsShouldBeValid: () => void;
	packageExportsShouldExist: () => void;
};

export { given, when, then };
