
function fibonacciGenerator (n) {

	var output = [];
	if (n === 1) {
		output = [0];
	}
	else if (n === 2) {
		output = [0,1];
	}
	else {
		output = [0,1];

			for (var i = 2; i < n; i++) {
				output.push(output[output.length - 2] + output[output.length - 1]);
   }
}
	return output;
	
}


output = fibonacciGenerator(10);
console.log(output)

/*

----------------------- 

var n = [0,1];
for (var i = 0; i < 5; i++) {
    var o = n[n.length - 1] + n[n.length - 2];
    n.push(o); 
}
console.log(n);

----------------------- 

var a = prompt("How far does the sequence go? Provide a number to set the limit.");
var n = [0,1];
for (var i = 0; i < (a - 2); i++) {
    var o = n[n.length - 1] + n[n.length - 2];
    n.push(o); 
}
console.log(n);

-----------------------

*/


