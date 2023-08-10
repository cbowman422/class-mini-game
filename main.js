const randomNum = (num) => {
  return Math.floor(Math.random() * num)
}

class Survivor {
  constructor(name){
    this.name = name
    this.campResource = [
      {name: 'Fire', createResource: randomNum(3)},
      {name: 'Water', createResource: randomNum(10)},
      {name: 'Food', createResource: randomNum(5)}
    ]
    this.health = 100;
    this.day = 0;
  }

  camp(damage){
    const resource = randomNum(this.campResource.length);
    const found = randomNum(this.campResource[resource].createResource);
    this.health += found - damage
    this.day += 1;

    console.log(`There was ${this.campResource[resource].createResource} ${this.campResource[resource].name} resources and ${this.name} found ${found}.. health now at ${this.health} %`)

  }
}

const eric = new Survivor('eric');

let gameOver = true;

while (gameOver) {

  eric.camp(1);

  if (eric.health <= 0){
    console.log(`lived for ${eric.day} days`);
    gameOver = false;
  }

  if (eric.health >= 200){
    console.log(`${eric.name} was rescued after ${eric.day} days!`);
    gameOver = false;
  }


}