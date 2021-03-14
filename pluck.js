const R = require('ramda');
const messages = [
  {
    revenue: {
      cost: 1,
      sales: 2,
    },
  },
  {
    revenue: {
      cost: 2,
      sales: 2,
    },
  },
  {
    revenue: {
      cost: 3,
      sales: 2,
    },
  },
  {
    orders: 2,
    revenue: {
      sales: 2,
    },
  },
];

// const totalCost = R.map(R.path(['revenue', 'cost']))(messages);

const totalCost = R.compose(
  R.sum,
  R.filter(R.identity),
  R.map(R.path(['revenue', 'cost']))
)(messages);
const totalOrders = R.compose(
  R.sum,
  R.filter(R.identity),
  R.map(R.path(['orders']))
)(messages);

console.log(totalOrders);
