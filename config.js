import firebase from 'firebase';

 const firebaseConfig = {
  apiKey: "AIzaSyB1enNQxkxngLBp9JTGMxf5G4nAhPqbjpI",
  authDomain: "school-attendance-app-a056a.firebaseapp.com",
  databaseURL: "https://school-attendance-app-a056a.firebaseio.com",
  projectId: "school-attendance-app-a056a",
  storageBucket: "school-attendance-app-a056a.appspot.com",
  messagingSenderId: "929597824047",
  appId: "1:929597824047:web:1d9da6ac0d2a49db4ffada"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();