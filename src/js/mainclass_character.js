export default class Character {
  constructor(name) {
    this.name = name;
    this.type = null;
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
    if (!(typeof name === 'string') || name.length < 2 || name.length > 10) {
      throw new Error('incorrect values');
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('character is dead');
    }
    this.level += 1;
    this.health = 100;
    this.attack += Math.floor(this.attack * 0.20);
    this.defence += Math.floor(this.defence * 0.20);
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('character is dead');
    }
    this.health -= Math.floor(points * (1 - this.defence / 100));
  }
}
