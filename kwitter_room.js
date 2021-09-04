
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBsBAB7Xgz1b1gNwas3Ez-NswTkuiCRaXk",
      authDomain: "kwitter-ff18a.firebaseapp.com",
      databaseURL: "https://kwitter-ff18a-default-rtdb.firebaseio.com",
      projectId: "kwitter-ff18a",
      storageBucket: "kwitter-ff18a.appspot.com",
      messagingSenderId: "139450447665",
      appId: "1:139450447665:web:4717ee34b4ba3eef266210"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
