var music = new Audio('assets/alttp_intro.mp3');
var casper = new Audio('assets/nocontext.wav');
var finn = new Audio('assets/invade.wav')
var reevz = new Audio('assets/reevz.wav')

function introSound() {
    music.pause();
    music.currentTime = 0;
    music.play();
}

function casperSound() {
    casper.pause();
    casper.currentTime = 0;
    casper.play();
}

function finnSound() {
    finn.pause();
    finn.currentTime = 0;
    finn.play();
}

function reevzSound() {
    reevz.pause();
    reevz.currentTime = 0;
    reevz.play();
}



