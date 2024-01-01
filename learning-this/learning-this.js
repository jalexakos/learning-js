// from 1-on-1 with Tyler on 12/07/2021

const Foo = function(a) {  
    function bar() {
      return a;
    }
  
    this.baz = function() {
      return a;
    };
  };
   
  Foo.prototype = {
    biz() {
      return a;
    },
  };
  
  const f = new Foo(7);
  
  f.bar(); // error - bar is not a function on Foo, so there's no access to it from the outside. It's not defined like baz is
  f.baz(); // 7 - baz is defined on Foo, so it has access to a
  f.biz(); // error - biz is defined on Foo's prototype, but a is not defined on Foo. You would have to do this.a = a in Foo for this to work