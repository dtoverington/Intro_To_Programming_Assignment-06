/*
 * timestable.js - Times Table Calculator
 * Author: Devin Overington
 * Modified: 11/9/14
 */

var times = function(input){
  var multArray = [];
     for (var i = 0; i <= 10; i++){
        var mult = i * input;
        multArray [i] = mult;
     }           
  return multArray;
}
var multArray = times();
var runTimes = function() {
	var timesInput = document.getElementById('timesIn');
	var timesParse = parseInt(timesInput.value);
	var timesRunner = times(timesParse);
	var timesTable = document.getElementById('timesTable');
	var tableRunner = tableBuild(timesRunner);
	timesTable.appendChild(tableRunner);
}
var tableBuild = function buildTable(data){
	var timesIn = document.getElementById("timesIn");
	var timesInput = parseInt (timesIn.value);
    var table = document.createElement("table");
      for (var i = 0; i <= 10; i++){
        var row = document.createElement("tr");
			var cell = document.createElement("td");
			cell.textContent = timesInput + " x " + i + " = " + data [i];
			row.appendChild(cell);
			table.appendChild(row);
			}
	return table;
}
var timesButton = document.getElementById('timesRun');
timesButton.onclick = runTimes;