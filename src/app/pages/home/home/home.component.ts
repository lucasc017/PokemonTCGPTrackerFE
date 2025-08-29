import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PtcgButtonComponent } from '../../../shared/components/ptcg-button/ptcg-button.component';

@Component({
  selector: 'app-home',
  imports: [PtcgButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToCardList() {
    this.router.navigate(['/card-list']);
  }
}
