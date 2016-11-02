(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["euclideanRhythms"] = factory();
	else
		root["euclideanRhythms"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	/**
	   *  Returns the calculated pattern of equally distributed pulses in total steps
	   *  based on the euclidean rhythms algorithm described by Godfried Toussaint 
	   *
	   *  @method  getPattern
	   *  @param {Number} pulses Number of pulses in the pattern 
	   *  @param {Number} steps  Number of steps in the pattern (pattern length)
	   */
	var getPattern = function(pulses, steps) {
	  if (pulses < 0 || steps < 0 || steps < pulses) {
	  	return [];
	  }
	  
	  // Create the two arrays
	  var first = new Array(pulses).fill(1);
	  var second = new Array(steps - pulses).fill(0);

	  var firstLength = first.length;
	  var minLength = Math.min(firstLength, second.length);
	  
	  var loopThreshold = 0;
	  // Loop until at least one array has length gt 2 (1 for first loop)
	  while (minLength > loopThreshold) {
	  	// Allow only loopThreshold to be zero on the first loop
	  	if (loopThreshold === 0) {
	  		loopThreshold = 1;
	  	}

	  	// For the minimum array loop and concat
	    for (var x = 0; x < minLength; x++) {
	      first[x] = Array.prototype.concat.call(first[x], second[x]);
	    }

	    // if the second was the bigger array, slice the remaining elements/arrays and update 
	    if (minLength === firstLength) {
	    	second = Array.prototype.slice.call(second, minLength);
	    }
	    // Otherwise update the second (smallest array) with the remainders of the first
	    // and update the first array to include onlt the extended sub-arrays
	    else {
	      second = Array.prototype.slice.call(first, minLength);
	      first = Array.prototype.slice.call(first, 0, minLength);
	    }
	    firstLength = first.length;
	    minLength = Math.min(firstLength, second.length);
		}

		// Build the final array
	  var pattern = [];
	  first.forEach(function(f) {
	    pattern = Array.prototype.concat.call(pattern, f);
	  });
	  second.forEach(function(s) {
	    pattern = Array.prototype.concat.call(pattern, s);
	  });

	  return pattern;
	};

	module.exports = {
	  getPattern: getPattern
	};


/***/ }
/******/ ])
});
;