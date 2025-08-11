import * as cartService from './services/cart.js'
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("welcome to the your cart! ");

//criando dois itens
const item1 = await createItem("hotwheel ferrari", 20.99, 1);
const item2 = await createItem("hotwheel lamborghini", 39.99, 3);

//adiciona 2 itens no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)
//deleta item do carrinho
//await cartService.deleteItem(myCart, item2.name);
await cartService.calculateTotal(myCart);