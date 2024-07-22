(function () {

    /*
    *   以abstract开头的类是抽象类，
    *       抽象类和其他类区别不大，只是不能用来创建对象,不能被实例化
    *       抽象类就是专门用来被继承的类
    *
    *       抽象类中可以添加抽象方法
    */
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        // 定义一个抽象方法
        // 抽象方法使用 abstract开头，没有方法体
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHello(): void;
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

    // interface 类的约束 

    // 类和接口实现关系  implement
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
})();
