console.log("Music Player App")

// Play button Logic

let song = document.getElementById('music_link') // variable in which i store the song
let song_img = document.getElementById('song_img') // It's the img container which rotates when song play

let isplaying = false; // It's a variable to show that song is playing or not
let play_btn = document.getElementById('play_btn') // Tt's my play button

let title = document.getElementById('title');
let artist = document.getElementById('artist');
let prev_btn = document.getElementById('prev_btn');
let next_btn = document.getElementById('next_btn');


function playsong() {
    isplaying = true; // now song is playing we need to change the play icon to pause icon
    console.log("It's playing")
    song.play();

    play_btn.classList.replace("fa-play", "fa-pause") // changing play icon to pause icon
    song_img.classList.add("anime")
}

function pausesong() {
    isplaying = false; // now song should be stop
    console.log("Song Stops !!")
    song.pause();

    play_btn.classList.replace("fa-pause", "fa-play") // changing pause icon to play icon
    song_img.classList.remove("anime")
}

play_btn.addEventListener('click', () => {
    if (isplaying == true) {
        pausesong();
    }
    else {
        playsong();
    }
})

// SONGS DATA

let songs = [
    {
        title: 'PAL : [Slowed + Reverb]',
        artist: 'Arijit Singh & Shreya Goshal',
        music: 'Pal',
        image: 'pal.jpg'
    },
    {
        title: 'Pee Loon : [Slowed + Reverb]',
        artist: 'Mohit Chauhan',
        music: 'PeeLoon',
        image: 'pee_loon.jpg'
    },
    {
        title: 'Thoda Thoda Pyaar Hua',
        artist: 'Stebin Ben',
        music: 'ThodaThoda',
        image: 'thodapyaar.jpg'
    },
    {
        title: 'Insane ',
        artist: 'AP Dhillon',
        music: 'Insane',
        image: 'insane.jpg'
    },
    {
        title: 'Tu Jaane Na',
        artist: 'Atif Aslam',
        music: 'TujaaneNa',
        image: 'tuJaaneNA.jpg'
    }
]

// Changing the music data

function loadsong(songs) {
    title.textContent = songs.title
    artist.textContent = songs.artist
    music_link.src = `./music/${songs.music}.mp3`
    music_img.src = `./images/${songs.image}`
}

songindex = 0;

function nextsong() {
    // now increase the songIndex and repeat it also
    songindex = (songindex + 1) % songs.length;
    loadsong(songs[songindex]);
    // if we want song to play after changes
    playsong()
};

function prevsong() {
    songindex = (songindex - 1 + songs.length) % songs.length;
    loadsong(songs[songindex]);
    // if we want song to play after changes
    playsong()
};

next_btn.addEventListener('click', nextsong);
prev_btn.addEventListener('click', prevsong);
