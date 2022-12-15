let n=5;
let a="";
for(let i=1; i<=n; i++){
    for(let j=0;j<i;j++){
        a+=String.fromCharCode(j+65);
    }
    a+="<br>"
}
document.write(a)