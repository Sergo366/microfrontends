import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart  } from 'cart/CartShow';

console.log('Container loaded!');

mountProducts(document.getElementById('my-products'))
mountCart(document.getElementById('my-cart'))