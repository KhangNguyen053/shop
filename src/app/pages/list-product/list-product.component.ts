import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { StoreService } from '../../services/store.service';
import { RouterLink } from '@angular/router';
import { CartComponent } from '../../components/cart/cart.component';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CardComponent, RouterLink, CartComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss',
})
export class ListProductComponent {
  constructor(public storeService: StoreService) {}
}
