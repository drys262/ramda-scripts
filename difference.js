const R = require('ramda');

const oldTags = ['tag123'];
const newTags = ['tag12', 'tag234'];

// const diff = R.difference(oldTags, newTags);
const diff = R.difference(newTags, oldTags);
console.log(diff);
