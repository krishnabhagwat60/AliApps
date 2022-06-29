import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appStringOnly]'
})
export class StringOnlyDirective {
  private regex: RegExp;
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'Delete'];

  private check(value: string) {
    return String(value).match(new RegExp(/[^0-9<>();'"!*#{}]+$/g));
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
    if (next && !this.check(next)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }
}