var firebaseConfig = {
      apiKey: "AIzaSyCfjgHS6MmNyhThumeg9Vh5FIPT8C93OMw",
      authDomain: "kwitter-new-dab82.firebaseapp.com",
      databaseURL: "https://kwitter-new-dab82-default-rtdb.firebaseio.com",
      projectId: "kwitter-new-dab82",
      storageBucket: "kwitter-new-dab82.appspot.com",
      messagingSenderId: "444540316082",
      appId: "1:444540316082:web:a8cf4ccef23020a0951cab"
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