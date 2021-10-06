/*
Borrar butca

fila x :: butaca x

pantalla y puerta 

    pantalla
---------------
x x x x x x x ▅
x x x x x x x x
x x x x x x x x
x x x x x x x x
------------/ -
 */

const {inquirerMenu, pause} = require('./helpers/inquirer');
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
                break;  
            case "2":
                ticket.showRoom();
                break;
            case "3":
                break;
            case "4":
                break;
        }
        guardarDB(ticket.roomArr);
        await pause();
    } while (opt !== "0");
}

main();