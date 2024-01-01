// from 1-on-1 with Tyler on 12/14/2021

var hero = {
  _name: 'John Doe',
  getSecretIdentity: function () {
    return this._name;
  },
};

var stoleSecretIdentity = hero.getSecretIdentity;

var _name = 'Foo'

console.log(stoleSecretIdentity()); // Foo - the scope in which the function is invoked is the GLOBAL scope, not the hero scope. Hence why it returns "Foo"

console.log(hero.getSecretIdentity()); // John Doe - the scope in which the function is invoked is the HERO scope, hence why it returns "John Doe". The "this" keyword
// references the property value based on the invoked scope.


var length = 10;

function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    console.log(this.length) //5 - the scope in which this console.log is invoked is the OBJ scope, hence why it returns 5.
    this.fn() // 5 - fn, in this case, calls the global fn function, but it references this, this being OBJ because fn is invoked on OBJ. 
    fn() // 10 - fn, in this case, calls the global fn function, and it references the global scope, like if it were called as window.fn(). Since 
    // this.length is then referencing window (the global scope), 10 is the global property value of length. Thus, it is 10.
    
    arguments[0](); // 3 - this one is really tricky. It is 3 because arguments is a keyword in JS, where values passed to a function are stored on an array-like object 
    // (in this case, it would look like {0: fn, 1: 1, 2: 2, length: 3}). Since fn is invoked on arguments, fn calls this.length on arguments, which is equal to 3 (the 
    // number of arguments passed, essentially).
  },
  fn: fn,
};

obj.method(fn, 1, 2);
obj.fn()

