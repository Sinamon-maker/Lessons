import TenDollarSelling from "./TenDollarSelling";
import TenProcentSelling from "./TenProcentSelling";
import {Product} from "./product";
import {milk, bred, yogurt, chokolad, meet, tomato, mayo} from "./product"


const partOfProduct1: Product[] = [milk, mayo, chokolad, bred];

const partOfProduct2:Product[] = [yogurt, meet, mayo, chokolad];

const resultOfSellingTenDollar = partOfProduct1.map(it => new TenDollarSelling(it, Math.round(Math.random()*10)))

const resultSelleingTemProcent=partOfProduct2.map(it => new TenProcentSelling(it, Math.round(Math.random()*10), Math.round(Math.random()*10)))

const resultSelling = [...resultOfSellingTenDollar, ...resultSelleingTemProcent]
.sort((a,b) => a.compare(b.product))
.map(item => {
    return {totalPrice: item.getPrice(), product: item.product.name, amount: item.amount, price: item.product.price}
})


console.log({resultSelling})