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
        <footer class="bg-gray-800 text-gray-300 p-6 text-center;
          hover:text-accent transition;">   
          <p> &copy; ${year} MinhaMarca. Todos os direitos reservados. </p>
          <p>
            <a href="#">Política de Privacidade</a> |
            <a href="#">Termos de Uso</a>
          </p>
        </footer>
      `;
    }
  }
  
  customElements.define("app-footer", AppFooter);
  