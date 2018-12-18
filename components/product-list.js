import { AppComponent } from "./app-component.js";
import { ProductCard } from "./product-card.js";

const TEMPLATE = `<div id="product-list"></div>`;

export class ProductList extends AppComponent {
    display() {
        this.innerHTML = TEMPLATE;
    }

    bindElements() {
        this.productContainer = this.querySelector('#product-list');
    }

    bindEvents() {
        this.handleProductCreateEvent();
    }

    handleProductCreateEvent() {
        document.addEventListener('create-product', (e) => {
            console.log('product to add', e.detail);
            this.productContainer.appendChild(new ProductCard(e.detail));
        })
    }
}
