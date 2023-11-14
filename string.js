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

function replace(str) {
    let newString = "";
    for(let i = 0; i < length(str); i++){
        newString += str[i];
    }
    console.log(newString);
    return str;

}
replace(string);
// console.log(replace("pizza", "p", "h"));