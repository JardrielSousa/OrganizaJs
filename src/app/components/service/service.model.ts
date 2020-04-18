import { Product } from '../products/product.model';

export interface Service{
    id?:number;
    name:string;
    price:number;
    time:string;
    date:string;
    //product:Product;

}