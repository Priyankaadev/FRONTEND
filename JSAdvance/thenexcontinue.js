x= Promise.resolve("foo")
    .then(function p1(string) {
       return new Promise((resolve, reject) => {
            setTimeout(() => {
                string += "bar";//foobar
                resolve(string)
            }, 10000);
        })
    }
    )
    y = x.then(function p2(string) {
        setTimeout(() => {
            string += "baz";
            console.log(string); //foobarbaz
        }, 1);
        return string; //foobar
    })
    y.then(function p3(string) {
        console.log(string);
    });

