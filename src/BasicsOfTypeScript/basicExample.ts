// Quick example of

function foo(bar: string) {
	return 'Hello, ' + bar;
}

let baz = '123';

// In TypeScript a constant is a variable that cannot be changed (immutable).
// A constant is defined using the const keyword.
// A constant variable must be initialized at the time of declaration.
// So could not be reassigned on line 15 for example.
// const baz = '123';

console.log(foo(baz));

baz = 'ABC';

console.log(foo(baz));
