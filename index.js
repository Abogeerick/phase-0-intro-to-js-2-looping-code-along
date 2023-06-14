// writeCards() implementation
const writeCards = (names, occasion) => {
    const messages = [];
    names.forEach((name) => {
      const message = `Thank you, ${name}, for the wonderful ${occasion} gift!`;
      messages.push(message);
    });
    return messages;
  };
  
  // countDown() implementation
  const countDown = (number) => {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  };
  
  module.exports = {
    writeCards,
    countDown
  };
  