function f(s){
if(!s.length)return '';
let sh=s.reduce((a,b)=>a.length<=b.length?a:b),ml=sh.length;
for(let l=ml;l>0;l--){
for(let i=0;i<=ml-l;i++){
let ss=sh.slice(i,l);
if(s.every(e=>e.includes(ss)))return ss;}}
return '';}
console.log(f(process.argv.slice(2)));
