import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-learn",
  templateUrl: "./learn.component.html",
  styleUrls: ["./learn.component.css"]
})
export class LearnComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  isDone: boolean = true; //布尔值
  decNumber: number = 123; //TypeScript里的所有数字都是浮点数,也就是有js的数据处理的精度问题
  strName: string = "kevin";
  decSum: number = 0.3 + 0.6; //0.899999999999
  strInfo: string = `my name is ${this.strName}`;
  /*  数组形成的两种方式 */
  arr: string[] = ["kevin", "alex", "tom"];
  arr1: Array<number> = [1, 2, 3, 4];

  /* 枚举 */

  /* any--不确定数据类型 */

  noSure: any = 3;
  /* 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null： */

  /**
   *Null 和 Undefined
   *TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
   * @param params
   */
  UserClick(params: string): number {
    alert(params);
    return 1;
  }

  
}
