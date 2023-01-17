import {Product} from "./product";

export default abstract class AbstractSelling {
    private _product: Product;
    private _amount: number;

    constructor(product: Product, amount: number){
      this._product = product;
      this._amount = amount;
    }

    get product(){
        return this._product
    }

    get productPrice(){
        return this._product.price
    }

    get amount(){
        return this._amount
    }

    set amount(val:number){
        this._amount = val
    }

    abstract getPrice():number

    compare(productCompare: Product){
        if (this._product.price > productCompare.price){
            return 1
        }
        if (this._product.price === productCompare.price) {
            return 0
        } 
        return -1
    }
}