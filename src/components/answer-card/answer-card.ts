import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'answer-card',
  templateUrl: 'answer-card.html'
})
export class AnswerCardComponent {
 
  //Determines flipCard Value
  @Input('isFlipped') flipCard: boolean;
 
  constructor() {
 
  }
 
}