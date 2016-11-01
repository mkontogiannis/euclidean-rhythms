
function getPattern(pulses, steps) {
  if (pulses < 0 || steps < 0 || steps < pulses) {
  	return new Array();
  }
  
  var first = new Array(pulses).fill([1]);
  var second = new Array(steps - pulses).fill([0]);

  var firstLength = first.length;
  var minLength = Math.min(firstLength, second.length);
  
  var loopCondition = 0;

  while (minLength > loopCondition) {
  	if (!loopCondition) {
  		loopCondition++;
  	}

    for (var x = 0; x < minLength; x++) {
      first[x] = Array.prototype.concat(first[x], second[x]);
    }

    if (minLength === firstLength) {
    	second = second.slice(minLength);
    }
    else {
      second = first.slice(minLength);
      first = first.slice(0, minLength);
    }
    firstLength = first.length;
    minLength = Math.min(firstLength, second.length);
	}

  var pattern = new Array();
  first.forEach(function(f) {
    pattern = Array.prototype.concat(pattern, f);
  });
  second.forEach(function(s) {
    pattern = Array.prototype.concat(pattern, s);
  });
  return pattern;
}

module.exports = {
  getPattern: getPattern
};
