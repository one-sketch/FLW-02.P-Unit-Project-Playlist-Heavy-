// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

/*
let images = ["https://lh3.googleusercontent.com/HyW6tj5Qzgx5EMhyxgssxe3ZpO6sUSiRRONUS1qXJVwNKnIBdStxt7BPCDHm3QGRoPZOZdTwr_6sx7gf=w544-h544-l90-rj", "https://lh3.googleusercontent.com/gFlETzxpQNG5j0UCViKV41R-Miec0IZarmGmIwfqDVgM7FWwzS2Vc6HNG2hUnIPjSq5Kf2mApC4dhi-r=w544-h544-l90-rj","https://lh3.googleusercontent.com/tnhqj9DoW6bnbFh5FCrvUAVOA5WQWFNC9MelOLmK0ilNb2GptdSbvrR-HP3GQcv8RAXPCgbgDLa3erUr=w544-h544-l90-rj", "https://lh3.googleusercontent.com/27DmrXbgrzbAt-4_QEIVv9duFpDMfTjeOxrjVNrYgnaJjdzfhw0een52LGhQZH8N2IcDoHAoep6UtmYG=w544-h544-l90-rj"];

let songNames = ["Pixel Galaxy", "Bubble Tea", "Marble Soda", "Pastel"];

let artist = ["Snail’s House", "Dark Cat", "Shawn Wasabi", "Moe Shop"];

let songLinks = ["https://music.youtube.com/watch?v=RK8e4JQgPfo&feature=share","https://music.youtube.com/watch?v=JBKXmHRSURs&feature=share","https://music.youtube.com/watch?v=qAeybdD5UoQ&feature=share","https://music.youtube.com/watch?v=NfJpdNi0-rM&feature=share"];
*/

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.

let song1 = {
song_image:"https://lh3.googleusercontent.com/HyW6tj5Qzgx5EMhyxgssxe3ZpO6sUSiRRONUS1qXJVwNKnIBdStxt7BPCDHm3QGRoPZOZdTwr_6sx7gf=w544-h544-l90-rj",
  song_name: "Pixel Galaxy",
  song_artist: "Snail’s House",
  song_link: "https://music.youtube.com/watch?v=RK8e4JQgPfo&feature=share"
};

let song2 = {
  song_image:"https://lh3.googleusercontent.com/gFlETzxpQNG5j0UCViKV41R-Miec0IZarmGmIwfqDVgM7FWwzS2Vc6HNG2hUnIPjSq5Kf2mApC4dhi-r=w544-h544-l90-rj",
  song_name: "Bubble Tea",
  song_artist: "Dark Cat",
  song_link: "https://music.youtube.com/watch?v=qAeybdD5UoQ&feature=share"
};

let song3 = {
  song_image:"https://lh3.googleusercontent.com/tnhqj9DoW6bnbFh5FCrvUAVOA5WQWFNC9MelOLmK0ilNb2GptdSbvrR-HP3GQcv8RAXPCgbgDLa3erUr=w544-h544-l90-rj",
  song_name: "Marble Soda", 
  song_artist: "Shawn Wasabi", 
  song_link: "https://music.youtube.com/watch?v=RK8e4JQgPfo&feature=share"
};

let song4 = {
  song_image:"https://lh3.googleusercontent.com/27DmrXbgrzbAt-4_QEIVv9duFpDMfTjeOxrjVNrYgnaJjdzfhw0een52LGhQZH8N2IcDoHAoep6UtmYG=w544-h544-l90-rj",
  song_name: "Pastel",
  song_artist: "Moe Shop",
  song_link: "https://music.youtube.com/watch?v=NfJpdNi0-rM&feature=share"
};
let playlist = [song1, song2, song3, song4];

//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
let imageValue = image.value;
let nameValue = songName.value;
let artistValue = artist.value;
let linkValue = songLink.value;


// task 10: use `.push()` to add each input value to the correct array.
  image.push(imageValue);
  songName.push(nameValue);
  artist.push(artistValue);
  songLink.push(linkValue);
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

  image.forEach(function(image){
     displayImage.insertAdjacentHTML('beforeend', `<img src=${image}>`);
   });

  songName.forEach(function(songName){
     displaySong.insertAdjacentHTML('beforeend', `<p>${songName}</p>`);
   });

 artist.forEach(function(artist){
     displayArtist.insertAdjacentHTML('beforeend', `<p>${artist}</p>`);
   });

   songLink.forEach(function(songLink){
     displayLink.insertAdjacentHTML('beforeend', `<a href="${songLink}">Click Here</a>`);
   });


}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
