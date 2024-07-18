// 类型别名 type  用来给一个类型起个新名称

// type与interface的异同
// 都可以描述Object和Function 只是语法不通
// 都可以被继承 实现implements

// type
type Point = {
  x: number
  y: number
}
type SetPoint = (x: number, y: number) => void


// interface
interface Point2 {
  x: number
  y: number
}
interface SetPoint2 {
  (x: number, y: number): void
}

// 继承
// interface 继承 interface
interface Person{
  name: string
}
interface Student extends Person{
  stuNo:number
}
// interface 继承 type
type Person2 = {
  name: string
}
interface Student2 extends Person2{
  stuNo:number
}
// type 继承 type
type Person3 = {
  name: string
}
type Student3 = Person3 & { stuNo: number }

// type 继承interface
interface Person4{
  name: string
}
type Student4 = Person4 & { stuNo: number }



type num = 1 extends number ? 1 : 0





// implements
interface ICat{
  setName(name:string):void
}
class Cat implements ICat{
  setName(name:string){
    console.log(name)
  }
}

type ICat2 = {
  setName(name:string):void
}
class Cat2 implements ICat2{
  setName(name: string): void {
    
  }
}


// 不同之处

//  type 可以定义基本类型别名,interface不行
type userName = string

// type 声明联合类型 interface不行
type Students = { stuNo: number } | { classId: number }
const xm: Students = {
  stuNo:1
}
// type声明元组 interface不行
type Data = [string, number]



// interface优势
// 可以申明合并 ,可以重复声明 type不行
interface Person{
  name:string
}
interface Person{
  age:number
}

// 官方推荐使用interface ,其它无法满足的情况下用type