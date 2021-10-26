//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDa8jGr4Sx38PDeqRYmjHlsrEck3h3B894",
    authDomain: "lets-chat-app-5993b.firebaseapp.com",
    databaseURL: "https://lets-chat-app-5993b-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-5993b",
    storageBucket: "lets-chat-app-5993b.appspot.com",
    messagingSenderId: "797495384808",
    appId: "1:797495384808:web:00d02b9dc454d49966c75d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();