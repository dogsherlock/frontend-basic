/**
原型（prototype）的本质其实就是一个对象
原型（prototype）的作用是给其他对象提供共享属性

__proto__ 存在于所有对象上，prototype 只存在于函数上
__proto__ 用来表示当前对象的原型对象是什么，在检索属性时方便在原型链上递归向上去查找，实现了 obj.__proto__.__proto__... 原型链
prototype 用来表示使用此构造函数初始化的对象继承自哪个原型对象
__proto__ 并不是 ECMAScript 语法规范的标准，只是浏览器厂商实现的一种便于访问或修改对象内部 [[Prototype]] 的访问器属性，建议使用 Object.getPrototypeOf 替代
prototype 是 ECMAScript 语法规范的标准
原型:
每个对象内部都有一个用来存放该对象原型的内部属性 [[Prototype]]，可以通过 obj.__proto__ 或 Object.get​PrototypeOf / Object.setPrototypeOf 来读写。
原型的本质是对象，每个原型对象自身也可能存在原型，以此类推形成原型链。
原型链的长度是有限的，且最终一定指向 null。
所有原型对象的根原型对象是 Object 原型对象, 它被内置在 Object.prototype 属性上。
每个函数自身都会有一个 prototype 属性，用来给其创建的对象赋予原型（即设置其创建的对象的内部属性 [[Prototype]]）。
函数 prototype 属性值的 constructor 属性指向自身。
构造函数 Function 的 prototype 属性和其原型（__proto__）都指向 Function 原型对象。
Function 原型对象 比较特殊，是一个匿名函数，它可以先于/独立于 Function 产生，其原型依然是 Object 原型对象
 */

// 创建构造函数Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.printName = function printName() {
    console.log(`my name is ${this.name}`);
}
const mary = new Person("mary", 20);
// 对象 mary 内部的原型属性是指向其构造函数 Person 上的 prototype 属性的
console.log(mary.__proto__ === Person.prototype)
// 对象内部的 [[Prototype]] 只是隐式引用了构造函数上的属性 prototype 的值，即原型对象当我们去变更原型对象上的属性时，该对象内部的原型同时也会被更改
mary.printName()