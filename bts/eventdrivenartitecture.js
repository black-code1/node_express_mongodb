let events = require('events')

// created an event emitter
let eventEmitter = new events.EventEmitter()

// listen to the event emited
eventEmitter.on('connection', () => console.log('connection successfull.'))

// emit the event
eventEmitter.emit('connection')