class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          color: white;
          background: var(--blue1);
          font-size: var(--h3);
          font-family: var(--regularFont);
          font-weight: var(--bold);
          padding: var(--small);
          border-radius: var(--soft);
          box-shadow: var(--deepMultiShadow);
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('my-component', MyComponent);
