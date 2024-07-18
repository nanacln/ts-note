/*
function fn(a: any): any{
    return a;
}
*/

/*
 * 在定义函数或是类时，如果遇到类型不明确就可以使用泛型
 */
function fn<T>(a: T): T {
    return a;
}

/* I.可以直接调用具有泛型的函数 */
// 1.不指定泛型，TS可以自动对类型进行推断
let result = fn(10);
// 2.指定泛型
let result2 = fn<string>('hello');

/* II.泛型可以同时指定多个 */
function fn2<T, K>(a: T, b: K): T {
    console.log(b);
    return a;
}

fn2<number, string>(123, 'hello');
function test<T, K>(a: T, b: K): K {
    return b;
}

test<number, string>(10, "hello");
test(19,'world')

/* III.限制泛型范围 */
interface Inter {
    length: number;
}

// T extends Inter 表示泛型T必须时Inter实现类（子类）
function fn3<T extends Inter>(a: T): number {
    return a.length;
}

fn3({ length: 10, age: 23 });
fn3('hello');
fn3([1, 2, 3]);

/* Ⅳ.类中使用泛型 */
class MyClass<T> {
    name: T;

    constructor(name: T) {
        this.name = name;
    }
}

const mc = new MyClass<string>('孙悟空');


// interface 和type也能使用泛型

type A<T> = string | number | T
let a: A<boolean> = 1
let a1: A<boolean> = true

interface B<T> {
    name: T
}
let b: B<string> = { name: 'hello' }

// 泛类约束

// Original type
interface MyType {
    prop1: string;
    prop2: number;
    prop3: boolean;
}

// Making all properties optional
type PartialMyType = Partial<MyType>;


// Making all properties required again
type RequiredPartialMyType = Required<PartialMyType>;

// Making all properties readonly
type ReadonlyMyType = Readonly<RequiredPartialMyType>;

let myType: ReadonlyMyType = {
    prop1: 'Hello',
    prop2: 123,
    prop3: true
};
myType.prop1 = 'World'; // Error: Cannot assign to 'prop1' because it is a read-only property.

// keyof 获取对象类型的所有键名的联合类型
type PartialMyType2<T extends object> = {
    [Key in keyof T]?: T[Key]
}
type B2 = PartialMyType2<MyType>
// 以上可以实现的就是Partial的用法

let obj = {
    name: '小明',
    age: 12,
    girl: false,
    hello:()=>'hihi'
}
type Key = keyof typeof obj
//获取对象上的属性值 约束访问对象上的key，若访问不存在的属性grade则报错
function ob<T extends object, K extends keyof T>(obj: T, key: K) { 
    return obj[key]
}

