(function() {
    'use strict'

    class Greeting {
        constructor() {
            this.msg = "Hello";
            this.target = " World";
        }
    }

    class Hello extends Greeting {
        say_hello() {
            console.log(this.msg + this.target);
        }
    }

    var hello = new Hello();
    hello.say_hello();

})();
