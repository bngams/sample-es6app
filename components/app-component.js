export class AppComponent extends HTMLElement {

    /** called on display */
    connectedCallback() {
        this.display();
        this.bindEvents();
        this.bindElements();
        this.onReady();
    }

    display() { }
    bindEvents() { }
    bindElements() { }
    onReady() { }
}