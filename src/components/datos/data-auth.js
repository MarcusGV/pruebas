import { LitElement, html } from 'lit-element';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
//import firebase from 'firebase/app';
import '@polymer/paper-button/paper-button.js';

class DataAuth extends LitElement {
  autenticar(){
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
  autentica.signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  }

  render() {
    return html`
    <paper-button raised @click="${this.autenticar}">Autenticar</paper-button>
    `;
  }
}
customElements.define('data-auth', DataAuth);