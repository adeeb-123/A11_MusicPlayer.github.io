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


// progress bar logic

let progress = document.getElementById('progress')
let total_duration = document.getElementById('duration')
let current_time = document.getElementById('current_time')


song.addEventListener('timeupdate',(event)=>{
    // console.log(event)
    const {currentTime , duration} = event.srcElement;
    // console.log(`current time is ${currentTime}`)
    // console.log(`Duration time is ${duration}`)
    
    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`

    // ------------------> Duration Time update <-----------------

    let minute_duration = Math.floor(duration / 60);  // converted into minute
    let second_duration = Math.floor(duration % 60); // converted into second

    // console.log(minute_duration)
    // console.log(second_duration)

    let tot_duration = `${minute_duration}:${second_duration}`;
    if(duration){

        total_duration.textContent = `${tot_duration}`
    }

    // ------------------> Current Time update <-----------------
    let minute_currentTime = Math.floor(currentTime / 60);  // converted into minute
    let second_currentTime = Math.floor(currentTime % 60); // converted into second

    // console.log(minute_duration)
    // console.log(second_duration)

    if(second_currentTime < 10){
        second_currentTime = `0${second_currentTime}`
    }
    let tot_currentTime = `${minute_currentTime}:${second_currentTime}`;
    current_time.textContent = `${tot_currentTime}`
});

// whenever someone clicks on the progress bar song shoul starts from there
const progress_div = document.getElementById('progress_div')

progress_div.addEventListener('click' ,(event)=>{
    // console.log(event)
    const {duration} = song;

    let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
    console.log(move_progress)

    song.currentTime = move_progress  // currentTime is a property (google it for details)
})

// ----------------------------> if music ends we want to play the next song ----------------------<
song.addEventListener('ended',  nextsong); // song end apply the nextsong function

next_btn.addEventListener('click', nextsong);
prev_btn.addEventListener('click', prevsong);
