function addElement(id){
  var elm = document.createElement('div');
  elm.id = id;
  document.body.appendChild(elm);
  return elm;
}
function removeElement(elm){
  elm.parentNode.removeChild(elm);
}
describe("A Game Object in Debug mode", function() {
  var game = Game(true);
  it("is a function", function() {
    expect(typeof game).toBe('object');
  });

  
});
