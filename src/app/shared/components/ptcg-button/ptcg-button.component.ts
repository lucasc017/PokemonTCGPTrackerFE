import { output, HostListener, ChangeDetectionStrategy } from '@angular/core';
import {Component} from '@angular/core';

@Component({
  selector: 'ptcg-button',
  imports: [],
  template: `
  <button class="btn" (click)="clicked.emit($event)">
    <ng-content></ng-content>
  </button>
  `,
  styles: [`
    .btn {
      padding: 0.5rem 1rem;
      background-color: #3b82f6;
      color: white;
      border: none;
      border-radius: 0.375rem;
      cursor: pointer;
      font-family: inherit;
      font-size: 0.875rem;
      transition: background-color 0.2s;
    }

    .btn:hover {
      background-color: #2563eb;
    }

    .btn:focus {
      outline: 2px solid #3b82f6;
      outline-offset: 2px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PtcgButtonComponent {
  readonly clicked = output<Event>();
}
