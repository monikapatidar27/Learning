const check = (ch) => {
    if(ch == 'a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch == 'A'||ch=='E'||ch=='I'||ch=='O'||ch=='U'){
        return true;
    }
    return false;
}

let str = "this is the learning task";
let str1 = "";

for(let i=0;i<str.length;i++){
    if(!check(str[i])){
        str1+=str[i];
    }
}

console.log(str1);