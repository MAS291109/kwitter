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
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
}
 var user_name = localStorage.getItem("user_name");
 var room_name = localStorage.getItem("room_name");

 function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name: user_name,
      message: msg,
      like: 0
});

document.getElementById("msg").value = "";
 }