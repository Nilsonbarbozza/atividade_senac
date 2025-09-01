class AppNavbar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/src/assets/css/style.css">
      <nav class="bg-black text-black p-4 flex flex-row justify-between items-center px-[var(--section-padding-x-lg)] py-[var(--section-padding-y-sm)]">
        <img src="/src/assets/images/logo.svg" alt="Landify Logo" class="h-5">
        <ul class="flex gap-6 list-none m-0">
          <li><a href="https://landify.design/?ref=landifyuikit" class="text-white hover:text-neutro-300 transition">www.landify.design</a></li>
        </ul>
      </nav>
    `;
    }
  }
  
  customElements.define("app-navbar", AppNavbar);
  