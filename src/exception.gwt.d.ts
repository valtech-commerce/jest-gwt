declare const given: {
	noException: () => void;
};

declare const when: {
	attempting: (closure: Function) => void;
	attemptingAsync: (closure: Function) => Promise<void>;
};

declare const then: {
	shouldHaveThrown: () => void;
	shouldHaveThrownMessageContaining: (message: string) => void;
	shouldNotHaveThrown: () => void;
};

export { given, when, then };
