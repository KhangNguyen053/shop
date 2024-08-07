import { Component } from '@angular/core';
import { CartComponent } from '../../components/cart/cart.component';
import { StoreService } from '../../services/store.service';
import { RouterLink } from '@angular/router';
import {TotalcostComponent} from "../../components/totalcost/totalcost.component";

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [CartComponent, RouterLink, TotalcostComponent],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss',
})
export class ProductCartComponent {
  constructor(public storeService: StoreService) {
    console.log(this.storeService.cart);
  }
}
