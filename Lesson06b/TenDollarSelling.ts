import AbstractSelling from "./AbstractSelling";
import {Product} from "./product";

export default class TenDollarSelling extends AbstractSelling {
   
    constructor(product: Product, amount: number){
    super(product, amount)
   } 

   getPrice(){
    return +((this.amount * (this.productPrice  - 10)).toFixed(2)) 
   }
}