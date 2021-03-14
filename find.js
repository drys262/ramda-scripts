const R = require('ramda');
const results = [
  {
    destination_number: '+111',
    message_id: '1',
  },
  {
    destination_number: '+222',
    message_id: '2',
  },
];

const messages = [
  {
    destination_number: '111',
  },
  {
    destination_number: '223',
  },
];

const trimPlus = (destinationNumber) => {
  const strNumber = destinationNumber.toString();

  if (strNumber[0] === '+') {
    return strNumber;
  }

  return `+${strNumber}`;
};

const sentMessages = messages.map((message) => {
  const sentMessage = R.find(
    R.propEq('destination_number', trimPlus(message.destination_number))
  )(results || []);

  return sentMessage ? sentMessage.message_id : null;
});

console.log(sentMessages);
