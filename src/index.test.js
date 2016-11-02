var expect = require('chai').expect;
var patterns = require('./patterns');
var er = require('./index');

var formatPattern = function(p) { return (p) ? 'x': '_';};

describe('euclidean-rhythms', function() {

	describe('getPattern() should ', function() {

		it('return empty array when pulses is negative', function() {
			var euclidean = er.getPattern(-1, 4);
			expect(euclidean).to.be.an('Array');
			expect(euclidean).to.have.length(0);
			expect(JSON.stringify(euclidean)).to.equal(JSON.stringify([]));
		});

		it('return empty array when steps is negative', function() {
			var euclidean = er.getPattern(2, -4);
			expect(euclidean).to.be.an('Array');
			expect(euclidean).to.have.length(0);
			expect(JSON.stringify(euclidean)).to.equal(JSON.stringify([]));
		});

		it('return empty array when steps < pulses', function() {
			var euclidean = er.getPattern(3, 2);
			expect(euclidean).to.be.an('Array');
			expect(euclidean).to.have.length(0);
			expect(JSON.stringify(euclidean)).to.equal(JSON.stringify([]));
		});

		patterns.forEach(function(p) {
			it('calculate `' + p.name + ' (' + p.pulses + ',' + p.steps + ')` - ' + p.pattern.map(formatPattern).join(''), function() {
				var euclidean = er.getPattern(p.pulses, p.steps);
				expect(euclidean).to.be.an('Array');
				expect(euclidean).to.have.length(p.steps);
				expect(JSON.stringify(euclidean)).to.equal(JSON.stringify(p.pattern));
			});

		});
		
	});
});
