
# 1 - GETTING TO KNOW THE ANGULARJS FRAMEWORK\

## 02\
### Angular JS\
	modular framework\
	different design decisions because it wants to be as efficiënt as possible\
	dependencies not included WHEN not used\
### DIRECTIVES\
	custom html syntax\
	<navbar></navbar>\
### Dependency injection\
	unique way of providing services and other things\
	to pieces of the application that need them\
#### dependency injected parameter\
	var ViewCtrl = function ($scope, contacts, $routeParams){ ... }\
	$scope = dependency injected parameter\
	it gets delivered differently compared to a javascript variable\
### DOM element\
	not recommended to change DOM elements in the controller\
### data binding\
	syntax: ng-model\
	change attribute > nothing happens but\
	changed value get synced with the angular model\

## 03\
### Model-View-Controller\
	1. model updates the view\
	2. the user consumes the view\
	3. user will interact witht he controller to manipulate the model\
	very robut design pattern\
	two more derivatives that angular could fall into\
	1. Model view presenter\
		Decouples the view from the model ( they don't know anything about each other)\
	2. Model View viewModel\
		You are doing more to fit the model into the view\
### Scope\
	$scope IS NOT THE model BUT IS A reference to the model\
	in the scope you set data, functions\
	This gets consumed into the view\
	the view gets the scope inherintly\
	$scope is the innermediate step\
	$scope is not used in the view\
	$scope.contact.[name/email/phone] is represented in the view as {{contact.name}}\
	$scope is referencing the model in the app.js\

## 04\
	ways of how to think about AngularJS\
	General talking points\
	### Best practices\
		cleaner code\
		better performances\
		better testability\
		#### ModelView Seperation\
			Model View and third component( presentation layer/viewModel layer)\
		#### DRY programming ( Don't Repeat Yourself )\
			Huge in angular\
			Modular framework\
			Never repeat yourself\
			boiler code here in there\
			If you see yourself repeating, you are probably doing it wrong\
		#### Don't hack\
			If it seems like a hacky solution\
			it's probably wrong\
	### Don't write bad code\
		#### Performance of code \
			happens on scale\
		#### reusability\
			services, directives\
			use it to your advantage\
		#### Square peg, round hole\
			build-in code is worth using it in the right way!\
	### Test\
		#### Write the tests!\
			Very important to be able to scale\
		#### Doesn't have to be TDD ( Test Driven Development )\
			Can become cumbersome\
		### Broading your understanding\
		#### Learning curve is steep!\
		#### practice being curious\
			when you don't know how something works\
			digg in to find out how it works ( it's only going to help you )\
		#### Refactor your code to optimalize\
	### Read the source code!\
		#### Consumable\
		#### Error messages are bad!\
		#### Dissect the source code\

## 05\

### How To Access Your Working Files



