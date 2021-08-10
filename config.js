import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-nwusTIA3GeEx7ovqwEPA0TSeBAIyIl4",
    authDomain: "school-attendence-app-20c49.firebaseapp.com",
    databaseURL: "https://school-attendence-app-20c49-default-rtdb.firebaseio.com",
    projectId: "school-attendence-app-20c49",
    storageBucket: "school-attendence-app-20c49.appspot.com",
    messagingSenderId: "605795762038",
    appId: "1:605795762038:web:ac4c6802ab16b56a748457"
  };


// Initialize Firebase
let app =   firebase.initializeApp(firebaseConfig);
export default app.database();
