'use strict';
const arithmetic = require('../lib/arithmetic');

describe('arithmetic module', ()=> {

  it('should return null if one of the numnber is not a number', () => {
    expect(arithmetic.add(1,'test')).toBeNull();
  });
  it('should return sum of two numbers if both arguments are numbers', () => {
    expect(arithmetic.add(1,2)).toEqual(3);
  });
  it('should return null if one of the numnber is not a number', () => {
    expect(arithmetic.sub(1,'test')).toBeNull();
  });
  it('should return sum of two numbers if both arguments are numbers', () => {
    expect(arithmetic.sub(20,2)).toEqual(18);
  });
});
