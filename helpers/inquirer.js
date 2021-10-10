const inquirer = require('inquirer');
require('colors')
/* Opciónes del menú */
const p = [
    {
        type: "list",
        name: "option",
        message: "¿What would you like to do?",
        choices: [
            {
                value : "1",
                name: `${'1'.green} New ticket`
            },
            {
                value : "2",
                name: `${'2'.green} Show room`
            },
            {
                value : "3",
                name: `${'3'.green} Show collection`
            },
            {
                value : "4",
                name: `${'4'.green} Delete ticket`
            },
            {
                value : "0",
                name: `${'0'.green} Exit`
            }
        ]
    }
];

/* Menú */
const inquirerMenu = async () => {
    console.clear();
    console.log(`   ${'======'.cyan} ${'CINEMAX'.yellow} ${'======='.cyan}`);
    console.log(`      Select an option`);
    console.log('   ======================'.cyan);

    const {option} = await inquirer.prompt(p);
    return option;
};

/* Pausa  */
const pause = async () => {
    const question = [
        {
          type: "input",
          name: "enter",
          message: `Press [${"enter".yellow}] to continue`,
        },
      ];
      console.log("\n");
      await inquirer.prompt(question);
}

/* New Ticket */
const newTicket = async (e) => {
    let i = 1, choices = [];
    e.forEach(n => {
        if(n.includes(false)){
            choices.push(
                {
                    value : i,
                    name: `Row ${i}`.green
                }
            );
        }
        i++;
    });

    const p = [
        {
            type: "list",
            name: "option",
            message: "available rows, select one",
            choices
        }
    ];

    const {option} = await inquirer.prompt(p);

    choices = [], i = 1;
    e[option-1].forEach(n => {
        if(n === false){
            choices.push(
                {
                    value : i,
                    name: `Seat ${i}`.green
                }
            );
        }
        i++;
    })

    const p2 = [
        {
            type: "list",
            name: "option2",
            message: "available seats, select one",
            choices
        }
    ];

    const {option2} = await inquirer.prompt(p2);

    return {
        row: option-1,
        seat: option2-1
    }
}

/* Delete ticket */
const delteTicket = async (e) =>{
    let choices = [], i = 1;
    e.forEach(n => {
        let f = 1;
        n.forEach(g => {
            if(g === true){
                choices.push(
                    {
                        value : {
                            row: i-1,
                            seat: f-1
                        },
                        name: `${'Row'.magenta} ${`${i}`.green} ${'::'.yellow} ${'Seat'.magenta} ${`${f}`.green}`
                    }
                );
            }
            f++;
        })
        i++;
    });

    const p = [
        {
            type: "list",
            name: "option",
            message: "available seats, select one",
            choices
        }
    ];

    const {option} = await inquirer.prompt(p);
    return option;
}

module.exports = {
    inquirerMenu,
    pause,
    newTicket,
    delteTicket
}