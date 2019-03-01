/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
// import {datosRxfire} from '../components/datos/datos-rxfire.js';
// import '../components/data-auth';
import './datos/data-auth'
import './data-firestore'
import './../marcos/redux-uno'

class MyView1 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  static get properties() {
    return {
      usuarios: {
        type: Array
      },
      data: {
        type: Array
      },
      elusuario:{
        type:String,
        value:'users/1234'
      },
      ladireccion:{
        type:String
      }
    };
  }

  _onData(){
    console.log('cambi ode datos');
  }

  constructor() {
    super();
    // this.usuarios= datosRxfire();
    this.elusuario='users/1234'
     }

  handleInput(e){
    console.log('probando input');
    this.elusuario=e.target.value;
  }

  render() {
    return html`
<data-auth></data-auth>



<redux-uno></redux-uno>


<paper-input always-float-label label="Floating label" value=${this.elusuario} @input=${this.handleInput}></paper-input>
<paper-input always-float-label label="Floating label" value=${this.ladireccion} @input=${this.handleInput}></paper-input>
usuario ${this.elusuario}
usuario ${this.ladireccion}
      <!-- <data-firestore document-path=${this.elusuario} data=${this.data} @change=${(e) => this.data = event.target.value}></data-firestore>      -->
      <section>      
        <h2>Static page</h2>

        <p>This is a text-only page.</p>
        <p>It doesn't do anything other than display some static text.</p>
        <paper-button class="pink">link</paper-button>
      </section>
      <section>
        <h2>Welcome</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
      </section>
      <section>
        <p>Vestibulum at est ex. Aenean id ligula id nibh dictum laoreet. Etiam non semper erat. Pellentesque eu justo rhoncus diam vulputate facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat metus ex, vel fringilla massa tincidunt sit amet. Nunc facilisis bibendum tristique. Mauris commodo, dolor vitae dapibus fermentum, odio nibh viverra lorem, eu cursus diam turpis et sapien. Nunc suscipit tortor a ligula tincidunt, id hendrerit tellus sollicitudin.</p>
      </section>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
