import { ProductForm } from "./components/product-form.js";

export class App {
    constructor() {
        this.init();
    }

    init() {
        console.log('App initilization');
        customElements.define('product-form', ProductForm);
    }
}

new App();