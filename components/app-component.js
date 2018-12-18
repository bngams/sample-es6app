export class AppComponent extends HTMLElement {

    /** called on display */
    connectedCallback() {
        this.display();
        this.bindElements();
        this.bindEvents();
        this.onReady();
    }

    display() { }
    bindEvents() { }
    bindElements() { }
    onReady() { }
}