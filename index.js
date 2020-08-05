function food() {
  var x = document.getElementById("food");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function drink() {
  var y = document.getElementById("drink");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
function side() {
  var z = document.getElementById("side");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyBSYHs1P_AhrlQpeuotE0BvCerK-9nDfbA",
  authDomain: "the-firebase-taste.firebaseapp.com",
  databaseURL: "https://the-firebase-taste.firebaseio.com",
  projectId: "the-firebase-taste",
  storageBucket: "the-firebase-taste.appspot.com",
  messagingSenderId: "731265910423",
  appId: "1:731265910423:web:177b17a4c95e5c6f434bd2",
  measurementId: "G-6WQTHYWZFM"
};
firebase.initializeApp(firebaseConfig);
//Initialize Forked Firebase

var ESC_MAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};

function escapeHTML(s, forAttribute) {
    return s.replace(forAttribute ? /[&<>'"]/g : /[&<>]/g, function(c) {
        return ESC_MAP[c];
    });
}
//Makes a sanitizer for user inputs ABOVE

$('#clickme').click(function(){
  var date = new Date();
  let name = document.getElementById("name").value;
  var nameSanitized = escapeHTML(name, true);
  var message = document.getElementById("message").value;
  var messageSanitized = escapeHTML(message, true);
  let time = date.toLocaleString()
  let input = `<span style="font-weight: bold;margin-right: 20px;">${nameSanitized}:</span> ${messageSanitized} <span id="timetext">${time}</span>`
  let newMsgInDatabase = firebase.database().ref("dbdemo").push();
  newMsgInDatabase.set(input); //from socket.emit to database.push
  $('#message').val(''); //sets message bar back to being empty after you press send
  return false;
});
//Adds your message ABOVE

firebase.database().ref("dbdemo").on('child_added', function(msgObj){
  //Append msgObj.value to list under here
  let msg = msgObj.val();
  $('#messages').append(`<li>${msg}</li>`);
  window.scrollTo(0, document.body.scrollHeight);
});
