import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  templateUrl: './version-parent.component.html',
  styleUrls: ['./version-parent.component.css']
})
export class VersionParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /* 父组件数据 */
  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }
  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
