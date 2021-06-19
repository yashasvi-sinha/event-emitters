const { EventEmitter } = require('events')

class TicketManger extends EventEmitter {

    constructor(supply){
        super();
        this.supply = supply
    }


    buy(email, price) {

        if (this.supply > 0) {
            this.supply--;
            this.emit('bought-ticket', email, price, this.supply)
        }else{
            
        }
        
    }
}

module.exports = TicketManger