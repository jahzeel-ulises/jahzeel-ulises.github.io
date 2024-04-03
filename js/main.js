class Navbar extends HTMLElement {
      constructor() {
          super();
      }
      connectedCallback() {
          fetch(this.getAttribute("src"))
              .then(r => r.text())
              .then(t => {
                  let parser = new DOMParser();
                  let html = parser.parseFromString(t, "text/html");
                  let tab = this.getAttribute("tab");
                  var element = html.getElementById(tab);
                  element.classList.add("active");
                  this.innerHTML = html.body.innerHTML;
              }).catch(e => console.error(e));

      }
}
customElements.define('nav-template',Navbar);