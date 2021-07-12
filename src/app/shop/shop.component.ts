import { IProduct } from './../Models/iproduct';
import { Product } from './../Models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public products : Product[] = [];

  public get quantityTotal() : number{
    let qty : number = 0;
    for (const prod of this.products) {
      qty+= prod.StockQuantity;
    }
    return qty;
  }

  constructor() { }

  ngOnInit(): void {
    this.products.push(new Product("Buffet","Meuble en bois", 299.99, 2));
    this.products.push(new Product("Maillot","Maillot de bain une pièce", 39.99, 20));
    this.products.push(new Product("Noix de coco","Une noix de coco", 2.59, 15));
    this.products.push(new Product("Playstation 5","Console qui existe peut-être", 599.99, 0));
    this.products.push(new Product("Chimay bleu","Lot de 6 bouteille de 33cl", 32.99, 5));
  }

  public buyProduct(item : IProduct){
    if (item.StockQuantity > 0) item.StockQuantity--;
  }
}
