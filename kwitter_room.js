
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