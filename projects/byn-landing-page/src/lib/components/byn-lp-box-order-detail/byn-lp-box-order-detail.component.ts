import { Component } from '@angular/core';
import { CartService, ProductCard } from '../../services/card.service';
import { PlatformService } from 'byn-core';

@Component({
  selector: 'app-byn-lp-box-order-detail',
  templateUrl: './byn-lp-box-order-detail.component.html',
  styleUrls: ['./byn-lp-box-order-detail.component.css']
})
export class BynLpBoxOrderDetailComponent {
  cart: ProductCard[] = [];
  total: number = 0;
  isClient = false;
  constructor(private cartService: CartService, private platformService: PlatformService) {
    this.isClient = this.platformService.isBrowser();
  }

  ngOnInit(): void {
    if(this.isClient){
      this.loadCart();
    }
  }

  loadCart(): void {
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  addProduct(product: ProductCard): void {
    this.cartService.addProduct(product);
    this.loadCart();
  }

  removeProduct(productId: number): void {
    this.cartService.removeProduct(productId);
    this.loadCart();
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
    this.loadCart();
  }

  calculateTotal(): void {
    this.total = this.cartService.getTotalPrice();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.loadCart();
  }
}
