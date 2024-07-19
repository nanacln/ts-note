/**
 * 命名空间的用法
 * 内部模块，主要用于组织代码，避免命名冲突
 * 命名空间内的类默认私有
 * 通过export暴露
 * 通过namespace关键字定义
 * 命名空间内可以包含函数、类、变量、接口等
 */

import { Test } from './test.ts'

// namespace 所有的变量以及方法必须要导出才能访问
namespace Shape {
  export function square(x: number) {
    return x * x
  }
  export const name = 'shape'
  let a =1
}
console.log(Shape.name)
console.log(Shape.square(2))

// 嵌套 、合并
namespace Shape {
  export namespace Color {
    export function red() {
      return 'red'
    }
  }
}
console.log(Shape.Color.red())

//支持导出
 console.log(Test.a)
