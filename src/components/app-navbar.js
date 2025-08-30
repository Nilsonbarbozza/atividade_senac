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
      <nav class="bg-gray-500 text-black p-4 flex flex-row justify-between items-center">
        <div class="font-bold text-lg">MinhaMarca</div>
        <ul class="flex gap-6 list-none m-0">
          <li><a href="#" class="text-black hover:text-red-500 transition">Início</a></li>
          <li><a href="#" class="text-black hover:text-red-500 transition">Sobre</a></li>
          <li><a href="#" class="text-black hover:text-red-500 transition">Serviços</a></li>
          <li><a href="#" class="text-black hover:text-red-500 transition">Contato</a></li>
        </ul>
      </nav>
    `;
    }
  }
  
  customElements.define("app-navbar", AppNavbar);
  