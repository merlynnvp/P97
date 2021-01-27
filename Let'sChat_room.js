
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAfF7K1db7Gam7XCZ3T0h4RaClitWD3620",
    authDomain: "let-s-chat-66e8b.firebaseapp.com",
    projectId: "let-s-chat-66e8b",
    storageBucket: "let-s-chat-66e8b.appspot.com",
    messagingSenderId: "408288111701",
    appId: "1:408288111701:web:f639bb43f6a61fdf0978dc"
  };
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);

    window.location = "Let's_Chat_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_name +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoomName(name)
{
localStorage.setItem("room_name", name);
window.location = "Let's_Chat_page.html";
}