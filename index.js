const R = require('ramda');

const clusters = R.map((uri) => ({
  host: uri,
}))('redis://localhost,redis://sadfsadfsadfdsf,redis:://wwwwww'.split(','));

console.log(clusters);
