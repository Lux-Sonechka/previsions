var modal;
var btn;
var span;

function OnStart() {
    // Get the modal
    modal = document.getElementById("myModal");

    // Get the button that opens the modal
    btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    span = document.getElementsByClassName("close");

    if (localStorage.getItem("welcome-popup") == undefined) {
        modal.style.display = "block";
        localStorage.setItem("welcome-popup", true)
    }
}

function Red_Home() {
    window.alert("Aren't you at home already?")
}
function Red_Slogan() {
    window.open('https://jisho.org/search/%E4%BA%88%E8%A8%80')
}
function Red_About() {
    window.location.replace("about.html")
}
function Red_Home_true() {
    window.location.href = 'index.html'
}



// When the user clicks on the button, open the modal


// When the user clicks on <span> (x), close the modal
function close_popup() {
  modal.style.display = "none";
  document.getElementById('song-unfamiliar').play()  
}
function close_chapter() {
    document.getElementById('Modal-chapter').style.display = "none";
  }
  function close_about() {
    document.getElementById('Modal-about').style.display = "none";
  }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function open_chapter() {
    document.getElementById('Modal-chapter').style.display = "block";
}
function chapter_1() {
    const new_window = window.open()
    new_window.location.href = "Chapters/1st/chapter1.html"
}
function chapter_2() {
    const new_window = window.open()
    new_window.location.href = "Chapters/2nd/chapter2.html"
}
function chapter_3() {
    const new_window = window.open()
    new_window.location.href = "Chapters/3rd/chapter3.html"
}
function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    let size = Math.random() * 100 + 10;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.animationDuration = Math.random() * 5 + 5 + "s";
    petal.style.animationDelay = Math.random() * 2 + "s";
    
    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 300);