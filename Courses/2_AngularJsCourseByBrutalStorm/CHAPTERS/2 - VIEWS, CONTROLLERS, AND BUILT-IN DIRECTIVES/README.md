# 2 - VIEWS, CONTROLLERS, AND BUILT-IN DIRECTIVES

## 06
	### Hello world
	#### app.js
		angular.module('app', []);

	#### index.html
		<html ng-app="app">
		<body>
			<h1>Hello, World!</h1>
			<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
			<script type="text/javascript" src="app.js"></script>
		</body>
		</html>

## 07
	### Basic building blocks
	#### interpolation
		strings: {{ "test"}} = test
		expressions: {{12+13}} = 25
	#### controllers
		<div ng-controller="MainController"></div>

	#### define controller - preferred way for production
		var app = angular.module('app', []);

		app.controller('MainController', function($scope){
				$scope.val ="way 2";
		}); 

## 08
	### syntax 
	#### function isEven()
		.js
			$scope.isEven = function(){
				return $scope.val %2 == 0
			}
		index.html
			<h2 ng-show="isEven()">even</h2>
			<h2 ng-hide="isEven()">Odd</h2>
	#### call variable
		.html
			<h2 ng-show="even">even</h2>
		.js
			$scope.even = false
			

	### good bad practise
	#### using methods in state directives in the view is bad practise
		decreased performance
		don't call function in state things like: ng-hide
		is OK in click event
		normally you shouldn't call functions in ng-show / ng-hide

		What do you do instead?
			pass in the variable

## 09
	### syntax
	#### ng-repeat
		.html
			<div ng-repeat="element in myarr">
				{{ element }}
			</div> -->
		.js
			$scope.myarr = [1,2,3,4,5]

	#### ng-repeat-start / ng-repeat-end	
		.html
			<div ng-repeat-start="user in users">
				<strong>{{ user.name }}</strong>: {{ user.age }}

			</div>
			<hr ng-repeat-end />
		.js
			$scope.users = [{name:"mike",age:23},
							{name:"andy",age:34},
							{name:"reid",age:45}]
	##### ng-repeat IN-DEPTH
		[NOT WORKING]
		$scope.myarr = [1,2,3,4,5,5]
		int array ( primitive types) , is gonna try to key this with the key primitive type itself

		[MAKE PRIMITIVE ARRAY WORK]
		you have to override it yourself by adding: track by $index
		[EXAMPLE]
		<div ng-repeat="element in myarr track by $index">
			{{ element }}
		</div>
		[WHAT IS $index]
			represents the index of the array ( starts at 0)
			{{ element }} : {{ $index }}
		[OTHER EXAMPLES TO USE WITH THE ARRAY]
		$start, $middle, $last
			HTML
				<div ng-repeat="element in myarr track by $index">
					{{ element }} 
					<span ng-show="$first">first</span>
					<span ng-show="$middle">middle</span>
					<span ng-show="$last">last</span>
					<span ng-show="$even">even</span>
					<span ng-show="$odd">odd</span>
				</div>
			APP.JS
				$scope.myarr = [1,2,3,4,5,5,6,7,8,9]		
			OUTPUT
				1 first even
				2 middle odd
				3 middle even
				4 middle odd
				5 middle even
				5 middle odd
				6 middle even
				7 middle odd
				8 middle even
				9 last odd

	#### ng-repeat - specific object
		.js
			$scope.ob = {name:"mike",age:23, title:"Mr"}
		.html
			<div ng-repeat="attr in ob">
				{{ attr }}
			</div>	
		OUTPUT
			mike
			23
			Mr


		[THIS WORKS]
		$scope.users = [{name:"mike",age:23},
						{name:"andy",age:34},
						{name:"reid",age:45},
						{name:"reid",age:45}]

## 10 - dynamic class assignment
	### syntax
	#### class assignment
	##### normal way
		<h1 class="orange italic">Hello, World!</h1>
	##### angular way

		<h1 ng-class="'orange'">Hello, World!</h1>
		OR
		js = $scope.classVar = "orange"	
		|| $scope.classVar = "orange italic"	
		html = <h1 ng-class="classVar">Hello, World!</h1>
		OR
		<h1 ng-class="['orange','italic']">Hello, World!</h1>
		OR
		[TOGGLE CLASS]
			<h1 ng-class="{orange: false}">Hello, World!</h1>
			||
			$scope.classVar = true
			<h1 ng-class="{orange: classVar}">Hello, World!</h1>
			||
			<h1 ng-class="{orange: classVar, italic: classVar}">Hello, World!</h1>


	#### ng-template & ng-include
		.html
			<div ng-controller="MainController">
				<div ng-include="'test.html'">
					
				</div>
			</div>

			<script type="text/ng-template" id="test.html">
				<h1>My Template</h1>
			</script>
		.js 
			/

## 11 - ng-model
	### syntax
			<div ng-controller="MainController">
				<input ng-model="mydata">
				<h1>{{ mydata }}</h1>
			</div>
	### explanation
		all bound to the same element in case multiple are created
	### sub controller and main controller
		#### explanation
			when created, subcontroller inherites from main
			this means, changes to maincontroller mydata will also change data to the sub controller mydata
			but once you change the sub controller my data, they get split
			and changing main controller mydata will no longer change the sub controller mydata value
		#### syntax
				<div ng-controller="MainController">
					<input ng-model="mydata">
					<!-- <button ng-click="mydata='123'">123</button> -->
					<h1>{{ mydata }}</h1>

					<div ng-controller="SubController">
						<input ng-model="mydata">
						<h1>{{ mydata }}</h1>
					</div>
				</div>
		#### WORKAROUND
			add .val to {{ mydata}} => {{mydata.val}}

			<div ng-controller="MainController">
				<input ng-model="mydata.val">
				<!-- <button ng-click="mydata='123'">123</button> -->
				<h1>{{ mydata.val }}</h1>

				<div ng-controller="SubController">
					<input ng-model="mydata.val">
					<h1>{{ mydata.val }}</h1>
				</div>
			</div>

			this will not debound the child from the parent
			changing child will also change parent 

		#### best practise
			Always use . when using inheritance => {{mydata.val}}

## 12 - scope.watch - REWATCH! - can decrease performance
	used when expected a change

	.html
		<span ng-show="mydata.toolong">Name is too long!
	.js
		$scope.$watch('mydata.val',function(newval){
			$scope.mydata.toolong = newval.length > 15
		})

	own words: ng-show gets triggered when the name is longer than 15 chars.
	It constantly checks the length ( CARE FOR PERFORMANCE )

## 13 - INCOMPLETE