"use strict";
(function () {
    /*
    *   以abstract开头的类是抽象类，
    *       抽象类和其他类区别不大，只是不能用来创建对象,不能被实例化
    *       抽象类就是专门用来被继承的类
    *
    *       抽象类中可以添加抽象方法
    */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    // 下面的代码会报错
    // const an = new Animal();
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪汪！');
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵喵！');
        }
    }
    const dog = new Dog('旺财');
    dog.sayHello();
    /*
    * 定义类时，可以使类去实现一个接口,
    *   实现接口就是使类满足接口的要求
    */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('大家好~~');
        }
    }
})();
