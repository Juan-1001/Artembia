// nav responsive
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// nav2

function myFunction2() {
  var x = document.getElementById("myTopnav2");
  if (x.className === "topnav2") {
    x.className += " responsive2";
  } else {
    x.className = "topnav2";
  }
}

/*PRIMER REPRODUCTOR*/  
function _(query){
	return document.querySelector(query);
}
function _all(query){
	return document.querySelectorAll(query);
}
let songList = [
	{
		thumbnail:"audio/triptaured.jpg",
		audio:"señor_universo.mp3",
		songname:"Sr. Universo",
		artistname:"Triptaured"
	},
	{
		thumbnail:"audio/Toosie_Silde.jpg",
		audio:"Toosie_Slide.mp3",
		songname:"Toosie Slide",
		artistname:"Drake",
	},
	{
		thumbnail:"audio/Better_Now.jpg",
		audio:"Better_Now.mp3",
		songname:"Better Now",
		artistname:"Post Malone",
	},
	{
		thumbnail:"audio/Hippie_Sabotage.jpg",
		audio:"Hippie_Sabotage.mp3",
		songname:"Hippie Sabotage",
		artistname:"Devil Eyes",
	},
	{
		thumbnail:"audio/Alone_Again.jpg",
		audio:"Alone_Again.mp3",
		songname:"Alone Again",
		artistname:"Gilbert O'Sullivan",
	},
	{
		thumbnail:"audio/Perfect_Duet.jpg",
		audio:"Perfect_Duet.mp3",
		songname:"Perfect Duet",
		artistname:"Ed Sheeran - With Beyonce",
	},
	{
		thumbnail:"audio/Can't_Get_You_out_of_My_Head1.jpg",
		audio:"Can't_Get_You_out_of_My_Head.mp3",
		songname:"Can't Get You out of My Head (Cover)",
		artistname:"AnnenMayKantereit x Parcels",
	},
	{
		thumbnail:"audio/Are_You_Bored_Yet.jpg",
		audio:"Are_You_Bored_Yet.mp3",
		songname:"Are You Bored Yet",
		artistname:"Wallows",
	},
	{
		thumbnail:"audio/24K_Magic.jpg",
		audio:"24K_Magic.mp3",
		songname:"24K Magic",
		artistname:"Bruno Mars",
	},
	{
		thumbnail:"audio/Imagination.jpg",
		audio:"Imagination.mp3",
		songname:"Imagination",
		artistname:"Foster The People",
    },
    {
		thumbnail:"audio/Why'd_you_only_call_me_when_you're_high.jpg",
		audio:"Why'd_you_only_call_me_when_you're_high.mp3",
		songname:"Why'd you only call me when you're high?",
		artistname:"Arctic Monkeys"
	},
	{
		thumbnail:"audio/Young_Wild_&_Free.jpg",
		audio:"Young_Wild _Free.mp3",
		songname:"Young, Wild and Free",
		artistname:"Snoop Dogg & Wiz Khalifa",
	},
	{
		thumbnail:"audio/I_Feel_Like_I'm_Drowning.jpg",
		audio:"I_Feel_Like_I'm_Drowning.mp3",
		songname:"I Feel Like I'm Drowning",
		artistname:"Two Feet",
	},
	{
		thumbnail:"audio/Bohemian_Rhapsody.jpg",
		audio:"Bohemian_Rhapsody.mp3",
		songname:"Bohemian Rhapsody",
		artistname:"Queen",
	},
	{
		thumbnail:"audio/Surf.jpg",
		audio:"Surf.mp3",
		songname:"Surf",
		artistname:"Mac Miller",
	},
	{
		thumbnail:"audio/I_Was_Made_For_Lovin'_You.jpg",
		audio:"I_Was_Made_For_Lovin'_You.mp3",
		songname:"I Was Made For Lovin' You",
		artistname:"Kiss",
	},
	{
		thumbnail:"audio/On_Melancholy_Hill.jpg",
		audio:"On_Melancholy_Hill.mp3",
		songname:"On Melancholy Hill",
		artistname:"Gorillaz",
	},
	{
		thumbnail:"audio/Blinding_Lights.jpg",
		audio:"Blinding_Lights.mp3",
		songname:"Blinding Lights",
		artistname:"The Weeknd",
	},
	{
		thumbnail:"audio/The_Scientist.jpg",
		audio:"The_Scientist.mp3",
		songname:"The Scientist",
		artistname:"Coldplay",
	},
	{
		thumbnail:"audio/Girls_Like_You.jpg",
		audio:"Girls_Like_You.mp3",
		songname:"Girls Like You",
		artistname:"Maroon 5 - Cardi B",
	}
];

