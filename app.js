const TicketManger = require('./TicketManger')

const myManager = new TicketManger(10)

myManager.on('bought-ticket', (emailId, cost, remainingTickets) => {
    console.log(`${emailId} bought a ticket for ${cost}. Remaining tickets: ${remainingTickets}`)
})


myManager.buy('a@a.com', 41)
myManager.buy('b@a.com', 40)
myManager.buy('c@a.com', 35)
myManager.buy('d@a.com', 41)
