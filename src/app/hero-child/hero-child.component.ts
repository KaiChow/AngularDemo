import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Hero} from './hero'

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /* 这是子组件 */
  @Input() hero:Hero;
  @Input('master') masterName: string

  
  @Input() age:number;

  @Output() deleteRequest = new EventEmitter<number>();
  delete(){
    this.age--;
    this.deleteRequest.emit(this.age);
  }
}
