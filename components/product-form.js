import { AppComponent } from './app-component.js';

const TEMPLATE = `
<form id="product-form">
    <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" id="product-name-input">
        <label class="mdl-textfield__label" for="product-name-input">Name...</label>
    </div>
    <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" id="product-price-input">
        <label class="mdl-textfield__label" for="product-price-input">Price...</label>
    </div>
    <!-- Colored raised button -->
    <button id="submit-btn" type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Button
    </button>
</form>
`;

export class ProductForm extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE;
    }

    bindElements() {
        this.nameInput = this.querySelector('#product-name-input');
        this.priceInput = this.querySelector('#product-price-input');
        this.submitBtn = this.querySelector('#submit-btn');
    }

    bindEvents() {
        this.submitBtn.addEventListener('click', () => {
            // submit logic
            this.submitEvent();
        });
    }

    submitEvent() {
        // create a complete object
        let product = {
            name: this.nameInput.value,
            price: this.priceInput.value
        };
        let event = new CustomEvent('create-product', { detail: product });
        document.dispatchEvent(event);
    }

    onReady() {
        console.log('Product Form Component Ready');
    }
}