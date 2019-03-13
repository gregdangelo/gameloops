describe("A Base game", function() {
  var base = new Game(true);

  it("is an object", function() {
    expect(typeof base).toBe('object');
  });
  it("is an instance of Game", function() {
    expect(base instanceof Game).toBe(true);
  });
  describe("update function",function(){
    it("should return nothing",function(){
      expect(base.update()).toBe(undefined);
    });
    it("should call updateRotation",function(){
      spyOn(base,'updateRotation');
      base.update();
      expect(base.updateRotation).toHaveBeenCalled();
    });
    it("should call updateMovement",function(){
      spyOn(base,'updateMovement');
      base.update();
      expect(base.updateMovement).toHaveBeenCalled();
    });
    it("should call updatePosition",function(){
      spyOn(base,'updatePosition');
      base.update();
      expect(base.updatePosition).toHaveBeenCalled();
    });
  });
  describe("draw function",function(){
    it("should return nothing",function(){
      expect(base.draw()).toBe(undefined);
    });
  });
  describe("getLastRender function",function(){
    it("should return a number",function(){
      var n = base.getLastRender();
      expect(isNaN(n)).toBe(false);
    });
  });
  describe("requestAnimationFrame function",function(){
    //How can I wait to know that base.loop will eventually be run?
    xit("should call `loop` function",function(){
      spyOn(base,'loop');
      base.requestAnimFrame(base.loop);
      expect(base.loop).toHaveBeenCalled();
    });
    it("should be a function",function(){
      expect(typeof base.requestAnimFrame).toBe('function');
    });
    it("should return an object",function(){
      var noop = function(){};
      expect(typeof base.requestAnimFrame(noop)).toBe('function');
    });
  });
  describe("loop function",function(){
    it("should return nothing",function(){
      expect(base.loop(Date.now())).toBe(undefined);
    });
    it("should call `draw`",function(){
      spyOn(base,'draw');
      base.loop(Date.now());
      expect(base.draw).toHaveBeenCalled();
    });
    it("should call `update`",function(){
      spyOn(base,'update');
      base.loop(Date.now());
      expect(base.update).toHaveBeenCalled();
    });
    xit("should call `requestAnimFrame`",function(){
      spyOn(base,'requestAnimFrame');
      base.loop(Date.now());
      expect(base.requestAnimFrame).toHaveBeenCalled();
    });
  });

});
