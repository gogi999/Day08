// Only change code below this line
function localScope() {
    var myVariable = "I am here!";
    console.log(myVariable);
}

localScope();
// Only change code above this line

// myVariable is not defined outside of localScope
if (typeof myVariable != "undefined") {
    console.log('ouside localScope', myVariable);
} else {
    console.log('ouside localScope UNDEFINED!!!');
}

module.exports = localScope;