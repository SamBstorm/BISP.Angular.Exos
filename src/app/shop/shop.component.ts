import { IProduct } from './../Models/iproduct';
import { Product } from './../Models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'main-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public products : Product[] = [];
  public categories : string[] = [];
  public category : string | null = null;

  public productsCart : Product[] = [];

  public get quantityTotal() : number{
    let qty : number = 0;
    for (const prod of this.products) {
      qty+= prod.StockQuantity;
    }
    return qty;
  }

  public get TotalAPayer():number{
    let aPayer : number = 0;
    for (const article of this.productsCart) {
      aPayer = aPayer + (article.Price * article.StockQuantity);
    }
    return aPayer;
  }

  public get filteredList():Product[]{
    return (this.category==="" || this.category === undefined || this.category === null)?this.products : this.products.filter(f=> f.Categories.includes((this.category as string)));
  }

  constructor(private activatedRoute : ActivatedRoute) {
  }
  
  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe(
      params =>{
        if(params.keys.length > 0){
          this.category = params.get('cat');
        }
        if(this.category === null){
          this.activatedRoute.queryParamMap.subscribe(
            params =>{
              if(params.keys.length > 0){
                this.category = params.get('cat');
              }
            }
          );
        }
    });

    this.products.push(new Product("Buffet","Meuble en bois", 299.99, 2,"Meuble","Bois","Buffet","Salle à manger"));
    this.products.push(new Product("Maillot","Maillot de bain une pièce", 39.99, 20, "Textile","Loisir","Été"));
    this.products.push(new Product("Noix de coco","Une noix de coco", 2.59, 15,"Nourriture","Exotique","Été"));
    this.products.push(new Product("Playstation 5","Console qui existe peut-être", 599.99, 0,"Loisir","Multimédia"));
    this.products.push(new Product("Chimay bleu","Lot de 6 bouteille de 33cl", 32.99, 5,"Boisson", "Alcohol", "Nourriture"));

    this.categories.push("Meuble");
    this.categories.push("Bois");
    this.categories.push("Buffet");
    this.categories.push("Salle à manger");
    this.categories.push("Textile");
    this.categories.push("Loisir");
    this.categories.push("Été");
    this.categories.push("Nourriture");
    this.categories.push("Exotique");
    this.categories.push("Multimédia");
    this.categories.push("Boisson");
    this.categories.push("Alcohol");
    
  }

  public buyProduct(item : Product){
    if (item.StockQuantity > 0) item.StockQuantity--;
    let product = this.productsCart.filter(p => p.Title === item.Title );
    if(product.length > 0)
      product[0].StockQuantity++;
    else
      this.productsCart.push(new Product(item.Title, item.Description, item.Price, 1, ...item.Categories));
  }
  
  
}
