import {products} from "../data/products"
 
export const productsAPI = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);

})