import { Component, computed, input } from '@angular/core';
import { PokemonCard } from '../../models/card.interface';

@Component({
  selector: 'app-card-item',
  imports: [],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
  card = input.required<PokemonCard>();

  label = computed(() => {
    const c = this.card();
    return `${c.name} (${c.set.id} ${c.number})`;
  });
}
