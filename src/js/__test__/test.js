import Character from '../mainclass_character';

test.each([21, 'moreThen10simbols', 'a'])(
  'cheking create class Character wrong name',
  (name) => {
    expect(() => {
      const character = new Character(name);
    }).toThrow('incorrect values');
  },
);

test.each([
  [10, 93],
  [25, 82],
  [70, 48],
])('checking method damage', (damagePoints, expectedHealth) => {
  const char = new Character('Ivan');
  char.damage(damagePoints);
  expect(char.health).toBe(expectedHealth);
  expect(() => {
    char.health = 0;
    char.damage(damagePoints);
  }).toThrow('character is dead');
});

test('checking method levelup', () => {
  const char = new Character('Ivan');
  char.health = 90;
  char.levelUp();
  expect(char.health).toBe(100);
  expect(char.attack).toBe(30);
  expect(char.defence).toBe(30);
  expect(() => {
    char.health = 0;
    char.levelUp();
  }).toThrow('character is dead');
});
