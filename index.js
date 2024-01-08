// Write your solution in this file!
//Declare customerName as bob in global scope
var customerName= "bob";

//upperCaseCustomerName(): Write a function that accesses that global customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

//setBestCustomer(): Write a function that when called declares a variable called bestCustomer in global scope and assigns it to be 'not bob'. (Poor Bob.) Also, poor us, declaring a global variable from inside a function is one of those things we would never want to do normally, but is good for us to explore right now.

function setBestCustomer(){
    bestCustomer = "not bob";
    return bestCustomer;
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = "joel";

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "mercy";
    return leastFavoriteCustomer;
}
