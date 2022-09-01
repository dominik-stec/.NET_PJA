import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

function whiteSpaceValidatorDirective(textCheck: FormControl) {
  let text = textCheck.value;
  text = String(text);
    if (text && text.indexOf(" ") != -1) {
    let [_, domain] = text.split(" ");
    if (domain !== text) {
      return {
        whiteSpace: {
          parseDomain: domain
        }
      }
    }
  }

  return null;
}

@Directive({
  selector: '[whiteSpace]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: whiteSpaceValidatorDirective,
      multi: true
    }]
})
export class WhiteSpaceValidatorDirective {

  constructor() { }

}
