// console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("1.mp3");
console.log(audioElement)
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"));
// console.log(songItem);
let songs = [
  {
    songName: "Warriyo - Mortals",
    filePath: "../ssongs/1.mp3",
    coverPath: "../coverss/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "../ssongs/2.mp3",
    coverPath: "../coverss/2.jpg",
  },
  {
    songName: "DEAF KEV",
    filePath: "../ssongs/3.mp3",
    coverPath: "../coverss/3.jpg",
  },
  {
    songName: "Heaven & H!DE",
    filePath: "../ssongs/4.mp3",
    coverPath: "../coverss/4.jpg",
  },
  {
    songName: "Closer",
    filePath: "../ssongs/5.mp3",
    coverPath: "../coverss/5.jpg",
  },
  {
    songName: "Don't let me Down",
    filePath: "../ssongs/6.mp3",
    coverPath: "../coverss/6.jpg",
  },
  {
    songName: "Believer",
    filePath: "../ssongs/7.mp3",
    coverPath: "../coverss/7.jpg",
  },
  {
    songName: "Moye - Moye",
    filePath: "../ssongs/8.mp3",
    coverPath: "../coverss/8.jpg",
  },
  {
    songName: "Gulaab",
    filePath: "../ssongs/9.mp3",
    coverPath: "../coverss/9.jpg",
  },
  {
    songName: "All We Know",
    filePath: "../ssongs/10.mp3",
    coverPath: "../coverss/10.jpg",
  },
];

songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//   console.log(element.getElementsByTagName("img")[0]);
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// auidoElement. play();

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
//   console.log("timeupdate");
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
        // console.log('byby')
      element.classList.add("fa-circle-play");
      element.classList.remove("fa-circle-pause");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
    // play 
    
    if(audioElement.currentTime>0){
        //pause
       
        audioElement.pause();
        audioElement.currentTime = 0;
    }else{
        // console.log(' audio element - ',audioElement);
        songIndex = parseInt(e.target.id);
        
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        
        audioElement.src = `../ssongs/${songIndex + 1}.mp3`;
        
        masterSongName.innerText = songs[songIndex].songName;
        
        audioElement.currentTime = 0;
        
        audioElement.play();
        
        gif.style.opacity = 1;
    }  
      
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `../ssongs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `../ssongs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
