import { LitElement, html } from 'lit-element';
import '@polymer/paper-button/paper-button.js';

// import {firebase} from 'firebase/firebase-app';
import firebase from '@firebase/app';
import 'firebase/firebase-auth';

import {authState} from 'rxfire/auth'

// import firebase from 'firebase/app';
import '@polymer/paper-button/paper-button.js';

class RxfireAuth extends LitElement {

    componentWillLoad() {
        authState(firebase.auth()).subscribe(u => (this.user = u));
      }

    login() {
            console.log('entrando a autenticar');
            const app = firebase.initializeApp({
              apiKey: "AIzaSyDpHUzHxcF4XXpjbDUR0wJ-2OpobKrRUww",
              authDomain: "test-fff34.firebaseapp.com",
              databaseURL: "https://test-fff34.firebaseio.com",
              projectId: "test-fff34",
              storageBucket: "test-fff34.appspot.com",
              messagingSenderId: "1049180123532"
          });
        
          const autentica = firebase.auth(); 

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
      }

    render() {
        return html`
        <paper-button @click="${this.login}">Autenticar</paper-button>
        `;        
    }
}
customElements.define('rxfire-auth', RxfireAuth);