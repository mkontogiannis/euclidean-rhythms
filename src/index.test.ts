import { patterns } from './patterns';
import { getPattern } from './index';

const formatPattern = (p) => (p ? 'x' : '_');

describe('euclidean-rhythms', () => {
  describe('getPattern()', () => {
    it('returns empty array when pulses is negative', () => {
      const euclidean = getPattern(-1, 4);
      expect(euclidean).toBeInstanceOf(Array);
      expect(euclidean.length).toBe(0);
      expect(JSON.stringify(euclidean)).toEqual(JSON.stringify([]));
    });

    it('returns empty array when steps is negative', () => {
      const euclidean = getPattern(2, -4);
      expect(euclidean).toBeInstanceOf(Array);
      expect(euclidean.length).toBe(0);
      expect(JSON.stringify(euclidean)).toEqual(JSON.stringify([]));
    });

    it('returns empty array when steps < pulses', () => {
      const euclidean = getPattern(3, 2);
      expect(euclidean).toBeInstanceOf(Array);
      expect(euclidean.length).toBe(0);
      expect(JSON.stringify(euclidean)).toEqual(JSON.stringify([]));
    });

    patterns.forEach((p) => {
      it(`calculate ${p.name} (${p.pulses},${p.steps}): ${p.pattern
        .map(formatPattern)
        .join('')}`, () => {
        const euclidean = getPattern(p.pulses, p.steps);
        expect(euclidean).toBeInstanceOf(Array);
        expect(euclidean.length).toBe(p.steps);
        expect(JSON.stringify(euclidean)).toEqual(JSON.stringify(p.pattern));
      });
    });
  });
});
