function addElement(id){
  var elm = document.createElement('div');
  elm.id = id;
  document.body.appendChild(elm);
  return elm;
}
function removeElement(elm){
  elm.parentNode.removeChild(elm);
}
describe("A BugTest Object in Debug mode", function() {
  var bugtest = BugTest();

  var diceRolls = {
  	allSame:[2,2,2,2,2]
  	,fourKind:[2,2,2,2,1]
  	,threeKind:[2,2,2,3,1]
  	,fullHouse:[2,2,2,1,1]
  	,straightSm:[1,2,3,4,1]
  	,straightLg:[1,2,5,4,3]
  	,nothing:[1,2,3,3,2]
  }

  it("is a function", function() {
    expect(typeof bugtest).toBe('object');
  });
  it("Sum is correct", function() {
  	res = bugtest.sumResults(diceRolls.allSame);
    expect(res).toBe(10);
  });
  //These two fail periodically
  xit("isYathzee is correct", function() {
  	res = bugtest.isYathzee(diceRolls.allSame);
    expect(res).toBe(true);
  });
  xit("isYathzee is false", function() {
  	res = bugtest.isYathzee(diceRolls.nothing);
    expect(res).toBe(false);
  });
  it("isStraight is false", function() {
  	res = bugtest.isStraight(diceRolls.nothing);
    expect(res).toBe(false);
  });
  it("isStraight is SMALL", function() {
  	res = bugtest.isStraight(diceRolls.straightSm);
    expect(res).toBe(4);
  });
  it("isStraight is LARGE", function() {
  	res = bugtest.isStraight(diceRolls.straightLg);
    expect(res).toBe(5);
  });
  it("isOfAKind is false", function() {
  	res = bugtest.isOfAKind(diceRolls.nothing);
    expect(res).toBe(false);
  });
  it("3 isOfAKind is true", function() {
  	res = bugtest.isOfAKind(diceRolls.threeKind);
    expect(res).toBe(3);
  });
  it("4 isOfAKind is true", function() {
  	res = bugtest.isOfAKind(diceRolls.fourKind);
    expect(res).toBe(4);
  });
  it("Turn contains 5 dice rolls", function() {
  	rolls = bugtest.playTurn();
    expect(rolls.length).toBe(5);
  });
  it("should return an integer",function(){
    expect(typeof bugtest.roll()).toBe('number');
  });
  it("36 rolls contain only numbers 1-6", function() {
  	for(var i=0;i<=36;i++){
  		r = bugtest.roll();
  		valid = false
  		switch(r){
  			case 0:
  			case 1:
  			case 2:
  			case 3:
  			case 4:
  			case 5:
  				valid = true;
  		}
  		expect(valid).toBe(true);
  	}
  });
  it("Max roll is 6", function() {
  	valid = false
  	for( var i=0; i<=36; i++ ){
  		r = bugtest.roll();
  		if( r = 6 ){ /* BUG in TEST */
  			valid = true;
  		}
  		
  	}
  	expect(valid).toBe(true);
  });
  it("Min roll is 1", function() {
  	valid = false
  	for( var i=0;i<=36;i++ ){
  		r = bugtest.roll();
  		if( r == 1 ){
  			valid = true;
  		}
  		
  	}
  	expect(valid).toBe(true);
  });

  
});
