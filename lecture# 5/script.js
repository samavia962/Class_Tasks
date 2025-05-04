// use let for declaring variable in case of var

//console.log("testing from console");

var x = "john wick";
var x = "jason statham";



let y = "var 2";
let a = "var 3"; 
const z = "abc";
// z = 123; not change
console.log(x,y,a,z);

/***  Data types  ***/
////// string, number, boolean, object,  undefined
var x;
x = "a";
x = 1.5;
x = true;
x = ["1", "name", "true"];
x = {"name":"abc", "id":1};
console.log(x);

/***  isArray (to check whether the variable is array or not)  ***/
var arr1 = {"name":"abc", "id":1};
console.log(Array.isArray(arr1)); 

var d = 55;
var b = 54;

console.log(a === b);

/***  if statement   ***/
if(6 === 6){
	console.log("both are equal");
}
else{
	console.log("both are not equal");
}

/***  Switch Statement   ***/
var x = 3;
switch(x){
	case 1:
		console.log('value is 1');
		break;
	case 2:
		console.log('value is 2');
		break;
	default:
		console.log('value is something else');
}

/***  alert box   ***/
// alert('this is a alert box');

/***  confirm box   ***/
// var ans = confirm('this is a confirm box');
// console.log(ans);

/***  prompt box   ***/
// var ans = prompt('what do you want to study ??');
// console.log(ans);

/***  Functions   ***/

abc();

function abc(){
	alert('hello from function ' );
}

/***  while loop   ***/

var i = 0;
while(i < 5){
	console.log(`value of i is = ${i}`);
	i++;
}

/***  For loop   ***/
for (i = 0; i <= 6; i++){
	console.log(`i = ${i}`);
}

/***  Do while loop   ***/
let j = 1;
do{
	console.log(`j = ${j}`);
	j++;
}
while(j <= 10);

/***  forEach (does not work with objects)  ***/
let arr = [10,20,30,40,'john', 50];

arr.forEach( (item) => {
	console.log(item);
} );

/***  Arrays   ***/
var arr1 = [10,20,30,40,'john', 50];
for (var i = 0; i < arr.length; i++) {
	console.log(arr1[i]);
}

/***  delete array index value   ***/
var arr1 = new Array(10,20,30);
console.log(arr);
delete arr[1];
console.log(arr);
arr[1] = "abc";
console.log(arr);

/**************************  Array Methods  *************************/
/***  Sort  ***/
var arr1 = new Array(30,20,10);
console.log(arr1);
arr1.sort();
console.log(arr1);
/***  Reverse  ***/
var arr1 = new Array(30,20,10);
console.log(arr1);
arr1.sort();
console.log(arr1);
arr1.reverse();
console.log(arr1);

/***  Pop (delete last variable)  ***/
var arr1 = new Array(30,20,10);
console.log(arr1);
arr1.pop();
console.log(arr1);

/***  Push (insert at last index)  ***/
var arr1 = new Array(30,20,10);
console.log(arr1);
arr1.push(40);
console.log(arr1);

/***  shift (delete value from 1st index (reverse to pop))  ***/
var arr1 = new Array(30,20,10);
console.log(arr1);
arr1.shift();
console.log(arr1);

/***  unshift (insert value at 1st index (reverse to push))  ***/
var arr1 = new Array(30,20,10);
console.log(arr1);
arr1.unshift('new');
console.log(arr1);

/***  slice (fetch two or more values form array)  ***/
var arr1 = new Array(10, 20, 30, 40, 50, 60);
console.log(arr1);
var arr2 = arr1.slice(1);
var arr2 = arr1.slice(1,3);
var arr2 = arr1.slice(-3);
var arr2 = arr1.slice(-4,-1);
console.log(arr2);
    

/***  splice (to insert or remove some value in between the array)  ***/
var arr1 = new Array(10,20,30,40,50,60);
console.log(arr1);
arr1.splice(2,0,'new1', 'new2');
arr1.splice(2,2,'new1', 'new2');
arr1.splice(2,1);
console.log(arr1);
