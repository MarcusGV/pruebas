import {data} from '../components/database-config.js';

export function datosVideos(nombre){
    let db = data();
    db.collection("users").add({
        first: nombre,
        last: "Lovelace",
        born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

    return db;
  }