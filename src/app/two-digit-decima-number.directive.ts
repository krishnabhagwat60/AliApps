import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTwoDigitDecimaNumber]'
})
export class TwoDigitDecimaNumberDirective {
  @Input('digit') digit: number = 0;
  @Input('decimal') decimal: number = 0;
  private regex: RegExp;
  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'Delete'];

  private check(value: string, digit: number, decimal: number) {
    if (digit == 0 && decimal == 0) {
      return String(value).match(new RegExp(/^\d*\.?\d$/g));
    } else if(digit > 0 && decimal == 0) {
      var regExpString = "^\\d{0," + (digit) + "}$"
      return String(value).match(new RegExp(regExpString));
    } else if(digit > 0 && decimal > 0) {
      var regExpString = "^\\d{1," + digit + "}(\\.\\d{0," + decimal + "})?$"
      return String(value).match(new RegExp(regExpString));
    }
  }

  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // console.log(this.el.nativeElement.value);
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let current: string = this.el.nativeElement.value;
    let next: string = current.concat(event.key);
    if (next && !this.check(next, this.digit, this.decimal)) {
      event.preventDefault();
    }
  }
}