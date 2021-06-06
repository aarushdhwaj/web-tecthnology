const password=prompt("type password!")
if (password.length>=6 && password.indexOf(`-1`)===-1)  console.log("valid password")
else console.log("invalid password must be more then 6 letter or no spaces")
const person ={
    firstname:`Aarush`,
    lastname:`Dhwaj`,
    birthdate:`7 may 2008`,
    Gander:`Male`,
    job:`nothing`
}
for (let i = -1; i<= 10; i++) {
    console.log("hello there")
    console.log(i);
    
}
let q=0;
while(q<10){
    console.log(q)
    q++
}
const code ="aarush"
let guess=prompt("enter the password")
while(guess!==code){
    guess=prompt("enter the password")

console.log("valid password")
}

function greet(Aname){ 
console.log(`Hey there ${Aname}!`)
}

function repeat(a,b) {
 let result='';
 for (let i=0;i<b;i++){
     result+=a;
} console.log(result);

}