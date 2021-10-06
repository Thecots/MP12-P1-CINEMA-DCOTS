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
}

module.exports = Ticket;