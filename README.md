# 2019_AngularProjects_1


## Global variables are bad

	Easily overwritten
	Try to avoid!

	global variable
	var program = function(){};
	program();

	function invoke itself ( js doesn't like anonymous function invoke itself)
	function{}();


	immediately invoked function expression ( IIFE ) (pronounce: iffy )
	(function(){}());