const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// myEmitter.on('event', () => {
//   console.log('a');
// });

// setInterval(() => {
//   myEmitter.emit('event');
// }, 2000);

// gives priority to listener because 'newlistener' is emitted when new listeners are added
myEmitter.once('newListener', (event, listener) => {
  console.log('new listener');
  if (event === 'event') {
    myEmitter.on('event', () => {
      console.log('b');
    });
  }
});
myEmitter.on('event', () => {
  console.log('a');
});


setInterval(() => {
  myEmitter.emit('event');
}, 5000);