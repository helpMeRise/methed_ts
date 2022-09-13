"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const FirstSelling_1 = require("./FirstSelling");
const SecondSelling_1 = require("./SecondSelling");
const cup = new Product_1.Product('Cup', 500);
const monitor = new Product_1.Product('Monitor', 10_000);
const chair = new Product_1.Product('Chair', 15_000);
const table = new Product_1.Product('Table', 25_000);
const car = new Product_1.Product('Car', 6_000_000);
const house = new Product_1.Product('House', 25_000_000);
const keyboard = new Product_1.Product('Keyboard', 10_000);
const icecream = new Product_1.Product('icecream', 200);
const firstSell = new FirstSelling_1.FirstSelling(cup, 10);
const secondSell = new FirstSelling_1.FirstSelling(monitor, 3);
const thirdSell = new FirstSelling_1.FirstSelling(chair, 5);
const fourthSell = new FirstSelling_1.FirstSelling(table, 5);
const fifthSell = new SecondSelling_1.SecondSelling(car, 2, 2);
const sixthSell = new SecondSelling_1.SecondSelling(house, 4, 2);
const seventhSell = new SecondSelling_1.SecondSelling(keyboard, 40, 50);
const eighthSell = new SecondSelling_1.SecondSelling(icecream, 400, 100);
const sells = [
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
    if (a.getPrice() > b.getPrice())
        return 1;
    if (a.getPrice() < b.getPrice())
        return -1;
    return 0;
});
console.log(sells);
