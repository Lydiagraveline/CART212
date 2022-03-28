/**
Project 3 Prototype
Lydia Graveline

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// Code goes here

let vid = document.getElementById("video");
let btn = document.getElementById("button");

// Go to video timestamp indicated by a button
function setCurTime(timeValue) {
  vid.currentTime = timeValue;
  vid.play();
}

// listen on the event
vid.addEventListener("timeupdate", function () {
  // check whether we have passed 5 seconds,
  // current time is given in seconds
  if (this.currentTime >= 5 && !this.currentTime <= 5) {
    // pause the playback
    this.pause();
  }
});

function play(){
  vid.play();
}
