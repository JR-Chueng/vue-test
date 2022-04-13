/*
 * @Author: zhangjiarun
 * @Date: 2022-01-04 15:31:20
 * @LastEditors: [you name]
 * @LastEditTime: 2022-03-17 14:35:17
 * @Description: 测试git 
 */

let myFirstWord = '第一次提交';
let secWord = '第二次提交';
let thirdWord = '第三次提交';



//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ') @';
  }
}