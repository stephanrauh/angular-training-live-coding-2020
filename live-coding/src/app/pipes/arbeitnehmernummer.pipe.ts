import { Pipe, PipeTransform } from '@angular/core';

class ANException {
  constructor(public fehlerhafteArbeitnehmernummer: string | undefined) {}
}

@Pipe({
  name: 'arbeitnehmernummer'
})
export class ArbeitnehmernummerPipe implements PipeTransform {

  transform(value: string): string {
    // 1234567890123 => 12-345-678-90-123
    if (value.length !== 13) {
      // return "(ungültige AN-Nr)";
      throw new ANException('ungültige AN-Nr.');
    }


    let result = '';

    for (let i = 0; i < value.length; i++) {
      result += value.charAt(i);
      if (i === 1 || i === 4 || i == 7 || i === 9) {
        result += '-';
      }
    }

    return result;
  }

}
