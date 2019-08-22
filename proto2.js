function Calculator() {
   	const result = "This result is: ";
    this.sum = function (num1,num2){
    	sum1 = num1 + num2;
    	console.log (result + sum1);
    }
        this.subtraction = function (num1,num2){
    	sub1 = num1 - num2;
    	console.log (result + sub1);
    }
    this.multiply = function (num1, num2){
		mul1 = num1 * num2;
    	console.log (result + mul1);
    }
    this.divide = function (num1, num2){
    	div1 = num1 / num2;
    	console.log (result + div1);
    }
  };

const calc = new Calculator; // без дужок
calc.sum (1,22);
calc.subtraction(10, 2);
calc.multiply (7,7);
calc.divide (20,4);
/*
function Calculator(num1, num2) {
   	var sum1, mul1, div1;
   	const result = "This result is: ";
   	this.num1 = num1;
   	this.num2 = num2;
   	sum1 = num1 + num2;
   	mul1 = num1 * num2;
   	div1 = num1 / num2;
   	sub1 = num1 - num2;
    this.sum = function(){
    	console.log (result + sum1);
    }
    this.sub = function(){
    	console.log (result + sub1);
    }
    this.multiply = function(){
    	console.log (result + mul1);
    }
    this.divide = function(){
    	console.log (result + div1);
    }
  };

const calc = new Calculator (11, 5);
calc.sum ();
calc.divide ();
calc.multiply ();
calc.sub ();
*/

