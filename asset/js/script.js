

function calculator(q){
let a=5;
let b=10;
let c=0;
if(q==="*"){
    console.log(c=a*b);
}else if(q==="/"){
    c=a/b;
}else if(q==="-"){
    c=b-a;
}else if(q==="+"){
    c=a+b;
}
return c
}

console.log(calculator("/"))