class AppFooter extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const year = new Date().getFullYear();
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/assets/css/style.css">
        <footer class="flex flex-col gap-6 bg-white pb-6">   
          <div class="flex flex-col gap-1">
            <div class="flex flex-row justify-between items-center">
              <p class="font-sans text-sm text-line-2 font-normal">Landing Page UI Kit for figma</p>
              <img src="/src/assets/images/logo-icon-figma.svg" alt="Landify Logo" class="h-6"></div>
            </div>
            <a href="#" class="text-neutro underline">www.landify.design</a>
          </div>
          <p class="text-neutro">© 2021 Landify</p>
        </footer>
      `;
    }
  }
  
  customElements.define("app-footer", AppFooter);
  