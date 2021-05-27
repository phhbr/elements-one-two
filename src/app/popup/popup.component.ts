import { Component, EventEmitter, Input, OnChanges, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-popup',
  template: `
    <span part="warning">Popup: {{message}}</span>
    <button (click)="closed.next()">&#x2716;</button>
  `,
  styles: [`
    :host {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: #009cff;
      height: 48px;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid black;
      font-size: 24px;
    }

    button {
      border-radius: 50%;
    }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PopupComponent implements OnChanges {

  @Input()
  get message(): string { return this._message; }
  set message(message: string) {
    this._message = message;
  }
  private _message = '';

  ngOnChanges(){
    console.log('changed', this);
  }

  @Output()
  closed = new EventEmitter();
}