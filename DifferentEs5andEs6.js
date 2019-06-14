    // The different between es6 and es5

    // es6 block-scope variables
    for (let i = 0; i < a.length; i++) {
        let x = a[i]

    }
    for (let i = 0; i < b.length; i++) {
        let y = b[i]

    }

    let callbacks = []
    for (let i = 0; i <= 2; i++) {
        callbacks[i] = function() { return i * 2 }
    }
    callbacks[0]() === 0
    callbacks[1]() === 2
    callbacks[2]() === 4

    // es5 block-scope variables
    var i, x, y;
    for (i = 0; i < a.length; i++) {
        x = a[i];

    }
    for (i = 0; i < b.length; i++) {
        y = b[i];

    }

    var callbacks = [];
    for (var i = 0; i <= 2; i++) {
        (function(i) {
            callbacks[i] = function() { return i * 2; };
        })(i);
    }
    callbacks[0]() === 0;
    callbacks[1]() === 2;
    callbacks[2]() === 4;

    // es6 scope-function
    function foo() { return 1 }
    foo() === 1; {
        function foo() { return 2 }
        foo() === 2
    }
    foo();


    // es5 scope-function
    (function() {
        var foo = function() { return 1; }
        foo() === 1;
        (function() {
            var foo = function() { return 2; }
            foo() === 2;
        })();
        foo() === 1;
    })();

    //Arrow Functions
    //es6 -Expression Bodies
    const
        odds = evens.map(v => v + 1)
    pairs = evens.map(v => ({ even: v, odd: v + 1 }))
    nums = evens.map((v, i) => v + i)
        //es5 -Expression Bodies
    odds = evens.map(function(v) { return v + 1; });
    pairs = evens.map(function(v) { return { even: v, odd: v + 1 }; });
    nums = evens.map(function(v, i) { return v + i; });

    //Statement Bodies es6 
    let nums = [2, 3, 5, 10, 19, 25, 30]
    let fives = [];
    nums.forEach(v => {
        if (v % 5 === 0) {
            fives.push(v)
        }
    });
    console.log(fives)


    //Statement Bodies es5
    var nums = [2, 3, 5, 10, 19, 25, 30]
    var fives = []
    nums.forEach(function(v) {
        if (v % 5 === 0)
            fives.push(v);
    });
    console.log(fives)


    //lexical this es6
    var nums = [2, 3, 5, 10, 19, 25, 30]
    var fives = []
    this.nums.forEach((v) => {
        if (v % 5 === 0)
            this.fives.push(v)
    });
    console.log(this)


    // lexical this es5
    var nums = [2, 3, 5, 10, 19, 25, 30]
    var fives = []
    var self = this;
    this.nums.forEach(function(v) {
        if (v % 5 === 0)
            self.fives.push(v);
    });

    // implicit binding
    function foo() {
        console.log(this.a);
    }
    var obj = {
        a: 2,
        foo: foo
    };
    obj.foo();

    // default binding 
    var myFunction = function() {
        console.log(this.a);
    }
    var a = 5
    myFunction();