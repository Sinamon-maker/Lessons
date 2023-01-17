export  class Product {
    private _name: string;
    private _price: number;

    constructor(name: string, price: number){
        this._name = name;
        this._price = price;
    }

    get price(){
        return this._price;
    }

    set price(val: number){
        this._price = val
    }

    get name(){
        return this._name
    }

    set name(value){
        this._name = value
    }
}

export const chokolad: Product = new Product('chokolad', 99)

export const milk: Product = new Product('milk', 105)

export const yogurt: Product = new Product('yogurt', 45)

export const meet: Product = new Product('meet', 500)

export const bred: Product = new Product('bred', 36);

export const mayo: Product = new Product('mayo', 89);

export const tomato: Product = new Product('tomato', 100);