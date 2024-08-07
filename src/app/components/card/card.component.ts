import { Component, Input } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() product!: ProductModel;

  constructor(public storeService: StoreService) {}

  //
  // @Output() buttonclick = new EventEmitter()

  // addToCart(index: number) {
  //   let findIndex = this.cart.findIndex((element) => {
  //     return element.id == this.products[index].id;
  //   }); // Đi tìm trong giỏ hàng có tồn tại sp mà mình muốn thêm hay không
  //   if (findIndex != -1) {// Nếu tồn tại (index != -1)
  //     this.cart[findIndex].quantity += 1;
  //     this.products[index].quantity -= 1;
  //   } else {// Nếu không tồn tại
  //     this.cart.push({// Thêm sp mới đó vào
  //       id: this.products[index].id,
  //       productname: this.products[index].productname,
  //       price: this.products[index].price,
  //       quantity: 1,
  //       img: '../assets/1.1',
  //     });
  //   }
  // }
}
