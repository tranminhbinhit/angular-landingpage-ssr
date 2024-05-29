import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";

export interface ProductCard {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: "root",
})
export class CartService {
  private storageKey = "cartItems";

  constructor(private localStoreServie: LocalStorageService) {}

  getCart(): ProductCard[] {
    // const cart = localStorage.getItem(this.storageKey);
    // return cart ? JSON.parse(cart) : [];
    return this.localStoreServie.getObject(this.storageKey);
  }

  saveCart(cart: ProductCard[]): void {
    // localStorage.setItem(this.storageKey, JSON.stringify(cart));
    this.localStoreServie.set(this.storageKey, cart)
  }

  addProduct(product: ProductCard): void {
    const cart = this.getCart();
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      cart.push(product);
    }

    this.saveCart(cart);
  }

  removeProduct(productId: number): void {
    const cart = this.getCart().filter((item) => item.id !== productId);
    this.saveCart(cart);
  }

  updateQuantity(productId: number, quantity: number): void {
    const cart = this.getCart();
    const product = cart.find((item) => item.id === productId);

    if (product) {
      product.quantity = quantity;
      if (product.quantity <= 0) {
        this.removeProduct(productId);
      } else {
        this.saveCart(cart);
      }
    }
  }

  getTotalPrice(): number {
    const cart = this.getCart();
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart(): void {
    // localStorage.removeItem(this.storageKey);
    this.localStoreServie.remove(this.storageKey);
  }
}
