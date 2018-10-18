import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Hero } from "../hero-child/hero";
import { Loger } from "../loger";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],

})
export class HeroComponent implements OnInit {

  /* 这是父组件 */
  heroes = [new Hero(1, "Kevin"), new Hero(2, "Tom"), new Hero(3, "Alex")];
  master = "Master";
  isUnchanged = true;
  constructor(private loger: Loger) { }
  ngOnInit() {
    this.loginInfo(`ngOnInit....`);
  }

  loginInfo(msg: string) {
    this.loger.log(msg);
  }
  age=10;


  getInfo() {
    console.log(this.isUnchanged);
  }
  emotion = "";
  happycase = "happy";

  happy() {
    this.emotion = "happy";
  }
  sad() {
    this.emotion = "sad";
  }
  comfused() {
    this.emotion = "comfused";
  }

  inputNumber = 10;

  inputValueLog(value) {
    console.log(value);
  }
  deleteHero(ev) {
    console.log("output:"+ev);
  }

}
