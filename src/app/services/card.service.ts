import { Injectable, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonCard, CardApiResponse } from '../models/card.interface';

@Injectable({ providedIn: 'root' })
export class CardService {
  private readonly apiUrl = 'https://api.pokemontcg.io/v2/cards?pageSize=250';

  readonly allCards = signal<PokemonCard[]>([]);
  readonly searchQuery = signal('');
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  readonly filteredCards = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const cards = this.allCards();
    if (!query) {
      return cards;
    }
    return cards.filter(card =>
      card.name.toLowerCase().includes(query) ||
      card.set.name.toLowerCase().includes(query) ||
      card.id.toLowerCase().includes(query)
    );
  });

  constructor(private http: HttpClient) {}

  loadCards(): void {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<CardApiResponse>(this.apiUrl).subscribe({
      next: (response) => {
        this.allCards.set(response.data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load cards. Please try again later.');
        this.loading.set(false);
      }
    });
  }

  setSearchQuery(query: string): void {
    this.searchQuery.set(query);
  }
}
