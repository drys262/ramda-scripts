const R = require('ramda');

const body = {
  session1: '13',
};

const value = R.ifElse(R.has('session'), R.prop('session'), R.empty)(body);

const empty = {
  value: '1',
  ...{},
};

console.log('value here', value);
console.log('empty here', empty);
