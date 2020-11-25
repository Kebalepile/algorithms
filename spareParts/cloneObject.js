const obj = { 
           a: {
              b:{
                 c:1
                 }
               }
             };
const clone = JSON.parse(JSON.stringify(obj));

clone.a.b.c = "hello";

console.log(obj.a.b.c);

console.log(clone.a.b.c);
