import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.css']
})
export class VotetakerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
