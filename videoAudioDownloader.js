
const ytdl = require("youtube-dl-exec");
const fs = require("fs");
const path = require("path");




// videoFolder
const vFolder = "C:\\Users\\Deo Mandal\\OneDrive\\Desktop\\Video";
// audioFolder
const aFolder = "C:\\Users\\Deo Mandal\\OneDrive\\Desktop\\Audio";

// https://youtu.be/dcgRnBe5-bE : original  youtube shared url
// Decoding YouTube video URL  from original URL
const url = "https://www.youtube.com/watch?v=dcgRnBe5-bE"; //v= video_id
async function Videodown_() {
  try {
    // Audio Downloading
    console.log(
      "Audio downloading...[C:\\Users\\Deo Mandal\\OneDrive\\Desktop\\Audio]"
    );
    await ytdl(url, {
      output: path.join(aFolder, "audio.mp3"),
      format: "bestaudio",
    });
    console.log("Audio downloaded!");
  } catch (err) {
    console.error("Error:", err);
  }

    //  video Downloading
    console.log(
      "Video downloading...[C:\\Users\\Deo Mandal\\OneDrive\\Desktop\\Video]"
    );
    await ytdl(url, {
      output: path.join(vFolder, "video.mp4"),
      // format: "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best", :// this is for best quality provided by the link
      format: "bestvideo[height=1080]+bestaudio/best", // this for download video in 1080p
      // add mergeOutputFormat or set format type mp4 for mobile complability
      format :'mp4',
      mergeOutputFormat: "mp4",
    });
    console.log("Video downloaded!");

}

Videodown_();



