const check = (ch) => {
    let str1="";
    for(let i=ch.length-1;i>=0;i--){
        str1+=ch[i];
    }
    
    console.log(str1)
    if(str1 == ch){
        return true;
    }
    else{
        return false;
    }
}

let str = "abba";

console.log(check(str));