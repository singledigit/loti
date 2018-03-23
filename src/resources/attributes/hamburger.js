import { inject } from 'aurelia-framework';

@inject(Element)
export class HamburgerCustomAttribute {
  constructor(element) {
    this.element = element;
  }

  bind() {
    this.element.addEventListener('click', () => {
      // Get the target from the "data-target" attribute
      let target = document.getElementById(this.value);

      // Toggle the class on both the "navbar-burger" and the "navbar-menu"
      this.element.classList.toggle('is-active');
      target.classList.toggle('is-active');
    });
  }
}

