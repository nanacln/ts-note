// 内置对象
// 1.ecmascript  Number  Date RegExp  Error  XMLHttprequest
// 2.dom querySelect  MouseEvent
// 3.bom promise localstorage location cookie

//ecmascript 案例
let num: Number = new Number(1)
let data: Date = new Date()
let reg: RegExp = new RegExp(/\w/)
let error:Error = new Error('error')
let xhr: XMLHttpRequest = new XMLHttpRequest()


// dom案例
// HTML(元素名称)Element
let div0 = document.querySelector('div')
let div1 = document.querySelector('canvas')
let div2 = document.querySelector('span')


//毫无特殊的标签归类到HTMLElement里面
let section = document.querySelector('section')

// 元素集合
let eles: NodeListOf<HTMLDivElement | HTMLElement> = document.querySelectorAll('div footer') 

let eve: MouseEvent
let eve2: KeyboardEvent
let eve3: InputEvent


//bom案例 浏览器内置对象
let local: Storage = localStorage
let lo: Location = location
let promise: Promise<number> = new Promise((r) => r(1))
let cooke:string = document.cookie
