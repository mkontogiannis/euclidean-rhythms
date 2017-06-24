import { expect } from 'chai';
import patterns from './patterns';
import er from './index';

const formatPattern = p => p ? 'x': '_';

describe('euclidean-rhythms', () => {

	describe('getPattern() should ', () => {

		it('return empty array when pulses is negative', () => {
			var euclidean = er.getPattern(-1, 4);
			expect(euclidean).to.be.an('Array');
			expect(euclidean).to.have.length(0);
			expect(JSON.stringify(euclidean)).to.equal(JSON.stringify([]));
		});

		it('return empty array when steps is negative', () => {
			var euclidean = er.getPattern(2, -4);
			expect(euclidean).to.be.an('Array');
			expect(euclidean).to.have.length(0);
			expect(JSON.stringify(euclidean)).to.equal(JSON.stringify([]));
		});

		it('return empty array when steps < pulses', () => {
			var euclidean = er.getPattern(3, 2);
			expect(euclidean).to.be.an('Array');
			expect(euclidean).to.have.length(0);
			expect(JSON.stringify(euclidean)).to.equal(JSON.stringify([]));
		});

		patterns.forEach(p => {
			it('calculate `' + p.name + ' (' + p.pulses + ',' + p.steps + ')` : ' +
					p.pattern.map(formatPattern).join(''), () => {
				var euclidean = er.getPattern(p.pulses, p.steps);
				expect(euclidean).to.be.an('Array');
				expect(euclidean).to.have.length(p.steps);
				expect(JSON.stringify(euclidean)).to.equal(JSON.stringify(p.pattern));
			});

		});
	});
});
