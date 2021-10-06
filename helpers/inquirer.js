const inquirer = require('inquirer');
require('colors')
/* Opciónes del menú */
const p = [
    {
        type: "list",
        name: "option",
        message: "¿Qué desea hacer?",
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

module.exports = {
    inquirerMenu,
    pause
}