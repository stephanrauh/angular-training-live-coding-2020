import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h4>Hello {{ name }}!</h4>
    <strong>Um 09:40 Uhr geht es weiter! </strong>
  `,
  styles: [
    `
      h4 {
        font-family: Lato;
        font-size: 60px;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name!: string; // we know this value has a value after initializing the component

  public begruessung: string = "Hallo";

  ngOnInit() {
    console.log(`Das ist die Begrüßung: ${this.begruessung}`);
  }
}
