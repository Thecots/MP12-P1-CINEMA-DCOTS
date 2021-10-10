const {inquirerMenu, pause, newTicket, delteTicket} = require('./helpers/inquirer');
const { guardarDB, readDB } = require("./helpers/saveDB");
const Ticket = require('./models/ticket');

const main = async () => {
    let opt = '';
    const ticket = new Ticket();
    const db = readDB();

    if(db){
        ticket.loadRoomFromArray(db);
    }
    do {
        opt = await inquirerMenu();
        switch(opt){
            case "1":
                ticket.newTicket(await newTicket(ticket.getRoom()))
                break;  
            case "2":
                ticket.showRoom();
                break;
            case "3":
               ticket.ShowCollection();
                break;
            case "4":
                ticket.delte(await delteTicket(ticket.getRoom()));
                break;
        }
        guardarDB(ticket.roomArr);
        await pause();
    } while (opt !== "0");
}

main();