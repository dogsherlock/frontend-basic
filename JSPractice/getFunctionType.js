/**
 * judge a function's type and return it.
 * https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-function-constructor
 */
function getTypeOfFunction(fn) {
    if (fn.constructor.name === 'AsyncFunction') {
        return 'Async Function';
    } else if (fn.constructor.name === 'GeneratorFunction') {
        return 'Generator Function';
    } else if (fn.constructor.name === 'Function') {
        return 'Sync Function';
    } else {
        return 'Not a function';
    }
}

function a() {}
function* b() {}
async function c() {}
const d = () => {};
const e = async () => {};

console.log(`a is a ${getTypeOfFunction(a)}`);
console.log(`b is a ${getTypeOfFunction(b)}`);
console.log(`c is a ${getTypeOfFunction(c)}`);
console.log(`d is a ${getTypeOfFunction(d)}`);
console.log(`e is a ${getTypeOfFunction(e)}`);