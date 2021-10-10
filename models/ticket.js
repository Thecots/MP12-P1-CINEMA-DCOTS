class Ticket{
    constructor(){
        this._room = [];
    }

    get roomArr(){
        return this._room;
    }

    loadRoomFromArray(e){
        this._room = e;
    }

    getRoom(){
        return this._room;
    }
    
    showRoom(){
        console.log(`┌──────────────────┐`.cyan);
        console.log(`│      SCREEN      │`.cyan);
        console.log(`├──────────────────┤`.cyan);
        this._room.forEach((e) => {
            let x = '';
            let count = 0;
            e.forEach((n) => {
                let g = count === 0 ? `${'│'.cyan}` : "";
                let c = count === 5 ? `${'│'.cyan}` : "";
                let b = n === true ? `${'▅'.red}` : `${'▅'.green}`;
                x += g+' '+b+' '+c;
                count += 1;
            });
            console.log(x);
        });
        console.log(`└────────────  ────┘`.cyan);
        console.log(`        EXIT      `.cyan);
    }

    ShowCollection(){
        let colletction = 0, tickets = 0, p = 7.25;
        this._room.forEach(n => {
            n.forEach(e => {
                colletction += e === true ? p : 0, tickets += e === true ? 1 : 0;
            });
        })
        console.log(`Ticket price: ${`${p+'$'}`.green}`);
        console.log(`Tickets sold: ${`${tickets}`.green}`);
        console.log(`Total earned ${`${colletction+'$'}`.green}`);

    }

    newTicket(e){
        let {row, seat} = e;
        this._room[row][seat] = true;
        console.log('Ticket created successfully'.green);
    }

    delte(e){
        let {row, seat} = e;
        this._room[row][seat] = false;
        console.log('ticket deleted successfully'.green);
    }
}

module.exports = Ticket;