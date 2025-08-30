class AppCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .card { @apply bg-white shadow-md rounded-lg p-4 border border-gray-200; }
          .card-header { @apply font-bold text-lg mb-2; }
          .card-body { @apply text-gray-600 mb-4; }
          .card-footer { @apply flex gap-2; }
        </style>
        <div class="card">
          <div class="card-header"><slot name="header"></slot></div>
          <div class="card-body"><slot name="body"></slot></div>
          <div class="card-footer"><slot name="footer"></slot></div>
        </div>
      `;
    }
  }
  
  customElements.define("app-card", AppCard);
  