import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  selector: 'app-detail-product', // Changed selector
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss',
})
export class DetailProductComponent {
  detailProduct!: ProductModel | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storeService: StoreService,
  ) {
    const { id } = this.activatedRoute.snapshot.params;
    this.detailProduct = this.storeService.products.find(
      (product) => product.id === parseInt(id),
    );
  }
}
