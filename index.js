/*
 * @Author: zhangjiarun
 * @Date: 2022-01-04 15:31:20
 * @LastEditors: [you name]
 * @LastEditTime: 2022-01-04 16:04:12
 * @Description: 测试git 
 */

let myFirstWord = '第一次提交';
let secWord = '第二次提交';

//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}