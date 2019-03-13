function Game(debug){
	if(!this instanceof Game){
		return new Game(debug);
	}
  /* Properties */
  /* Private Members */
  // This is used for testing to make
  var _debug = debug ? true : false;
	var self = this;

  /* time */
  var lastRender = 0;

  /* dealing with controls*/
  var keyMap = {
    68: 'right'
    ,65: 'left'
    ,87: 'up'
    ,83: 'down'
		,81:'quit'
  }
  function keydown(event){
		// console.log('keydown: '+event.keyCode);
    var key = keyMap[event.keyCode];
    state.pressedKeys[key] = true;
  }
  function keyup(event){
    var key = keyMap[event.keyCode];
    state.pressedKeys[key] = false;
  }
  window.addEventListener("keydown",keydown,false);
  window.addEventListener("keyup",keyup,false);
  /* Stage - need to move into seperate function */
  var width = 800; /* default */
  var height = 200; /* default */
  var context;

  var canvas = document.getElementById("canvas");
  width = canvas.width;
  height = canvas.height;
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "red";

	/* Player */
  var state = {
		position: {
		    x: (width / 2),
		    y: (height / 2)
		  }
		,movement : {
			x: 0
			,y: 0
		}
		,rotation: 0
    ,pressedKeys : {
      left: false
      ,right: false
      ,up: false
      ,down: false
			,quit: false
    }
  };

  self.requestAnimFrame = function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  };

	self.updateRotation = function(p){
		if(state.pressedKeys.left){
			state.rotation -= p * 5;
		}else if (state.pressedKeys.right) {
			state.rotation += p * 5;
		}
	};
	self.updateMovement = function(p){
		var SPEED_MAX_POS = 40,SPEED_MAX_NEG = SPEED_MAX_POS * -1;
		// Behold! Mathematics for mapping a rotation to it's x, y components
		var accelerationVector = {
	    x: p * .3 * Math.cos((state.rotation-90) * (Math.PI/180)),
	    y: p * .3 * Math.sin((state.rotation-90) * (Math.PI/180))
	  }
		if (state.pressedKeys.up) {
	    state.movement.x += accelerationVector.x;
	    state.movement.y += accelerationVector.y;
	  }else if (state.pressedKeys.down) {
	    state.movement.x -= accelerationVector.x;
	    state.movement.y -= accelerationVector.y;
	  }

		// Limit movement speed
	  if (state.movement.x > SPEED_MAX_POS) {
	    state.movement.x = SPEED_MAX_POS;
	  }
	  else if (state.movement.x < SPEED_MAX_NEG) {
	    state.movement.x = SPEED_MAX_NEG;
	  }
	  if (state.movement.y > SPEED_MAX_POS) {
	    state.movement.y = SPEED_MAX_POS
	  }
	  else if (state.movement.y < SPEED_MAX_NEG) {
	    state.movement.y = SPEED_MAX_NEG;
	  }

	};
	self.updatePosition = function(p){
		state.position.x += state.movement.x;
	  state.position.y += state.movement.y;

	  // Detect boundaries
	  if (state.position.x > width) {
	    state.position.x -= width;
	  }
	  else if (state.position.x < 0) {
	    state.position.x += width;
	  }
	  if (state.position.y > height) {
	    state.position.y -= height;
	  }
	  else if (state.position.y < 0) {
	    state.position.y += height;
	  }
	};

  self.update = function(progress){
		var p = progress/16;

		self.updateRotation(p);
		self.updateMovement(p);
		self.updatePosition(p);

		// If the user wants to stop lets do so
		if(state.pressedKeys.quit){
			_debug = true;
		}

  }
  self.draw = function(){
		ctx.clearRect(0, 0, width, height)

		ctx.save()
		ctx.translate(state.position.x, state.position.y)
		ctx.rotate((Math.PI/180) * state.rotation)

		ctx.strokeStyle = 'white'
		ctx.lineWidth = 2
		ctx.beginPath ()
		ctx.moveTo(0, 0)
		ctx.lineTo(10, 10)
		ctx.lineTo(0, -20)
		ctx.lineTo(-10, 10)
		ctx.lineTo(0, 0)
		ctx.closePath()
		ctx.stroke()
		ctx.restore()
  }

  self.loop = function(timestamp){
    console.info('looping', timestamp);

    var progress = timestamp - lastRender;

    self.update(progress);
    self.draw();
		// return;
    lastRender = timestamp;
		if(!_debug){
			window.requestAnimationFrame(self.loop);
	    // self.requestAnimFrame(self.loop);
	  }
  }
  self.getLastRender = function(){
    return lastRender;
  }
  self.start = function(){
    // this.requestAnimFrame(this.loop);
		window.requestAnimationFrame(self.loop);
  }
	self.stop = function(){
		_debug = true;
  }
  //When we are in debug more we will not start the animation loop
  console.debug('Debug mode off:',(!_debug));
  if(!_debug){
    console.debug('start');
		window.requestAnimationFrame(self.loop);
    // self.requestAnimFrame(self.loop);
  }



	return self;
}
