import AbstractSelling from "./AbstractSelling";
import {Product} from "./product";

export default class TenProcentSelling extends AbstractSelling {
   salesAmount: number;

    constructor(product: Product, amount: number, salesAmount: number){
    super(product, amount)
    this.salesAmount = salesAmount
   } 

   getPrice(){
    if (this.amount >= this.salesAmount){
        const res = +(this.productPrice * this.amount * (1-10/100)).toFixed(2)
        return res
    }
    return +((this.amount * (this.productPrice  - 10)).toFixed(2)) 
   }
}