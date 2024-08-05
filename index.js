const Fighter = require("./src/Fighter");
// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const heracles = new Fighter("🧔‍♂️ Heracles", 20, 6);
const nemean = new Fighter("🦁 Nemean Lion", 11, 13);

let round = 1;
while (heracles.isAlive()  && nemean.isAlive()) {
    console.log(`Round ${round}: `);
    heracles.fight(nemean);
    console.log(`${heracles.name} attacks ${nemean.life}!`);
    console.log(`${nemean.name} has ${nemean.life} life points left.`);

    if (nemean.isAlive()) {
        nemean.fight(heracles);
        console.log(`${nemean.name} attacks ${heracles.life}!`);
        console.log(`${heracles.name} has ${heracles.life} life points left.`);
    }

    round++;

    if (!heracles.isAlive()) {
        console.log(`${nemean.name} wins!`);
        console.log(`${heracles.name} is defeated.`);
    } else if (!nemean.isAlive()) {
        console.log(`${heracles.name} wins!`);
        console.log(`${nemean.name} is defeated.`);
    }
}
