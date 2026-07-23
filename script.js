let username = "Priyaafri";
let password = "forever11";


// Login

function login(){

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === username && pass === password){

        document.getElementById("loginPage").style.display="none";
        document.getElementById("mainPage").style.display="block";

    }
    else{

        document.getElementById("error").innerHTML =
        "Wrong Username or Password ❌";

    }

}



// Photos

let photos = [];

for(let i=1;i<=19;i++){

    photos.push("photos"+i+".jpg");

}


let currentPhoto = 0;


let quotes = [

"💙 You are a beautiful blessing in life🫂",
"🩷 Smile always and stay happy🌗",
"✨ Every moment is special🧿",
"💖 Wishing endless happiness forever",
"🌸 Keep shining like a star",
"💙 Memories make life beautiful",
"🩷 A special day for a special person",
"🎂 Birthday wishes with lots of love",
"✨ Dreams come true",
"💖 Happiness follows you always",
"🌈 Keep smiling forever",
"💙 Beautiful moments stay forever",
"🩷 Enjoy every little happiness",
"🌸 Thank you for being the most beautifuk part of my life😘",
"✨ forever❤️💙....we stay together HAPPINESS.",
"💖 Celebrate your special day",
"🎈 More smiles and more memories",
"💙 Forever special",
"🩷 Happy Birthday Ammu🥹"
];



function showPhoto(){

    document.getElementById("photo").src =
    photos[currentPhoto];

    document.getElementById("quote").innerHTML =
    quotes[currentPhoto];

}



function nextPhoto(){

    currentPhoto++;

    if(currentPhoto >= photos.length){

        currentPhoto=0;

    }

    showPhoto();

}



function previousPhoto(){

    currentPhoto--;

    if(currentPhoto < 0){

        currentPhoto=photos.length-1;

    }

    showPhoto();

}




// Automatic Slideshow

setInterval(()=>{

    if(document.getElementById("mainPage").style.display==="block"){

        nextPhoto();

    }

},5000);




// Music

let musicPlaying=false;

function playMusic(){

    let song=document.getElementById("music");

    if(musicPlaying){

        song.pause();
        musicPlaying=false;

    }
    else{

        song.play();
        musicPlaying=true;

    }

}



// Letter

function openLetter(){

    document.getElementById("letter").style.display="block";

}




// Cake
function celebrate(){

    document.getElementById("birthdayMsg").innerHTML =
    "🎂 Happy Birthday Afri💙🩷";

    document.getElementById("cake").innerHTML =
    "🎂🕯️";

    document.getElementById("confetti").innerHTML =
    "🎉 🎊 ✨ 🎉 🎊 💖 ✨ 🎉";

}
