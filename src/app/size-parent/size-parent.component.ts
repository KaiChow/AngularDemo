import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-size-parent',
  templateUrl: './size-parent.component.html',
  styleUrls: ['./size-parent.component.css']
})
export class SizeParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /* 这是父组件 */
  fontSizePx = 15;

  deletelog(e) {
    console.log(e);
  }

}
