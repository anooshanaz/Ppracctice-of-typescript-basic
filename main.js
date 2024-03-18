//class01
//simple write helloo world
console.log("hello world");
//write a hello world using variable
var z = "hello world";
console.log(z);
let fname = "Anoosha"
console.log(fname)
let lname = "Naz"
console.log(fname+ " " +lname)//cocetination
let des: string = "she is so intelligent"
console.log(fname+ " " +lname+ " " +des);
let person: {fname: string, lname: string, age:number}
={fname: "Anosha", lname:"naz", age:20}
console.log(person)
let a:number = 10;
let b:number = 20;
console.log(a+b)//Addition
console.log(a-b)//Subtraction
console.log(a*b)//multiply
console.log(a/b)//devide
console.log(a%b)//modules
console.log(a += b)//increment
console.log(a += 1)//increment
console.log(a -= 1)//decrement
console.log(a === b)
console.log(a < b)//lessthan
console.log(a > b)//greaterthan
console.log(a <= b)
console.log(a >= b)
console.log(a != b)//isnotequal
let n=5
let o="5"
console.log(n == o) //value are number so is true
console.log(n === o)// datatype is not equal so value is false
 import inquirer from "inquirer"
 let anwser = inquirer.promp({
     Name:"age",
     type:"number",
     message: "Enter your age"
 })
 console.log("Insha Allah after" +(60-anwser.age)+ "years you will be 60 year old")
let a: number = 5;
let b: number = 2;
let c: number = ++a + a++ + --b + b-- + a+b + ++b;
console.log(c)//22(ans)
let result:number = 3 + 4 * 5;
result++
console.log(result) //23(ans)++ final ans 24
let c = 10;
c += 5;
console.log(c)//15(ans)
let a = 5
let b = 2
let isequal = (a == b)//false
let isnotequal = (a != b)//true
let greater = (a > b)//true
let lessthan = (a < b)//false
console.log(lessthan)

