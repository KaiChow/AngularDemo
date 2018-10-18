import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-size-child',
  templateUrl: './size-child.component.html',
  styleUrls: ['./size-child.component.css']
})
export class SizeChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /* 这是子组件 */
  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  @Output() deleteRequest = new EventEmitter<any>();
  dec() {
    this.resize(-1)
  }
  inc() {
    this.resize(+1)
  }
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, + this.size + delta));
    this.sizeChange.emit(this.size);
  }
  deleteChildLog() {
    this.deleteRequest.emit(this.size);
  }

}
