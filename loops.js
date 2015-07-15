//answering example problem with while insted
var number = 1;
while (number <= 10) {
    console.log(number);
    number++;
}

//solution 1
for (var i = 0; i <= 1000; i+=100) {
  console.log(i);
}

//solution 2
for (var i = 1; i <= 128; i*=2) {
  console.log(i);
}

//solution 3
for (var i = 0; i <= 10; i+=2) {
  console.log(i);
}

//solution 4
for (var i = 3; i <= 15; i+=2) {
  console.log(i);
}

//solution 5
for (var i = 9; i >= 0; i--) {
  console.log(i);
}

//solution 6
for(var i = 1; i <= 4; i++){
  for(var j = 0; j < 3; j++){
  console.log(i);}
 }

//solution 7
for(var i = 1; i < 4; i++){
  for(var j = 0; j <= 4; j++){
  console.log(j);}
}
