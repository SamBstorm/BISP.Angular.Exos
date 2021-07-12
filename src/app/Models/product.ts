import { IProduct } from './iproduct';

export class Product implements IProduct {
    Title: string;
    Description: string;
    Price: number;
    StockQuantity: number;

    constructor(title: string, desc: string, price: number, stock: number) {
        this.Title = title;
        this.Description = desc;
        this.Price = price;
        this.StockQuantity = stock;
    }

    public removeOne() {
        if (this.StockQuantity > 0) this.StockQuantity--;
    }
}
