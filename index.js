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

x.style.display = "none";
y.style.display = "none";
z.style.display = "none";

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
