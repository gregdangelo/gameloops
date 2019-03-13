describe("A StoryBoard Object in Debug mode", function() {
  var storyboard = StoryBoard(true);
  console.log('storyboard',storyboard);
  it("is a function", function() {
    expect(typeof storyboard).toBe('object');
  });

});
