import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
class DatosP3 extends PolymerElement {
  static get is() {
    return 'datos-p3';
  }

  static get properties() {
    return {
      data: {
        notify: true,
        type: Object,
        reflectToAttribute: true,
        value: function() {
          return [];
        },
      },
    }
  }

  ready() {
    super.ready();
  }

}

window.customElements.define(DatosP3.is, DatosP3);
