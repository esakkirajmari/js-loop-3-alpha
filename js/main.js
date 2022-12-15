let n=5;
let ch="";
for(let i=1; i<=n; i++){
    for(let j=0;j<i;j++){
        ch+=String.fromCharCode(j+65);
    }
    ch+="<br>"
}
document.write(ch)