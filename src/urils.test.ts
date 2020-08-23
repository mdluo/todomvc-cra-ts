import { Utils } from './utils';

describe('pluralize', () => {
  test('simple', () => {
    expect(Utils.pluralize(1, 'test')).toBe('test');
    expect(Utils.pluralize(2, 'test')).toBe('tests');
  });
});
