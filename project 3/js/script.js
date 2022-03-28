/**
Project 3 Prototype
Lydia Graveline

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// Code goes here

let vid = document.getElementById("video");
let btn = document.getElementById("buttonBox");

// true while player is given a decision prompt
let deciding = "false"

// Go to video timestamp indicated by a button
function setCurTime(timeValue) {
  vid.currentTime = timeValue;
  play();
}

// listen on the event
vid.addEventListener("timeupdate", function () {
  // pause the video if a decision is being made
  if (deciding === "true"){
    this.pause();
    btn.style.visibility = "visible"; //display the buttons
  }
  // check whether we have passed 5 seconds,
  // current time is given in seconds
  if (this.currentTime >= 5 && this.currentTime <= 5.5 ) {
    //display the buttons
    deciding = "true"
  }
});

// Play the video
function play(){
  deciding = "false"
  btn.style.visibility = "hidden";
  vid.play();
}