let currentSongIndex = 0;

let player = _(".player"),
	toggleSongList = _(".player .toggle-list");

let main = {
	audio:_(".player .main audio"),
	thumbnail:_(".player .main img"),
	seekbar:_(".player .main input"),
	songname:_(".player .main .details h2"),
	artistname:_(".player .main .details p"),
	prevControl:_(".player .main .controls .prev-control"),
	playPauseControl:_(".player .main .controls .play-pause-control"),
	nextControl:_(".player .main .controls .next-control")
}

toggleSongList.addEventListener("click", function(){
	toggleSongList.classList.toggle("active");
	player.classList.toggle("activeSongList");
});

_(".player .player-list .list").innerHTML = (songList.map(function(song,songIndex){
	return `
		<div class="item" songIndex="${songIndex}">
			<div class="thumbnail">
				<img src="images/${song.thumbnail}">
			</div>
			<div class="details">
				<h2>${song.songname}</h2>
				<p>${song.artistname}</p>
			</div>
		</div>
	`;
}).join(""));

let songListItems = _all(".player .player-list .list .item");
for(let i=0;i<songListItems.length;i++){
	songListItems[i].addEventListener("click",function(){
		currentSongIndex = parseInt(songListItems[i].getAttribute("songIndex"));
		loadSong(currentSongIndex);
		player.classList.remove("activeSongList");
	});
}

function loadSong(songIndex){
	let song = songList[songIndex];
	// main.thumbnail.setAttribute("src","./images/"+song.thumbnail);
	// document.body.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("./images/${song.thumbnail}") center no-repeat`;
	document.body.style.backgroundSize = "cover";
	main.songname.innerText = song.songname;
	main.artistname.innerText = song.artistname;
	main.audio.setAttribute("src","./audio/"+song.audio);
	main.seekbar.setAttribute("value",0);
	main.seekbar.setAttribute("min",0);
	main.seekbar.setAttribute("max",0);
	main.audio.addEventListener("canplay",function(){
		main.audio.play();
		if(!main.audio.paused){
			main.playPauseControl.classList.remove("paused");
		}
		main.seekbar.setAttribute("max",parseInt(main.audio.duration));
		main.audio.onended = function(){
			main.nextControl.click();
		}
	})
}
setInterval(function(){
	main.seekbar.value = parseInt(main.audio.currentTime);
},1000);

main.prevControl.addEventListener("click",function(){
	currentSongIndex--;
	if(currentSongIndex < 0){
		currentSongIndex = songList.length + currentSongIndex;
	}
	loadSong(currentSongIndex);
});
main.nextControl.addEventListener("click",function(){
	currentSongIndex = (currentSongIndex+1) % songList.length;
	loadSong(currentSongIndex);
});
main.playPauseControl.addEventListener("click",function(){
	if(main.audio.paused){
		main.playPauseControl.classList.remove("paused");
		main.audio.play();
	} else {
		main.playPauseControl.classList.add("paused");
		main.audio.pause();
	}
});
main.seekbar.addEventListener("change",function(){
	main.audio.currentTime = main.seekbar.value;
});
loadSong(currentSongIndex);



var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
	if (video.paused) {
	  video.play();
	  btn.innerHTML = "Pause";
	} else {
	  video.pause();
	  btn.innerHTML = "Play";
	}
  }