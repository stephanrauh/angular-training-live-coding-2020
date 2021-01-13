import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  @Input()
  public counter = 0;

  @Output()
  public counterChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public count(): void {
    this.counter++;
  }

  public send(): void {
    this.counterChange.emit(this.counter);
  }

}
