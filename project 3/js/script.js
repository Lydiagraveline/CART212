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
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");

// true while player is given a decision prompt
let deciding = "false"

function start(){
  vid.style.display = "block";
  document.getElementById("startbtn").style.display = "none";
  vid.play();
}

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

  if (this.currentTime >= 2 && this.currentTime <= 2.3 ) {
    option1.setAttribute('onclick','play()')
    option2.setAttribute('onclick','setCurTime(8)')
    deciding = "true"
  }
  if (this.currentTime >= 16) {
    option1.setAttribute('onclick','setCurTime(0)')
    option2.setAttribute('onclick','setCurTime(8)')
    deciding = "true"
  }
});

// Play the video
function play(){
  deciding = "false"
  btn.style.visibility = "hidden";
  vid.play();
}
