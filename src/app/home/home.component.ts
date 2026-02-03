import { Component, inject, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { CardGridComponent } from '../components/card-grid/card-grid.component';

@Component({
  selector: 'app-home',
  imports: [SearchBarComponent, CardGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  protected cardService = inject(CardService);

  ngOnInit(): void {
    this.cardService.loadCards();
  }

  onSearch(query: string): void {
    this.cardService.setSearchQuery(query);
  }
}
