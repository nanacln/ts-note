/* 1.变量类型声明和初始化 */

let a: number;

// a 的类型设置为了number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
a = NaN;
a = Infinity;
// a = 'hello'; // 此行代码会报错，因为变量a的类型是number，不能赋值字符串

let b: string;
b = 'hello';
// b = 123;

// 声明变量的同时直接进行赋值
// let c: boolean = false;

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let c = false;
c = true;

/* 2.函数声明 */

// JS中的函数是不考虑参数的类型和个数的
// function sum(a, b){
//     return a + b;
// }

// console.log(sum(123, 456)); // 579
// console.log(sum(123, "456")); // "123456"

function sum(a: number, b: number): number {
    return a + b;
}

let res = sum(123, 345);
// let res = sum(123, '456'); // 报错

/* 3.字面量声明 */

// 下面的语句相当于定义了一个a3常量；
let a3: 10;
// a3 = 11; // 尝试将a3赋值为11，报错；

/* 4.联合类型 */

let b4: "male" | "female";
b4 = "male";
b4 = "female";

let c4: boolean | string;
c4 = true;
c4 = 'hello';

/* 5.组合类型 */

// &表示同时满足的类型
let a5: { name: string } & { age: number };
a5 = {name: 'haha', age: 18};

/* 6.其他常见基本类型(除了：number、string、bool之外) */

/* 6.1 Any */

// any 表示的是任意类型，一个变量设置类型为any后相当于：对该变量关闭了TS的类型检测！
// 使用TS时，强烈不建议使用any类型
// let d: any;

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
let a61;
a61 = 10;
a61 = 'hello';
a61 = true;

/* 6.2 Unknown */
// Unknown不能读取任何属性、方法

let a62: unknown;
a62 = 10;
a62 = 'hello';
a62 = true;
a62 = { name: 'haha' };
a62.name  // 报错

/* 6.2.2 Unknown和Any对比 */

let s: string = 'hello';
// a61的类型是any，它可以赋值给任意变量
// any赋值给其他变量时，TS也会同时关闭对那个赋值变量的类型检查！
s = a61;

// a62的类型是unknown，它不能赋值给一个确定类型！
// s = a62;

// 即：unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
if (typeof a62 === "string") {
    s = a62;
}

/* 6.3 void */
let v2: void = undefined;
v2 = null; // 报错 非严格模式下不报错

// void 用来表示空，主要用于函数中
// 以函数为例，表示没有返回值的函数：
function fn(): void {
}

/* 6.4 undefined */

// never 表示永远不会返回结果（连undefined都没有）[较少使用]
// 下面的函数没有返回值（连undefined都没有），仅抛出error
function fn2(): never {
    throw new Error('报错了！');
}
// 死循环也是never类型
function xm(): never{
    while(true){}
}
type C = string&number
// never使用联合类型会被忽略
type A = void | number | never

type B = '唱' | '跳' | 'rap'
function hobby(value: B) {
    switch (value) {
        case '唱':
            break
        case '跳':
            break
        case 'rap':
            break
        default:
        //兜底
            const error: never = value
            break
    }
}

// void 空类型 never 永远不会返回结果


// any 任意类型 unknown 不确定的类型
// 1、顶级类型：any unknown
// 2、Object
// 3.Nubmer String Boolean
// 4、number string boolean
// 5、  1 '小满' false
// 6、never
// 上面的包含下面的，上面的类型可以给下面的类型赋值(unknown 只能赋值给自身或者any)

//左边的值 会作为右边类型的子类型
type num1 = never extends 1?1:0

/* 6.5 object */
// Object
let a651: Object;
// 所有原始类型和对象类型都指向这个Object,它包含了所有值
a651 = 1;
a651 = 'hello';
a651 = true;
a651 = {};
a651 = [];
a651 = function () {
};

// object表示一个js对象类型 不包含原始类型
let a65: object;
a65 = {};
a65 = function () {
};

// {} 用来申明类型时跟Object一样
let a652: {}
a652 = 1;
a652 = []
a652=()=>123

// {} 用来指定对象中可以包含哪些属性
// 语法：
//   {属性名:属性值,属性名:属性值}
// 在属性名后边加上?，表示属性是可选的
let b65: { name: string, age?: number };
b65 = {name: 'haha'};
b65 = {name: '孙悟空', age: 18};

// [propName: string]: any 表示任意类型的属性
// 所以下面定义了一个必须包含name属性，其他属性随意的类型
let c65: { name: string, [propName: string]: any };
c65 = {name: '猪八戒', age: 18, gender: '男'};

/* 6.5.2 函数对象 */

/*
*   设置函数结构的类型声明：
*       语法：(形参:类型, 形参:类型 ...) => 返回值
*/
let d65: (a: number, b: number) => number;
// 声明了类型之后，在定义时可以不再指出类型
d65 = function (n1, n2) {
    return n1 + n2
}
// 也可以指出类型
d65 = function (n1: number, n2: number): number {
    return n1 + n2
}

// 下面的一些定义都是错误的！
// d65 = function (n1: string, n2: number): number {
//     return n1 + n2
// }
// d65 = function (n1: number, n2: number, n3: number): number {
//     return n1 + n2 + n3;
// }

// 但是下面这个是对的！
d65 = function (n1: number): number {
    return n1
}

/* 6.6 数组 */

/*
*   数组的类型声明：
*       类型[]
*       Array<类型>
*/

// 例如：string[] 表示字符串数组
let e66: string[];
e66 = ['a', 'b', 'c'];

// number[] 表示数值数组

let f66: number[];

// 也可以使用下面的声明方式
let g66: Array<number>;
g66 = [1, 2, 3];

// 定义多维数组
let arr: number[][] = [[1],[2]]
/* 6.7 元组 */

/*
*   元组，元组就是固定长度的数组
*       语法：[类型, 类型, 类型]
*   相比于数组，元组的性能更高一些
*/
let a67: [string, number];
a67 = ['hello', 123];
const array:[x:number,y?:boolean] = [1]

/* 6.8 枚举 */
// 自增长 +1
enum Gender {
    Male,
    Female,
}

let a68: { name: string, gender: Gender };
a68 = {
    name: 'hello',
    gender: Gender.Male
}
console.log(a68.gender === Gender.Male);

enum Hwtype {
    online = 110,
    paper,
    spoken = 220,
    card
}

/* 7.类型别名 */

// 使用关键字type
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

k = 2;
// k = 6 // error!

/* 8.类型断言 */

// 类型断言，用来帮助编译器判断变量的实际类型
/*
* 语法：
*   变量 as 类型
*   <类型>变量
*
* */

// 有些情况下，变量的类型对于我们来说是很明确
// 但是TS编译器却并不清楚
// 此时，可以通过类型断言来告诉编译器变量的类型
// 断言有两种形式：

// 8.1：变量 as 类型
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// 8.2：<类型>变量
let strLength2: number = (<string>someValue).length;

function getLen(a: number | string): number{
    return (a as string).length
}
getLen(5)  //这个会报错，类型断言会欺骗编辑器，要慎用

// 非空断言
let div = document.querySelector('div')!

// readonly
const arr1: readonly number[] = [1, 2, 3];
arr1[0] = 10; // 报错
