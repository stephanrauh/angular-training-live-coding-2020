import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  @Input()
  public receivedNumber = 42;

  constructor() { }

  ngOnInit(): void {
  }

}
