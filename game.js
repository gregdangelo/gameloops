/*
js13k Game
http://js13kgames.com/

Js13kGames is a JavaScript coding competition for HTML5 Game Developers. The fun part of the compo is the file size limit set to 13 kilobytes. The competition will start at 13:00 CEST, 13th August and will end at 13:00 CEST, 13th September 2018. Theme for 2018 will be announced on 13th August.
https://gamedevelopment.tutsplus.com/articles/how-to-minify-your-html5-game-for-the-js13kgames-competition--cms-21883


Theme for 2018 is: offline.

Categories - 
Desktop
	Full power of the hardware.
Mobile
	Handheld touch devices.
Server
	Node.js multiplayer.
WebXR
	Virtual reality.

Ideas
	Skipping <- I kind of like this one
	Step on a crack
	Tight rope walking
	pigeons off the line
	server maintenance <- servers are offline and you have to get them back online
		-ruby warrior for incidents?
		-tower defence game? -> this is IT Help desk game
*/
function Game(){
	if(!this instanceof Game){
		return new Game();
	}
	var self = this;
	return self;
}
;(function(){
	var game = this.offlineApp || {};
})(this);

/*
!!!!!!!!! DEVOPS !!!!!!!!!
----------------------------------------------
-insurance company? weather related? 
----------------------------------------------
Datacenter - d
servers - s
microservies - m
website - w
apps - a
api - i
database - d
service - z 
cache - c

help desk - h

commands [servers]
	run back up
	deploy update
	deploy code
	create script
	add code/tests
	check status cpu/mem
	restart stop start
	view logs
	delete files
	add cache

code [write scripts]
	write scripts, tests, html
	run tests
language - Go, python, php, ruby, JS

stages of the game:
	1) welcome: new job
	person pizza and some programming
	1 server, website

	2) more functionality
		database+

	*) Database down!

	*) marketing spend
		increase in traffic
		need to handle more
	
	*) Update the site

	*) Upgrade the server

	*) Cool new Feature!

	*) Company Growth
		Implement new services
*/