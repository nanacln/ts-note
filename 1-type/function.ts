// 定义类型和返回值  
interface User{
  name: string
  age: number
}
function getUserInfo(user: User): string { 
  return `name: ${user.name}, age: ${user.age}`
}
//可选参数|默认参数
function getUserInfo1(a:number = 10, b?: number): string { 
  return a+String(b)
}
// ts可以定义this的类型
interface Obj {
  user: number[],
  add:(this:Obj,num:number)=>void
}
let obj:Obj = {
  user: [1,2,3],
  add(this:Obj,num:number){
    this.user.push(num)
  }
}
obj.add(4)
console.log(obj.user) // [1,2,3,4]

//函数重载
let user:number[]=[1,2,3]
function findNum(add: number[]): number[] // 传入数组做添加
function findNum(id: number): number[]  // 传入数字做查询
function findNum(): number[] // 不传参数做全部查询
function findNum(ids?: number | number[]) {
  if (ids instanceof Array) {
    return user.push(...ids)
  } else if (typeof ids === 'number') {
    return user.filter(item => item === ids)
  } else {
    return user
  }
}