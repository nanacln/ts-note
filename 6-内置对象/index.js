"use strict";
// 内置对象
// 1.ecmascript  Number  Date RegExp  Error  XMLHttprequest
// 2.dom querySelect  MouseEvent
// 3.bom promise localstorage location cookie
//ecmascript 案例
let num = new Number(1);
let data = new Date();
let reg = new RegExp(/\w/);
let error = new Error('error');
let xhr = new XMLHttpRequest();
// dom案例
// HTML(元素名称)Element
let div0 = document.querySelector('div');
let div1 = document.querySelector('canvas');
let div2 = document.querySelector('span');
//毫无特殊的标签归类到HTMLElement里面
let section = document.querySelector('section');
// 元素集合
let eles = document.querySelectorAll('div footer');
let eve;
let eve2;
let eve3;
//bom案例 浏览器内置对象
let local = localStorage;
let lo = location;
let promise = new Promise((r) => r(1));
let cooke = document.cookie;
