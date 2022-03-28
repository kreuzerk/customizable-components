import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-my-chips',
  template: `
    <div class="chips-container">
      <my-chip *ngFor="let chip of chips">{{chip}}</my-chip>
    </div>
  `,
  styles: [`
    .chips-container {
      background: #75DBCD;
      padding: 20px;
      border-radius: 5px;
      width: 500px;
    }
  `]
})
export class MyChipsComponent {
  @Input() chips: string[] = [];
}

@Component({
  selector: "my-chip",
  template: `<span class="my-chip" [ngClass]="{active: active}" (click)="active = !active"><ng-content></ng-content></span>`,
  styles: [`
    .my-chip {
      background: transparent;
      border: 2px solid #166088;
      color: #166088;
      border-radius: 25px;
      padding: 10px 20px;
      margin: 5px;
      cursor: pointer;

      &.active {
        background: #166088;
        color: #DBE9EE;
      }
    }
  `]
})
export class MyChipComponent {
  @Input() active = false;
}
