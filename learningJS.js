    // about array

    console.log("Hello node") // console hien thi
    let array = [1, 2, 3, 4, 5];
    let array1 = ['nhung', 'huong', 'thuong', 'ly', 'thuy'];
    let array2 = [6, 7, 8];

    array.forEach(function(element) {
        console.log(element);
    });


    let result = array.find(function(element) { // function find
        return element > 2;
    });
    console.log("Ket qua tim kiem duoc la:" + result);

    console.log(array1.concat(array2)) // function concat
    console.log(array.copyWithin(0, 3, 4)); //function copywithin

    console.log(array1.pop()); // function pop
    console.log(array1);

    const result1 = array1.filter(word => word.length > 4); // function filter
    console.log(result1);

    // about object

    const student = { name: 'Nhung', major: 'IT', age: 20 };
    const book = { name: "Harry poster", type: "comic", price: 25000 };

    const returnedTarget = Object.assign(book, student); // function assign 
    console.log(returnedTarget);
    console.log(student)

    // Mutation array.push(232)
    // imutaion array.map()

    console.log("imutation", {...student, ...book });
    // { name: 'Nhung', major: 'IT', age: 20,  title: "Harry poster", type: "comic", price: 25000 }
    console.log(student);



    // let { name, school, company } = internship;



    // control flow if else for switch
    // let const

    // data type

    // const internship = [
    //     { name: "Nhung", IT: 7, english: 8, present: 6 },
    //     { name: "Ha", IT: 8, english: 5, present: 8 },
    //     { name: "Thuong", IT: 6, english: 7, present: 8 },
    //     { name: "Thao", IT: 9, english: 9, present: 6 }
    // ];
    // internship.forEach(internship => {
    //     const averageInternship = internship.map(internship => [internship.name = ])
    // });

    // represent entity
    const students = [
        { name: "sdfsdf", age: 20, grade: 4, gender: true },
        { name: "Thuy", age: 20, grade: 5, gender: false },
        { name: "sdfdsf", age: 20, grade: 7, gender: true },
        { name: "Huong", age: 30, grade: 9, gender: false }
    ];

    // query
    // filter, map, reduce, foreach

    const maleStudent = students.filter(student => student.gender);
    const femaleStudent = students
        .filter(student => !student.gender)
        .map(student => student.age)
        .reduce((sum, current) => sum + current, 0);
    console.log(femaleStudent);

    const averagePoint = students
        .filter(student => student.grade >= 5)
        .map(student => student.grade)
    var length = averagePoint.length;
    var a = averagePoint.reduce((sum, current) => sum + current, 0)
    const total = a / length;
    console.log(total);



    var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"], //example  1
        counter;

    for (counter = 0; counter < names.length; counter++) {
        console.log(names[counter]);
    }





    const videos = [{ // example 2
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [4.0],
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [5.0],
                "bookmark": [{ id: 432534, time: 65876586 }]
            },
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [4.0],
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [5.0],
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ],

        videoInfor = [];
    videos.forEach(function(video) {
        videoInfor.push({ id: video.id, title: video.title });
    });
    console.log(videoInfor)


    Array.prototype.map = function(projectionFunction) { // example 3
        var results = [];
        this.forEach(function(itemInArray) {
            results.push(projectionFunction(itemInArray));

        });

        return results;
    };

    var a = newReleases.map(function(video) { return { id: video.id, title: video.title }; }); // example 4
    return a;



    var videos = newReleases.filter(video => video.rating == 5.0) // example 5
    return videos;

    Array.prototype.filter = function(predicateFunction) { // example 6
        var results = [];
        this.forEach(function(itemInArray) {
            if (predicateFunction(itemInArray)) {
                results.push(itemInArray);
            }
        });

        return results;
    };

    var videos; // example 7
    videos = newReleases.filter(video => video.rating == 5.0)
        .map(video => video.id)
    allVideoIdsInMovieLists = [];


    movieLists.forEach(function(movieList) { // example 8
        movieList.videos.forEach(function(videos) {
            allVideoIdsInMovieLists.push(videos.id);
        });
    });

    Array.prototype.concatAll = function() { // example 9
        var results = [];
        this.forEach(function(subArray) {
            if (Array.isArray(subArray))
                subArray.forEach((item) => results.push(item))
        });
        return results;
    }



    var movieLists = [ // example 10
        {
            name: "New Releases",
            videos: [{
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        },
        {
            name: "Dramas",
            videos: [{
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        }
    ];


    return movieLists.map(movieList => movieList.videos.map(video => video.id))
        .concatAll();