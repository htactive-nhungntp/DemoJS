    function resolveAfter2Seconds() { //example 1
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Nhung tồ');
            }, 2000);
        });
    }

    async function asyncCall() {
        var result = await resolveAfter2Seconds();
        console.log(result)
        console.log('Nguyễn Thị Phương');

    }
    async function asyncCall1() {
        console.log('Hoàng Thương');
        var result = await asyncCall();
        console.log(result);
    }

    asyncCall1();

    function resolveAfter2Seconds() { // example 2
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 2000);
        });
    }

    async function asyncCall() {
        console.log('calling');
        var result = await resolveAfter2Seconds();
        console.log(result);
        // expected output: 'resolved'
    }

    asyncCall();

    // var fs = require("fs");

    // console.log("task 1 100 ms");

    // fs.readFile("test.txt", "utf-8", (e, asyncData) => {
    //     let links = asyncData.split(", ");
    //     console.log("async", links);
    // });
    // // 200ms

    // let data = fs.readFileSync("test.txt", "utf-8");
    // let links = data.split(", ");
    // console.log("sync", links);

    //test readfile test.txt