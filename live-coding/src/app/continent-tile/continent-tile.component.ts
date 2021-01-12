import { Component, Input, OnInit } from '@angular/core';

interface GlobeHashMap {
  [key: string]: string
}
@Component({
  selector: 'app-continent-tile',
  templateUrl: './continent-tile.component.html',
  styleUrls: ['./continent-tile.component.css']
})
export class ContinentTileComponent implements OnInit {

  public images: GlobeHashMap = {
    Africa:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/550px-Africa_%28orthographic_projection%29.svg.png",
    Americas:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Americas_%28orthographic_projection%29.svg/1200px-Americas_%28orthographic_projection%29.svg.png",
    Asia:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/220px-Asia_%28orthographic_projection%29.svg.png",
    Europe:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/220px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png",
    Oceania:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Oceania_%28orthographic_projection%29.svg/400px-Oceania_%28orthographic_projection%29.svg.png",
    Polar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Antarctica_%28orthographic_projection%29.svg/250px-Antarctica_%28orthographic_projection%29.svg.png"
  }


  @Input()
  public continent!: string;

  @Input()
  public countries!: Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
