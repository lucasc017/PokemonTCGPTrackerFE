import { Component, input } from '@angular/core';
import { PokemonCard } from '../../models/card.interface';
import { CardItemComponent } from '../card-item/card-item.component';

@Component({
  selector: 'app-card-grid',
  imports: [CardItemComponent],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.scss'
})
export class CardGridComponent {
  cards = input.required<PokemonCard[]>();
}
