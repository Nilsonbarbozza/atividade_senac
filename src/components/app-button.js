class AppButton extends HTMLElement {
    static get observedAttributes() { return ["variant"]; }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
  
    render() {
      const variant = this.getAttribute("variant") || "primary";
      const styles = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-gray-200 hover:bg-gray-300 text-black"
      };
  
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/src/assets/css/style.css">
      <button class="px-4 py-2 rounded font-medium cursor-pointer transition ${styles[variant]}">
        <slot></slot>
      </button>
    `;
    }
  }
  
  customElements.define("app-button", AppButton);
  