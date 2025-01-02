const EventEmitter = require('events');

const myEmitter = new EventEmitter()
//basic event 
myEmitter.on('greet', (username) => {
    console.log("Hello " + username);

})
myEmitter.emit('greet', 'jhon')
myEmitter.emit('greet', 'dilu')
//once event 

myEmitter.once('ottamind', (place) => {
    console.log(place + ' pookaam');
})

myEmitter.emit('ottamind', 'ooty')
myEmitter.emit('ottamind', 'wayanad')//otta mind otta vattam povollu

//remove listener
const grt = () => {
    console.log(" Hello");
}
myEmitter.on('gt',grt)
myEmitter.emit('gt')
myEmitter.removeListener('gt',grt)
myEmitter.emit('gt')

//remove all listers

myEmitter.removeAllListeners('greet');
myEmitter.emit('greet','nunu')//greet chath

//error handling

myEmitter.on('error', (err) => {
    console.error('An error occurred:', err);
  });

