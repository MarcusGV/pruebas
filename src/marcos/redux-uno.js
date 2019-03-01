import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
// This element is connected to the Redux store.
import { store } from './../store.js';

// These are the actions needed by this element.
import { increment, decrement } from '../actions/counter.js';

// We are lazy loading its reducer.
import counter from './../reducers/counter.js';
store.addReducers({
  counter
});

class ReduxUno extends connect(store) (LitElement) {

    static get properties() {
        return {
          // This is the data from the store.
          _clicks: { type: Number },
          _value: { type: Number }
        };
      }

    render() {
        return html`
        <p>Probando</p>
        <div class="circle">HOLAAAA ${this._value}</div>
        `;
    }

    
  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._clicks = state.counter.clicks;
    this._value = state.counter.value;
  }
}
customElements.define('redux-uno', ReduxUno);