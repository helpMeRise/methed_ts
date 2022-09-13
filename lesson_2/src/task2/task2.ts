import { Product } from "./Product";
import { AbstractSelling } from "./AbstractSelling";
import { FirstSelling } from "./FirstSelling";
import { SecondSelling } from "./SecondSelling";

const cup = new Product('Cup', 500);
const monitor = new Product('Monitor', 10_000);
const chair = new Product('Chair', 15_000);
const table = new Product('Table', 25_000);
const car = new Product('Car', 6_000_000);
const house = new Product('House', 25_000_000);
const keyboard = new Product('Keyboard', 10_000);
const icecream = new Product('icecream', 200);

const firstSell = new FirstSelling(cup, 10);
const secondSell = new FirstSelling(monitor, 3);
const thirdSell = new FirstSelling(chair, 5);
const fourthSell = new FirstSelling(table, 5);
const fifthSell = new SecondSelling(car, 2, 2);
const sixthSell = new SecondSelling(house, 4, 2);
const seventhSell = new SecondSelling(keyboard, 40, 50);
const eighthSell = new SecondSelling(icecream, 400, 100);

const sells: AbstractSelling[] = [
  firstSell,
  secondSell,
  thirdSell,
  fourthSell,
  fifthSell,
  sixthSell,
  seventhSell,
  eighthSell,
];

sells.sort((a, b) => {
  if (a.getPrice() > b.getPrice()) return 1;
  if (a.getPrice() < b.getPrice()) return -1;
  return 0;
})

console.log(sells);