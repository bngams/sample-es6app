import { AppComponent } from "./app-component.js";

const TEMPLATE = `<div id="product-list"></div>`;

export class ProductList extends AppComponent {
    display() {
        this.innerHTML = TEMPLATE;
    }

    bindEvents() {
        this.handleProductCreateEvent();
    }

    handleProductCreateEvent() {
        document.addEventListener('create-product', (e) => {
            console.log('product to add', e.detail);
            this.innerHTML = (`<h1>${e.detail.name}</h1>`);
        })
    }
}
