// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/firebase-auth'
// import 'firebase/storage';
import { collectionData, doc, collection  } from 'rxfire/firestore';
import 'firebase/auth';
import { getDownloadURL } from 'rxfire/storage';
import { of, combineLatest, merge } from 'rxjs';
import { authState } from 'rxfire/auth';
import { switchMap, map, mergeMap, concatAll, withLatestFrom, tap, filter } from 'rxjs/operators';

import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

import '@polymer/paper-dialog/paper-dialog.js'
import '@polymer/paper-button/paper-button.js'


  export function datosRxfire(){
    const app = firebase.initializeApp({
        apiKey: "AIzaSyDpHUzHxcF4XXpjbDUR0wJ-2OpobKrRUww",
        authDomain: "test-fff34.firebaseapp.com",
        databaseURL: "https://test-fff34.firebaseio.com",
        projectId: "test-fff34",
        storageBucket: "test-fff34.appspot.com",
        messagingSenderId: "1049180123532"
    });
       
    const db = firebase.firestore();    
    // const settings = { timestampsInSnapshots: true };
    // db.settings(settings);

//     authState(app.auth())
//     .pipe(
//         filter(u => u !== null)
//     ).subscribe(u => { console.log('the logged in user', u); });

//     const query = db.collection('users').limit(5);

//     collectionData(query, 'id').subscribe(users => console.log(users));

//     const usuario1=db.doc('users/1234');

//     usuario1.set({nombre:'Conocida 2222'});
    
//     doc(usuario1).subscribe(snapshot => {
//         console.log(snapshot.id);
//         console.log(snapshot.data());
//     })

//     var variable=Array

//     collection(db.collection('users'))
//     .pipe(map(docs => docs.map(d => d.data())))
//     .subscribe(users => { console.log(users) });

// console.log('variable:' , variable)

//     const usuarios=[
//       {
//         nombre: 'Miguel Angel Alvarez',
//         email: 'miguel@desarrolloweb.com'
//       },
//       {
//         nombre: 'Alvaro Martínez',
//         email: 'contacto@escuela.it'
//       },
//       {
//         nombre: 'Jhon Doe',
//         email: 'jhon@example.com'
//       },
//     ]

//     return usuarios
    
    }
