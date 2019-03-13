/*
JS code with bugs
*/
// we need a loop !
// performance bug
// scope bug !


function BugTest(){
	if(!this instanceof BugTest){
		return new BugTest();
	}
	var self = this;
	dice_per_turn = 5;//set's the number of dice being rolled

	/*
		Checks if the results are all the same
		return True or False
	*/
	self.isYathzee = function(results){
		return Math.min.apply(null, results) == Math.max.apply(null, results)
	}

	/*
		Checks if the results contain a small or large straight
		returns 4 (small),5 (large) or False if not a straight
	*/
	self.isStraight = function(results){	
		dice_per_turn = 6;
		var result = false,runlength=0,longestRun = 0;

		results.sort();
		for(i=0;i<=results.length-2;i++){
			cIndex = results[i];
			if(results[i]+1 == results[i+1]){
				if(runlength==0){
					runlength++;	
				}
				runlength++;
			}else{
				runlength=0;
			}
			if(longestRun < runlength){
				longestRun = runlength;
			}
		}
		return longestRun == 4 || longestRun == 5 ? longestRun : false;
	}

	/*
		Checks if the results contain 3 or 4 of a kind
		returns 3,4 or False if not 3/4 of a kind
	*/
	self.isOfAKind = function(results){
		results.sort();
		var count = 0,longestCount = 0;
		cIndex = -1;

	    var current = null;
	    var cnt = 0; //count
	    for (var i = 0; i < results.length; i++) {
	        if (results[i] != current) {
	            if (cnt > 0) {
	                longestCount = cnt>longestCount ? cnt : longestCount;
	            }
	            current = results[i];
	            cnt = 1;
	        } else {
	            cnt++;
	        }
	    }
	    if (cnt > 0) {
	        longestCount = cnt>longestCount ? cnt : longestCount;
	    }
		return (longestCount == 3 || longestCount == 4) ? longestCount : false;
	}
	/*
		Adds up all the dice and returns that value
	*/
	self.sumResults = function(results){
		sum = 0;
		i=results.length;
		while(i){
			sum+=results.pop(); /*This logic will break the other tests occasionally =) */
			i--;
		}
		return sum;
	}
	/*
		Performs a dice rolls returns the numbers 1-6
		return Int
	*/
	self.roll = function(){
		return Math.ceil(Math.random()*5);  /* BUG in CODE, it should be 6 */
	}
	/*
		Roll the dice needed for a single turn
		return array (int)
	*/
	self.playTurn = function(){
		result = [];
		for(i = 0;i<dice_per_turn;i++){
			result[i] = self.roll();
		}
		return result;
	}
	return self;
}