import { IProduct } from './iproduct';

export class Product implements IProduct {
    Title: string;
    Description: string;
    Price: number;
    StockQuantity: number;
    Categories: string[];

    constructor(title: string, desc: string, price: number, stock: number, ...categories :string[]) {
        this.Title = title;
        this.Description = desc;
        this.Price = price;
        this.StockQuantity = stock;
        this.Categories = categories;
    }

    public removeOne() {
        if (this.StockQuantity > 0) this.StockQuantity--;
    }
}
