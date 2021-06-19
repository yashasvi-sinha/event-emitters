const { EventEmitter }  = require('events');


const myEmitter = new EventEmitter();

function handleTest(){
    console.log('Handling Test Event')
}



myEmitter.on('test', handleTest)

myEmitter.on('nullEvent', () => {
    console.log('Multiple Handlers possible')
})

myEmitter.once('abc', () => {
    console.log('Called only once')
})

// myEmitter.emit('test')
// myEmitter.emit('test')
// myEmitter.emit('test')

// myEmitter.emit('abc')
// myEmitter.emit('abc')
// myEmitter.emit('abc')
// myEmitter.emit('abc')

function handleArguments(num, name, someBoolean) {
    //
    console.log('Got data: ', name, num, someBoolean)
}

myEmitter.on('passArguments', handleArguments)

myEmitter.emit('passArguments', 44, "My Name", true)