  export function data(){
    // const firebase = require("firebase");
    // require("firebase/firestore");    
    var config = {
        apiKey: "AIzaSyDpHUzHxcF4XXpjbDUR0wJ-2OpobKrRUww",
        authDomain: "test-fff34.firebaseapp.com",
        databaseURL: "https://test-fff34.firebaseio.com",
        projectId: "test-fff34",
        storageBucket: "test-fff34.appspot.com",
        messagingSenderId: "1049180123532"
      };
      firebase.initializeApp(config);    
      var db = firebase.firestore();    
      console.log('Base de datos: ' + db)
      return db;
  }
  