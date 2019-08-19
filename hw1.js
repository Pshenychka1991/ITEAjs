const user = {
  name: 'Alex',
}
const ivan = {
	name: 'Ivan',
	age: '21',
	bornDate: '1995'
}
const ira = {
name: 'ira',
age: 23,
bornDate: '1993'	
}

user.__proto__ = ivan;
user.__proto__ = ira;