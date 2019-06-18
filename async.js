   function resolveAfter2Seconds() { //example 1
       return new Promise(resolve => {
           setTimeout(() => {
               resolve('Nhung');
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

   let square = (a, b, h) => (a + b) * h / 2; // EXAMPLE 3  use callback
   console.log('Dien tich hinh thang truyen tham so:' + square(2, 3, 2))
   let add = (a, b, cb) => {
       setTimeout(() => {
           if (typeof a != 'number' || typeof b != 'number') { return cb(new Error('Tham so khong phai kieu number')) }
           cb(undefined, a + b);
       }, 1000);
   }

   let multiply = (a, b, cb) => {
       setTimeout(() => {
           if (typeof a != 'number' || typeof b != 'number') { return cb(new Error('Tham so khong phai kieu number')) }
           cb(undefined, a * b);
       }, 1000);
   }

   let devide = (a, b, cb) => {
       setTimeout(() => {
           if (typeof a != 'number' || typeof b != 'number') { return cb(new Error('Tham so khong phai kieu number')) }
           if (b == 0) { return cb(new Error('Chia het cho 0')) }
           cb(undefined, a / b);
       }, 1000);
   }

   // add(4, 5, (e, res) => {
   //     if (e) return console.log('loi' + e);
   //     console.log('Ket qua cua ham add la:' + res);
   // });



   let tinhdientichhinhthang = (a, b, h, cb) => {
       add(a, b, (err, result) => {
           if (err) return cb(err);
           multiply(result, h, (err, result) => {
               if (err)
                   return cb(err)
               devide(result, 2, (err, result) => {
                   if (err)
                       return cb(err);
                   cb(undefined, result);
               });
           });
       });
   }



   tinhdientichhinhthang(2, 3, 2, (err, result) => {
       if (err)
           console.log(err + '');
       console.log('Dien tich hinh thang dung cb function la:', result);
   });


   //example 4 use promise
   let aPromise = new Promise((resolve, reject) => { // declare a promise by new
       // resolve("return successful result");
       resolve("Successful")
           // reject("Return error")
   });

   aPromise.then((msg) => console.log('Executing is' + msg),
       (errMsg) => console.log(errMsg + ' '));


   let add = (a, b) => {
           return new Promise((resolve, reject) => {
               setTimeout(() => {
                   if (typeof a != "number" || typeof b != 'number') {
                       reject(new Error("Parameter is not number")) // using reject instead of using return
                   }
                   resolve(a + b); // using resolve instead of using return
               }, 1000);
           })
       }
       //    add(1, 4)
       //        .then((result) => console.log("kết quả là: " + result), (error) => console.log(error + ''))


   let multiply = (a, b) => {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
               if (typeof a != 'number' || typeof b != 'number') {
                   reject(new Error("Error parameter is not number"))
               }
               resolve(a * b)
           }, 1000);
       })
   }
   let divide = (a, b) => {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
               if (typeof a != 'number' || typeof b != 'number') {
                   reject(new Error("Error parameter is not number"))
               }
               if (b === 0) {
                   reject(new Error('Divide with 0'))
               }
               resolve(a / b)
           }, 1000);
       })
   }


   // Execute promise 
   let dientichhinhthang2 = (a, b, h) => {
       add(a, b)
           .then(result => multiply(result, h)) // using then to execute and handle the promise
           .then(res => divide(res, 2))
           .then(square => console.log("Diện tích: " + square))
           .catch(e => console.log(e + ''))
   }
   dientichhinhthang2(2, 3, 2)

   // tái sử dụng function

   //    let dientich1 = (a, b, h) => {
   //        return add(a, b)
   //            .then(result => multiply(result, h))
   //            .then(res => divide(res, 2))
   //    }
   //    dientich1(6, 4, 5)
   //        .then(square => console.log("Diện tích: " + square))
   //        .catch(e => console.log(e + ''))