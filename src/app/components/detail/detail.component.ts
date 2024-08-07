import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  @Input() product!: ProductModel | undefined;

  constructor(public storeService: StoreService) {}
}
