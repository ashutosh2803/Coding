for(let i=0; i<20; i++){
  console.log(i)
  setTimeout(function(){
    console.log('The number is: ' + i);
  }, 1000)
}

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// The number is: 0
// The number is: 1
// The number is: 2
// The number is: 3
// The number is: 4
// The number is: 5
// The number is: 6
// The number is: 7
// The number is: 8
// The number is: 9
// The number is: 10
// The number is: 11
// The number is: 12
// The number is: 13
// The number is: 14
// The number is: 15
// The number is: 16
// The number is: 17
// The number is: 18
// The number is: 19