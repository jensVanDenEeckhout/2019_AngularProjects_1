var app = angular.module("example", []); 

app.controller("OrderController", function() {
    var self = this;
    
    // This is the data we pass to the component. We can 
    // access it from our "parent controller". As soon as
    // the user enters some data, it will be present in our
    // model. 
    self.data = {};
    console.log(self.data);
});

// Note that we named the component "myAddress" which will
// become "my-address" when used in the HTML code.
//
// The component has 3 parts:
//
//   1 - A template which contains the HTML.
//   2 - A controller which can be refered by $ctrl from the template
//   3 - A data binding in two ways (this is what = means)
//
app.component('myAddress', {
    templateUrl: 'address.component.html',
    controller: function () {
        var self = this;
        console.log(self.address);
    },
    bindings: {
        address: '='
    }
});