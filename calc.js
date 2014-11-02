/*
 * calc.js - Triangular and Fibonacci number calculator
 * Author: Devin Overington
 * Modified: 11/2/14
 */


var triangular = function (input){
	var numResult = 0;
	for (var y = 1; y<=input; y++){
    	numResult = numResult += y;
	}
	return numResult;
}

var runTri = function() {
	var triInput = document.getElementById('triangularIn');
	var triParse = parseInt(triInput.value);
	var triRunner = triangular(triParse);
	var triResult = document.getElementById('triResult');
	triResult.innerHTML = "The " + triParse + "th triangular number is: "+ triRunner
};
	
var triButton = document.getElementById('triRun');
triButton.onclick = runTri;


var fibonacci = function (n){
var firstFib = 0;
var secondFib = 1;
var fib = 0;

  if (n<=1){
   if (n==0){
   return firstFib;
   }else{
   return secondFib;
   }
}else{
  for (var y = 1; y<n; y++){
    fib = firstFib + secondFib;
    firstFib = secondFib;
    secondFib = fib;
}
return fib;
}

}
var runFib = function() {
	var fibInput = document.getElementById('fibIn');
	var fibParse = parseInt(fibInput.value);
	var fibRunner = fibonacci(fibParse);
	var fibResult = document.getElementById('fibResult');
	fibResult.innerHTML = "The " + fibParse + "th Fibonacci number is: "+ fibRunner
};
	
var fibButton = document.getElementById('fibRun');
fibButton.onclick = runFib;


