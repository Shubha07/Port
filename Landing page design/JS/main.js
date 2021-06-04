//Grabbing DOM Element
const time = document.getElementById("time"),
  greet = document.getElementById("greet"),
  name = document.getElementById("name"),
  aim = document.getElementById("aim");

//creating a funciton to show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //Identifying and setting AM or PM
  const apM = hour >= 12 ? "PM" : "AM";

  //12hr time format
  hour = hour % 12 || 12;

  //Output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

//Creating a function for adding zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//Creating function to set background image and content

function bgContent() {
  let today = new Date();
  hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage =
      "url('E:/Portfolio/Landing page design/Image/Morning.jpg')";
    greet.textContent = "Good Morning";
    document.body.style.color = "white";
  } else if (hour < 18) {
    document.body.style.backgroundImage =
      "url('E:/Portfolio/Landing page design/Image/Afternoon.jpg')";
    greet.textContent = "Good Afternoon";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundImage =
      "url('E:/Portfolio/Landing page design/Image/Night.jpg')";
    greet.textContent = "Good Night";
    document.body.style.color = "white";
  }
}

//get User Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Your Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

//get the user goal or aim for the day

function getAim() {
  if (localStorage.getItem("aim") === null) {
    aim.textContent = "[Enter your goal]";
  } else {
    aim.textContent = localStorage.getItem("aim");
  }
}

showTime();
bgContent();
getName();
getAim();

/*//set User Name

function setName(e) {
  if (e.type === "keypress") {
    //checking if the kepressed is enter
    if (e.keycode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}



name.addEventListner("keypress", setName);
name.addEventListner("blur", setName);
*/
