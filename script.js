const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.getElementById("progress");
const duration = document.getElementById("duration");
const volume = document.getElementById("volume");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playlist = document.getElementById("playlist");

let songs = [
  {src: "C:/internship2/songs/17barish lata mangeskar.mp3", title: "17barish", artist: "lata mangeskar"},
  {src: "C:/internship2/songs/aa jao na arijit singh.mp3", title: "aa jao na", artist: "arijit singh"},
  {src: "C:/internship2/songs/agar tum mil jao shreya ghosal.mp3", title: "agar tum mil jao", artist: "shreya ghosal"},
  {src: "C:/internship2/songs/agar tum sath ho AR Rahman.mp3", title: "agar tum sath ho", artist: "AR Rahman"},
  {src: "C:/internship2/songs/andhekhi anjani si lata mangeskar.mp3", title: "andhekhi anjani si", artist: "lata mangeskar"},
  {src: "C:/internship2/songs/apki nazron ne samjhe lata mangeskar.mp3", title: "apki nazron ne samjhe", artist: "lata mangeskar"},
  {src: "C:/internship2/songs/bairiya arijit singh.mp3", title: "bairiya", artist: "arijit singh"},
  {src: "C:/internship2/songs/bekhayali arijit singh.mp3", title: "bekhayali", artist: "arijit singh"},
  {src: "C:/internship2/songs/bheegi bheegi raton me lata mangeskar.mp3", title: "bheegi bheegi raton me", artist: "lata mangeskar"},
  {src: "C:/internship2/songs/deewana deewana AR Rahman.mp3", title: "deewana deewana", artist: "AR Rahman"},
  {src: "C:/internship2/songs/dekha ek khawab lata mangeskar.mp3", title: "dekha ek khawab", artist: "lata mangeskar"},
  {src: "C:/internship2/songs/dhadak shreya ghosal.mp3", title: "dhadak", artist: "shreya ghosal"},
  {src: "C:/internship2/songs/dil to pagal hai lata mangeskar.mp3", title: "dil to pagal hai", artist: "lata mangeskar"},
  {src: "C:/internship2/songs/ek mithi si chubhan lata mangeskar.mp3", title: "ek mithi si chubhan", artist: "lata mangeskar"},
  {src: "C:/internship2/songs/gehra hua arijit singh.mp3", title: "gehra hua", artist: "arijit singh"},
  {src: "C:/internship2/songs/Guzarish AR Rahman.mp3", title: "Guzarish", artist: "AR Rahman"},
  {src: "C:/internship2/songs/ham tere pyar me lata mangeskar.mp3", title: "ham tere pyar me", artist: "lata mangeskar"},
  {src: "C:/internship2/songs/lagja gale lata mangeskar.mp3", title: "lagja gale", artist: "lata mangeskar"},
  {src: "C:/internship2/songs/lo man liya arijit singh.mp3", title: "lo man liya", artist: "arijit singh"},
  {src: "C:/internship2/songs/Mast Nazron Se Allah Bachaye (Nusrat Fateh Ali Khan).mp3", title: "mast Nazron Se Allah Bachaye", artist: "Nusrat Fateh Ali Khan"},
  {src: "C:/internship2/songs/o mere dil ruba lata mangeskar.mp3", title: "o mere dil ruba ", artist: "lata mangeskar"},
  {src: "C:/internship2/songs/pal pal har pal shreya ghosal.mp3", title: "pal pal har pal", artist: "shreya ghosal"},
  {src: "C:/internship2/songs/pal pal har pal shreya ghosal.mp3", title: "pal pal har pal", artist: "shreya ghosal"},
  {src: "C:/internship2/songs/phir bhi tumko chahunga arijit singh.mp3", title: "phir bhi tumko chahunga", artist: "arijit singh"},
  {src: "C:/internship2/songs/puchho na puchho kya hua shreya ghosal.mp3", title: "puchho na puchho kya hua", artist: "shreya ghosal"},
  {src: "C:/internship2/songs/saibo shreya ghosal.mp3", title: "saibo", artist: "shreya ghosal"},
  {src: "C:/internship2/songs/sajini arijit singh.mp3", title: "sajini", artist: "arijit singh"},
  {src: "C:/internship2/songs/samjhawan shreya ghosal.mp3", title: "samjhawan", artist: "shreya ghosal"},
  {src: "C:/internship2/songs/sitare arijit singh.mp3", title: "sitare", artist: "arijit singh"},
  {src: "C:/internship2/songs/sun raha hai na tu shreya ghosal.mp3", title: "sun raha hai na tu", artist: "shreya ghosal"},
  {src: "C:/internship2/songs/suna hai tere dil shreya ghosal.mp3", title: "suna hai tere dil", artist: "shreya ghosal"},
  {src: "C:/internship2/songs/tere bina zindagi se koi sikwa to nahi lata mangeskar.mp3", title: "tere bina zindagi se koi sikwa to nahi", artist: "lata mangeskar"},
  {src: "C:/internship2/songs/tere kayant mere khali haath AR Rahman.mp3", title: "tere kayant mere khali haath", artist: "AR Rahman"},
  {src: "C:/internship2/songs/tu hai to mai hu arijit singh.mp3", title: "tu hai to mai hu", artist: "arijit singh"},
  {src: "C:/internship2/songs/tum yaad aaye lata mangeskar.mp3", title: "tum yaad aaye", artist: "lata mangeskar"},
  {src: "C:/internship2/songs/yaad sataye teri neend lata mangeskar.mp3", title: "yaad sataye teri neend", artist: "lata mangeskar"}
];

let currentIndex = 0;

// Load song
function loadSong(index) {
  audio.src = songs[index].src;
  title.innerText = songs[index].title;
  artist.innerText = songs[index].artist;
}
loadSong(currentIndex);

// Play
playBtn.addEventListener("click", () => {
  audio.play();
});

// Pause
pauseBtn.addEventListener("click", () => {
  audio.pause();
});

// Next
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  audio.play();
});

// Previous
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  audio.play();
});

// Progress bar update
audio.addEventListener("timeupdate", () => {
  progress.value = audio.currentTime;
  progress.max = audio.duration;
  duration.innerText = formatTime(audio.currentTime) + " / " + formatTime(audio.duration);
});

progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});

// Volume control
volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

// Playlist click
playlist.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    currentIndex = item.dataset.index;
    loadSong(currentIndex);
    audio.play();
  });
});

// Autoplay next song
audio.addEventListener("ended", () => {
  nextBtn.click();
});

// Format time
function formatTime(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = Math.floor(seconds % 60);
  if (secs < 10) secs = "0" + secs;
  return mins + ":" + secs;
}
