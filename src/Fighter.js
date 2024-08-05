/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity, life) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }

    fight(defender) {
    const attackDamage = Math.floor(Math.random() * this.strength) + 1;
    const defenseValue = Math.max(defender.dexterity - attackDamage, 0);
    const damage = attackDamage - defenseValue;
    defender.life = Math.max(defender.life - damage, 0);
    }

    isAlive() {
        return this.life > 0;
      }
}
module.exports = Fighter;