import { AppComponent } from './app-component.js';

const TEMPLATE = `
<form id="product-form">
    <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" id="product-name-input">
        <label class="mdl-textfield__label" for="product-name-input">Name...</label>
    </div>
    <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" id="product-name-price">
        <label class="mdl-textfield__label" for="product-name-price">Price...</label>
    </div>
    <!-- Colored raised button -->
    <button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Button
    </button>
</form>
`;

export class ProductForm extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE;
    }

    onReady() {
        console.log('Product Form Component Ready');
    }
}