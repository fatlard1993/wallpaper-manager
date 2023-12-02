const path = require('path');

const notifier = require('node-notifier');
const { randFromArr } = require('./utils');

const wallpaperDir = path.resolve('./wallpapers');
const savedWallpaperDir = path.resolve('./savedWallpapers');

// var config = new Config(path.resolve('./config.json'), {
// 	subreddits: [''],
// 	blacklist: []
// });

//get list of pre-existing files
	//use this list as the base for the next wallpapers list
	//reset this list only if a special flag is passed (essentially every reboot)


function notify(title, message){
	notifier.notify({
		title: message ? title : 'Wallpaper Manager',
		message: message ? message : title
	});
}

function getWallpapers(count = 3, subreddit, keepGoing){
	if(!subreddit){
		subreddit = randFromArr(config.subreddits);

		keepGoing = true;
	}

	//if no subreddit specified select random from config
	//crawl reddit page for image links to download
	//loop through links checking if their hash exists in either the pre-existing list or black/white list
		//if neither download the image until the requested count is reached or links are exhausted
		//if subreddit is random keep going until count is reached
	//once done prepend the new wallpapers to the next wallpapers list
}

function deleteWallpaper(){
	//remove file
	//add file hash to blacklist
	//remove hash from next wallpaper list
}

function setWallpaper(){
	//shift from next wallpaper list
}

function saveWallpaper(){
	//move file to saved folder
	//add file hash to whitelist
	//remove hash from next wallpaper list
}