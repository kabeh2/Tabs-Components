class ImgLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.nav;
    this.imgElement = document.querySelector(
      `.slideshow-img[data-nav="${this.data}"]`
    );
    this.imgItem = new ImgItem(this.imgElement);
    this.element.addEventListener("click", () => this.select());
  }

  select() {
    const links = document.querySelectorAll(".nav-link");
    Array.from(links).forEach(link =>
      link.classList.remove("nav-link-selected")
    );
    this.element.classList.add("nav-link-selected");
    this.imgItem.select();
  }
}

class ImgItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".slideshow-img");
    items.forEach(item => item.classList.remove("slideshow-img-selected"));
    this.element.classList.add("slideshow-img-selected");
  }
}

links = document
  .querySelectorAll(".nav-link")
  .forEach(link => new ImgLink(link));
