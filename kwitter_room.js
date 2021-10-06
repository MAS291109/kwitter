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

    var user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

    function add_room(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({  
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name : " + Room_names);
      var row = "<div class = 'room_name' id='" +Room_names+"' onclick= 'redirectToRoomName(this.id)'> #" +Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(room)
{
console.log(room);
localStorage.setItem("room_name", room);
window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}