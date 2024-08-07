import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private authService: AuthService) {}

  obj1 = {
    id: 1,
    productname: 'Alaska',
    quantity: 10,
    price: 100000,
    img: '../assets/h1.png',
  } as ProductModel;
  obj2 = {
    id: 2,
    productname: 'Golden Retriever',
    quantity: 5,
    price: 500000,
    img: '../assets/h2.png',
  } as ProductModel;
  obj3 = {
    id: 3,
    productname: 'Husky',
    quantity: 12,
    price: 200000,
    img: '../assets/h3.png',
  } as ProductModel;
  obj4 = {
    id: 4,
    productname: 'món đồ 4',
    quantity: 10,
    price: 150000,
    img: '../assets/h4.png',
  } as ProductModel;
  total: number = 0;
  products: ProductModel[] = [
    this.obj1,
    this.obj2,
    this.obj3,
    this.obj4,
  ];
  cart: ProductModel[] = [];

  addtocart(item: any) {
    if (this.authService.currentUser == null) {
      alert('Bạn cần đăng nhập để thêm vào giỏ hàng');
      return;
    }
    console.log(item);
    console.log(item.id);
    console.log(this.cart);

    let findIndex = this.cart.findIndex((element) => {
      return element.id == item.id;
    }); // Đi tìm trong giỏ hàng có tồn tại sp mà mình muốn thêm hay không
    let findIndex1 = this.products.findIndex((element) => {
      return element.id == item.id;
    });

    if (this.products[findIndex1].quantity == 0) {
      return;
    }

    if (findIndex != -1) {
      // Nếu tồn tại (index != -1)
      this.cart[findIndex].quantity += 1;
      this.products[findIndex1].quantity -= 1;
      // for (let item1 of this.products) {
      //   if (item1.id == item.id) {
      //     item1.quantity -= 1;
      //     console.log(item1)
      //   }

      // }
    } else {
      this.cart.push({
        // Thêm sp mới đó vào
        id: item.id,
        productname: item.productname,
        price: item.price,
        quantity: 1,
        img: item.img,
      });
      this.products[findIndex1].quantity -= 1;
    }
    console.log(this.products[findIndex1].quantity);
    this.totalcost();
  }

  deletecart(item: any) {
    console.log(item);
    let findIndex = this.cart.findIndex((element) => {
      return element.id == item.id;
    });
    let findIndex1 = this.products.findIndex((element) => {
      return element.id == item.id;
    });
    if (this.cart[findIndex].quantity == 1) {
      this.cart.splice(findIndex, 1);
      this.products[findIndex1].quantity += 1;
    } else {
      this.cart[findIndex].quantity -= 1;
      this.products[findIndex1].quantity += 1;
    }
    this.totalcost();
  }

  totalcost() {
    this.total = 0;
    for (let item of this.cart) {
      this.total += item.price * item.quantity;
    }
    return this.total;
  }

  deleteAllFromCart() {
    for (let product of this.cart) {
      for (let product2 of this.products) {
        if (product.id == product2.id) {
          product2.quantity += product.quantity;
          console.log(product2.quantity);
        }
      }
    }
    this.cart = [];
    this.total = 0;
  }
}
