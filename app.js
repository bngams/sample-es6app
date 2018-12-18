import { ProductForm } from "./components/product-form.js";
import { ProductList } from "./components/product-list.js";

export class App {
    constructor() {
        this.init();
    }

    init() {
        console.log('App initilization');
        customElements.define('product-form', ProductForm);
        customElements.define('product-list', ProductList);
    }
}

new App();