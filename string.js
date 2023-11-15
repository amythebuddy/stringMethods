let string = "pizza";
function length(str){
    let index = 0;
    let length = 0;
    while(string[index]){
        index++;    
        length++;
    }
    return length;
}
console.log(length(string));

function slice(str, start, end){
    let newString = "";
    for(let i = start; i < end; i++){
        newString += str[i];
    }
    return newString;
}
console.log(slice(string, 0, 2));

function charAt(str, index){
    return str[index];
}
console.log(charAt(string, 2));

function concat(str, ...args){
    let newString = "";
    for(let j = 0; j < str.length; j++){
       newString += str[j];
    }
    for(let i = 0; i < args.length; i++){
        newString += args[i];
    }
    return newString;
}
console.log(concat(string, " ", "is my favorite"));

function replace(str1, value, newValue) {
    let newString = "";
    let replace = false;
    for(let i = 0; i < length(str1); i++){
        //only running if the string has the value and replace has not been done
        if(str1[i] === value && !replace) {
            newString += newValue;
            replace = true;
        } else {
            newString += str1[i];
        }
    }
    for(let i = length(newString); i < length(str1); i++){
        newString += str1[i];
    }
    return newString;
}
console.log(replace("pizza", "z", "$"));

function replaceAll(str1, value, newValue) {
    let newString = "";
    for(let i = 0; i < length(str1); i++){
        if(str1[i] === value) newString += newValue;
        else newString += str1[i];
    }
    return newString;
}
console.log(replaceAll("pizza", "z", "$"));