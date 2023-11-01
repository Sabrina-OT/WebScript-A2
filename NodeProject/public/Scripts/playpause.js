//go to html file, get the element video, store in var myVideo
var myVideo=document.getElementById("video"); 
function playPause() 
{ 
    if (myVideo.paused) myVideo.play(); 
    else myVideo.pause(); 
} 