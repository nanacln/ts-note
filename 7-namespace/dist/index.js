"use strict";
/**
 * 命名空间的用法
 * 内部模块，主要用于组织代码，避免命名冲突
 * 命名空间内的类默认私有
 * 通过export暴露
 * 通过namespace关键字定义
 * 命名空间内可以包含函数、类、变量、接口等
 */
// namespace 所有的变量以及方法必须要导出才能访问
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
    Shape.name = 'shape';
    let a = 1;
})(Shape || (Shape = {}));
console.log(Shape.name);
console.log(Shape.square(2));
// 嵌套 、合并
(function (Shape) {
    let Color;
    (function (Color) {
        function red() {
            return 'red';
        }
        Color.red = red;
    })(Color = Shape.Color || (Shape.Color = {}));
})(Shape || (Shape = {}));
console.log(Shape.Color.red());
