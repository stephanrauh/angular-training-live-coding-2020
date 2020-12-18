import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-continent-tile',
  templateUrl: './continent-tile.component.html',
  styleUrls: ['./continent-tile.component.css']
})
export class ContinentTileComponent implements OnInit {

  @Input()
  public continent!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
