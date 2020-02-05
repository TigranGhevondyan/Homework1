let a=3;
let b=14;


if (a % b===0 || b % a===0)
{
  alert(1)
}

else {
  
alert(0)
}


let angle1=45

let angle2=90

alert(180-angle1-angle2);



let n=17

let n_st=String(n)

let result=Number(n_st)+Number(n_st.repeat(2))+Number(n_st.repeat(3))

console.log(result)


let num=8765

let num_st=String(num)

let last_char=num_st.substr(-1)

let other=num_st.substr(0,num_st.length-1)

if (Number(last_char)===0)
{
  
console.log(num)

}

else 
{
  
let result=Number(last_char+other)

console.log(result)


}

let a1=45,a2=-12,a3=0,a4=3,a5=-15;
let result=(a1+a2+a3+a4+a5)/5;
console.log(result);