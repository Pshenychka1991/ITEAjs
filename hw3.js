let fruits = [
    {
        name: "Lemon",
        color: "Yellow"
    },
    {   
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Pineapple",
        color: "Brown"
    }
];

function printFruitInfo() {
    console.log(`Fruit name: ${this.name}, has color: ${this.color}`);

}
console.log (fruits.length);
for (let i=0; i < fruits.length; i++) {

    printFruitInfo.apply(fruits[i], [fruits[i].name, fruits[i].color]);
}