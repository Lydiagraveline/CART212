/**
Project 3 Prototype
Lydia Graveline

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// Code goes here

let vid = document.getElementById("video");
let music = document.getElementById("music");
let btn = document.getElementById("buttonBox");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");

// true while player is given a decision prompt
let deciding = "false"

function start(){
  document.getElementById("vidBox").style.display = "block";
  document.getElementById("startbtn").style.display = "none";
  vid.play();
  music.play();
}

// Go to video timestamp indicated by a button
function setCurTime(timeValue) {
  vid.currentTime = timeValue;
  play();
}

//loop the soundtrack
music.addEventListener("timeupdate", function () {
  if (music.currentTime >= 105){
    music.currentTime = 3
    music.play();
  }
});

// listen on the event
vid.addEventListener("timeupdate", function () {
  // pause the video if a decision is being made
  if (deciding === "true"){
    //this.pause();
    option1.style.visibility = "visible"; //display the buttons
    option2.style.visibility = "visible";
  }


  // timestamp 1
  if (this.currentTime >= 4.5 && this.currentTime <= 9 ) {
    //loop
    if (this.currentTime >= 8.5){
      this.currentTime = 5.5;
    }
    //skip forward
    option1.setAttribute('onclick','setCurTime(76)')
    //play
    option2.setAttribute('onclick','setCurTime(9.3)')
    deciding = "true"
  }
  if (this.currentTime >= 25 && this.currentTime <= 33.5 ) {
    //loop
    if (this.currentTime >= 33){
      this.currentTime = 28.3;
    }
    option1.setAttribute('onclick','setCurTime(122.5)') //skip forward
    option2.setAttribute('onclick','setCurTime(34)') //play
    deciding = "true"
  }
  if (this.currentTime >= 56.5 && this.currentTime < 66.3 ) {
    //loop
    if (this.currentTime >= 66){
      this.currentTime = 60;
    }
    option1.setAttribute('onclick','setCurTime(92.7)') //skip forward
    option2.setAttribute('onclick','setCurTime(66.3)') //play
    deciding = "true"
  }

  //restart from begining
  if (this.currentTime >= 75 && this.currentTime < 75.3){
    this.currentTime = 0;
  }
  //1 minute 46 seconds
  if (this.currentTime >= 106.5 && this.currentTime <= 106.8 ) {
    this.pause();
    option1.setAttribute('onclick','setCurTime(152)') //skip forward
    option2.setAttribute('onclick','setCurTime(107.1)') //play
    deciding = "true"
  }

  //restart from begining
  if (this.currentTime >= 151 && this.currentTime < 151.5){
    this.currentTime = 0;
  }
  if (this.currentTime >= 176) {
    this.currentTime = 0;
  }
});

// Play the video
function play(){
  deciding = "false"
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  vid.play();
}
