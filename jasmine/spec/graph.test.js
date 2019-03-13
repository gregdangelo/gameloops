/*graph.js*/
xdescribe("A Graph Object in Debug mode", function() {
  var graph = Graph(true);
  console.log(graph);
  it("is a function", function() {
    expect(typeof graph).toBe('object');
  });
  it("has a create function", function() {
    expect(typeof graph.create).toBe('function');
  });
  xit("can return SVG from create",function(){
    var svg = graph.create();
    expect(svg.nodeName).toBe("SVG");
  });
  /* debug statements */
  xit("has `internal` is an object", function() {
    expect(typeof graph.internal).toBe('object');
  });
  xit("can create a line", function() {
    var line = graph.internal.create.line();
    expect(line.nodeName).toBe('LINE');
  });
  xit("can create a grid", function() {
    var grid = graph.internal.create.grid();
    expect(grid.nodeName).toBe('G');
  });

});
xdescribe("A Graph Object", function() {
  var graph = Graph();
  console.log(graph);
  xit("is a function", function() {
    expect(typeof graph).toBe('object');
  });
  xit("has a create function", function() {
    expect(typeof graph.create).toBe('function');
  });
  xit("can return SVG from create",function(){
    var svg = graph.create();
    expect(svg.nodeName).toBe("SVG");
  });
  /* debug statements */
  xit("has `internal` is not an object", function() {
    console.log('graph.internal',graph.internal);
    expect(typeof graph.internal).toBe('undefined');
  });

});
