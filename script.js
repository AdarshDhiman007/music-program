console.log("welcome to music player")

let songIndex = 0;
let audioElement = new Audio("We Rollin - Shubh.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"))
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'))
let previous = document.getElementById('previous')
let skip = document.getElementById('skip')
let bottomSongName = document.getElementById('bottomSongName')



let song = [{
    sid: 0,
    songName: "We Rollin - Shubh",
    filePath: "We Rollin - Shubh.mp3",
    coverPath: "cover1.jpeg"
  },
  {
    sid: 1,
    songName: "Baby Keem-cocoa-ft-Don Toliver",
    filePath: "Baby-Keem-cocoa-ft-Don-Toliver-(HipHopKit.com).mp3",
    coverPath: "cover2.jpeg"
  },
  {
    sid: 2,
    songName: "Doja Cat - Vegas",
    filePath: "Doja_Cat_-_Vegas_360media.com.ng.mp3",
    coverPath: "cover3.jpeg"
  },
  {
    sid: 3,
    songName: "Key Glock - Ambition For Cash",
    filePath: "Key_Glock_-_Ambition_For_Cash.mp3",
    coverPath: "cover4.webp"
  },
  {
    sid: 4,
    songName: "Prodby668 - Prolly My Spookiest Beat",
    filePath: "Prodby668_-_Prolly_My_Spookiest_Beat.mp3",
    coverPath: "cover5.jpg"
  },
  {
    sid: 5,
    songName: "Sundress",
    filePath: "Baby-Keem-cocoa-ft-Don-Toliver-(HipHopKit.com).mp3",
    coverPath: "cover6.jpg"
  },
  {
    sid: 6,
    songName: "ARE WE STILL FRIENDS ",
    filePath: "12 ARE WE STILL FRIENDS_.mp3",
    coverPath: "cover7.jpg"
  }
]


songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName('img')[0].src = song[i].coverPath
  element.getElementsByClassName('songName')[0].innerText = song[i].songName

})



masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime == 0) {
    audioElement.play();
    masterPlay.src = 'pause-button.png';
    songItemPlay[songIndex].src='pause-button.png'
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.src = 'play-button.png';
    songItemPlay[songIndex].src='play-button.png'
    gif.style.opacity = 0;
  }

})

previous.addEventListener('click', () => {
  songIndex--;
  audioElement.src=song[songIndex].filePath
  audioElement.play()
  makeAllPlay()
  songItemPlay[songIndex].src='pause-button.png'
  bottomSongName.innerText = song[songIndex].songName
  console.log(audioElement.src) 
})

skip.addEventListener('click', () => {
  songIndex++;
  audioElement.src=song[songIndex].filePath
  audioElement.play()
  makeAllPlay()
  songItemPlay[songIndex].src='pause-button.png'
  bottomSongName.innerText = song[songIndex].songName
  console.log(audioElement.src)

})

makeAllPlay = () => {
  songItemPlay.forEach((element) => {

    element.src = 'play-button.png';

  });

};

console.log(songItemPlay)

songItemPlay.forEach((element, i) => {

  element.addEventListener('click', () => {
    if (songIndex != i)
      audioElement.src = song[i].filePath

    if (audioElement.paused || audioElement.currentTime == 0) {
      makeAllPlay();

      element.src = 'pause-button.png';
      gif.style.opacity = 1;
      audioElement.play();
      masterPlay.src = 'pause-button.png';
      songIndex = i;
      bottomSongName.innerText = song[i].songName
      console.log(songIndex)
    } else {
      audioElement.pause();
      element.src = 'play-button.png';
      masterPlay.src = 'play-button.png';
    }


  })
})

audioElement.addEventListener('timeupdate', () => {
  console.log('timeupdate');

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})



