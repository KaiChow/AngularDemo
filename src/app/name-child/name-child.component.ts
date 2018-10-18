import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.css']
})
export class NameChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* 子组件 */
  private _name = "";
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || "no data"
  }
  get name(): string {
    return this._name;
  }

}
