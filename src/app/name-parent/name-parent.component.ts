import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  templateUrl: './name-parent.component.html',
  styleUrls: ['./name-parent.component.css']
})
export class NameParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  names = ['Mr. IQ', ' ', ' Bombasto '];
}