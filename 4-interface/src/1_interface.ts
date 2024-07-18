(function () {

    // 描述一个对象的类型
    type myType = {
        name: string,
        age: number
    };

    /*
    *   接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
    *       同时接口也可以当成类型声明去使用
    */
    interface myInterface {
        name: string;
        age: number;
    }

    interface myInterface {
        gender: string;
    }

    // const obj: myInterface = {
    //     name: 'sss',
    //     age: 111,
    //     gender: '男'
    // };

    /*
    * 接口可以在定义类的时候去限制类的结构，
    *   接口中的所有的属性都不能有实际的值
    *   接口只定义对象的结构，而不考虑实际值
    *       在接口中所有的方法都是抽象方法
    */
    interface myInter {
        name: string;

        sayHello(): void;
    }

    /*
    * 定义类时，可以使类去实现一个接口,
    *   实现接口就是使类满足接口的要求
    */
    class MyClass implements myInter {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello() {
            console.log('大家好~~');
        }
    }

    // interface 使用特性
    //不能多属性也不能少属性

    // interface 同名 重合
    interface Axx {
        name: string;
        age: number;
    }
    interface Axx {
        idCard: string; // 这里重名了，所以与Axx接口重合了
        phone: number;
    }
    const a: Axx = {
        name: 'sss',
        age: 111,
        idCard: '123456',
        phone: 123456
    }
    
    //任意key
    interface Bxx{
        name: string;
        age: number;
        [propName:string]:any
    }

    // 可选值  ?
    interface Cxx{
        name: string;
        age?: number
    }

    // readonly只读
    interface Dxx{
        name: string;
        readonly id: string
    }
    const xiaoming: Dxx = {
        name: 'xm',
        id:'1343'
    }
    xiaoming.id = 'sdff' //报错不能修改
    
    // 继承
    interface Exx extends Dxx{
        age:number
    }
    let xh: Exx = {
        name: 'xiaohong',
        id: '23',
        age:12
    }

    // 定义函数类型
    interface Fn{
        (name:string):number[]
    }
    const fn: Fn = function (name: string) {
        return [1]
    }
    fn('ss')

})();
