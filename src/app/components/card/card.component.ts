import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  cardUrl: string = "";
  @Input()
  altLabel: string = "";
  @Input()
  label: string = "";
  @Input()
  redirectLink: string = "";
}
