const academy = {
    students: []
};
Object.defineProperty(academy, "addStudent", {
    set: function(options) {
        const addStudent = options.split(" ");
        this.students.push({
            Name: addStudent[0],
            SurName: addStudent[1],
            Date: new Date()
        })
    },
});
academy.addStudent = "Andrey Pshenychka";
console.log(academy.students);





/*
let names = 'Вася, Петя, Маша';

let arr = names.split(', ');

for (let name of arr) {
  alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}
*/