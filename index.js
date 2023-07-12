// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;

function upperCaseCustomerName() {
    if (customerName) {
        customerName = customerName.toUpperCase();
    }
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Dennis Wafula';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Levy Wesonga';
}