    const students = [
        { name: "Thuong", age: 20, grade: 4, gender: true },
        { name: "Thuy", age: 20, grade: 2, gender: false },
        { name: "Ly", age: 20, grade: 7, gender: true },
        { name: "Huong", age: 30, grade: 9, gender: false }
    ];

    // students.map()...

    function myMap(arr, cb) {
        let returnResults = [];
        for (let i = 0; i < arr.length; i++) {
            returnResults.push(cb(arr[i]));
        }
        return returnResults;
    }

    Array.prototype.myMap = myMap

    Array.prototype.myMap = function(cb) {
        console.log(this);
        let returnResults = [];
        for (let i = 0; i < this.length; i++) {
            console.log(this[i]);
            returnResults.push(cb(this[i]));
        }
        return returnResults;
    };
    let result = students.myMap(item => item.name);
    console.log(result);

    //  [1, 2, 3, 4, 5].myMap(item => item);



    //  Array.prototype.myFilter = myFilter

    function myFilter(arr, cb) {
        let returnResults = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].grade >= 5) {
                returnResults.push(cb(arr[i]));
            }
        }
        return returnResults;
    }

    let result2 = myFilter(students, item => item);
    console.log(result2)

    Array.prototype.myFilter = myFilter


    Array.prototype.myFilter = function(cb) {
        console.log(this);
        let returnResults = [];
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i]))
                returnResults.push(cb(this[i]));


        }
        return returnResults;


    }
    let result1 = myFilter(students, item => item.name > 5);
    console.log(result1)


    //  Array.prototype.myReduce = myReduce

    function myReduce(arr) {
        let returnResults = [];
        var point = [];
        var sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].grade >= 5) {
                point.push(arr[i].grade);
            }
        }

        for (let index = 0; index < point.length; index++) {
            sum += point[index];
        }
        return sum / point.length;
    }

    let result3 = myReduce(students);
    console.log(result3)



    // (student.reduce((sum, crr) => sum_curr, 0)) / student.length;