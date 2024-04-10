customElements.define('nav-template',class Navbar extends HTMLElement {
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
});

customElements.define('modal-template',class Modal extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        fetch(this.getAttribute("src"))
            .then(r => r.text())
            .then(t => {
                let parser = new DOMParser();
                let html = parser.parseFromString(t, "text/html");
                this.innerHTML = html.body.innerHTML;
            }).catch(e => console.error(e));
    }
});

customElements.define('footer-template',class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        fetch(this.getAttribute("src"))
            .then(r => r.text())
            .then(t => {
                let parser = new DOMParser();
                let html = parser.parseFromString(t, "text/html");
                this.innerHTML = html.body.innerHTML;
            }).catch(e => console.error(e));
    }
});

customElements.define('project-card',class Card extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        fetch(this.getAttribute("src"))
            .then(r => r.text())
            .then(t => {
                //Parse html
                let parser = new DOMParser();
                let html = parser.parseFromString(t, "text/html");

                //Add href to button and image
                let link = this.getAttribute("link");
                var image = html.getElementById("image-link");
                image.setAttribute("href",link);

                //Add image
                let src = this.getAttribute("image-src");
                var img = html.getElementById("image-scr");
                img.src="../"+src; 

                //Add card-title
                let title = this.getAttribute("card-title");
                var card_header = html.getElementById("card-title");
                card_header.textContent = title;
                
                //Add paragrah
                let paragraph = this.getAttribute("paragraph");
                var p_element = html.getElementById("card-text");
                p_element.textContent = paragraph;

                this.innerHTML = html.body.innerHTML;
            }).catch(e => console.error(e));

    }
});