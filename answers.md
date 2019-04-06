Describe the biggest difference between .forEach & .map.
with .forEach, the array is mutated once the action is performed on the array elements. with .map does not mutate the original array


What is the difference between a function and a method?
function has a global scope, method is a function in an object with a local scope


What is closure?
it's a function inside another function that cannot be accessed or manipulated BY the outside functions arguments, but can access them itself.


Describe the four rules of the 'this' keyword.
1. Window binding is a broad scope of this, it's not directed to one specific object so it binds to the whole scope or 'window'
2. Implicit binding points to what object you're referring to
3. New binding is used in constructor functions to refer to the specific instance of the created object and is returned by the constructor
4. Explicit binding is when call or apply is used with this functions


Why do we need super() in an extended class?
It calls to the parent class/constructor it is inheriting from.