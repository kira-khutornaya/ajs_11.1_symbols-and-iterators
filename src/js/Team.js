class Team {
  constructor() {
    this.members = new Set();
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.members.add(character);
    });
  }

  [Symbol.iterator]() {
    let index = -1;
    const values = [...this.members.values()];

    return {
      next() {
        index += 1;

        return {
          value: values[index],
          done: index >= values.length,
        };
      },
    };
  }
}

const team = new Team();
team.addAll({
  name: 'Ivan',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
},
{
  name: 'Anna',
  type: 'Magician',
  health: 100,
  level: 2,
  attack: 45,
  defence: 12,
},
{
  name: 'Maxim',
  type: 'Bowman',
  health: 89,
  level: 1,
  attack: 40,
  defence: 10,
});

for (const value of team) {
  console.log(value);
}
