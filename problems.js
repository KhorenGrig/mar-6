this.name = 'THIS IS THE GLOBAL OBJECT';

const obj = {
  name: 'a',
  age: 14
};


// const ff = () =>{
//   console.log(this.name);
// }
// ff();

// const ff = function(){
//   console.log(this.name);
// }

// const newff = ff.bind(obj);
// newff();

// make a function that will console log this.name,
// make it console log obj.name when calling
// dont use call or apply



// fix the code below
// the originalArray should not be mutated.
// create a new array that will be the reverse of the originalArray


// const originalArray = [0,1,2,3,4,5,6,7,8,9];

// const reversedArray = (arr) => {
//   const newarr = [...arr];
//   return newarr.reverse();
// };

// console.log(reversedArray(originalArray));
// console.log(originalArray);


// make this code shorter

// const obj1 = {
//   abcdefghijklmnopqrstuvwxyz: 123
// };

// const {abcdefghijklmnopqrstuvwxyz} = obj1;

// console.log(abcdefghijklmnopqrstuvwxyz);



// let myPromise = new Promise((res,rej) =>{

//   let number = Math.random();

//   setTimeout(()=>{
//     if (number > 0.5) {
//       res('Number is more then 0.5');
//     }
//   },500)

//   setTimeout(()=>{
//     if (number <= 0.5) {
//       rej('Number less or equal 0.5');
//     }
//   },500)
// })

// myPromise.then(data =>{
//   console.log(data);
// })

// .catch(err =>{
//   console.log(err)
// })



// const resrej = () => {
//   let number = Math.random();
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (number > 0.5) {
//         res('Number is more then 0.5');
//       }
//     }, 500)

//     setTimeout(() => {
//       if (number <= 0.5) {
//         rej('Number less or equal 0.5');
//       }
//     }, 500)
//   });
// }

// const aaa = async () => {

//   try {
//     const rrr = await resrej();
//     console.log(rrr);
//   } catch (er) {
//     console.log(er)
//   }

// }

// aaa();




// make a promise that will resolve or reject after 5 seconds.
// resolve if a randomly generated number is more than 0.5
// reject if it it less than or equal 0.5
// to generate a random number use the Math.random() function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// do not forget to catch 
// solve this problem with both .then and async await notations