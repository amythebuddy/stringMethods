let string = "pizza";
function length(str){
    let index = 0;
    let length = 0;
    //if the string has a character in that index, the while loop keeps running
    while(string[index]){
        index++;    
        length++;
    }
    return length;
}
console.log(length(string)); // Output: 5

function slice(str, start, end){
    let newString = "";
    //begin from the starting index and add to the new string
    for(let i = start; i < end; i++){
        newString += str[i];
    }
    return newString;
}
console.log(slice(string, 0, 2)); // Output: pi

function charAt(str, index){
    //get the character at this index
    return str[index];
}
console.log(charAt(string, 2)); // Output: z

function concat(str, ...args){
    let newString = "";
    //add the first string to the new string
    for(let j = 0; j < str.length; j++){
       newString += str[j];
    }
    //add the remaining argument to the new string
    for(let i = 0; i < args.length; i++){
        newString += args[i];
    }
    return newString; 
}
console.log(concat(string, " ", "is my favorite")); // Output: pizza is my favorite

function replace(str1, value, newValue) {
    let newString = "";
    let replace = false;
    //replacing the value
    for(let i = 0; i < length(str1); i++){
        //only running if the string has the value and replace has not been done
        if(str1[i] === value && !replace) {
            newString += newValue;
            replace = true;
        } else {
            newString += str1[i];
        }
    }
    //add the remaining part to new string
    for(let i = length(newString); i < length(str1); i++){
        newString += str1[i];
    }
    return newString;
}
console.log(replace("pizza", "z", "$")); // Output: pi$za

function replaceAll(str1, value, newValue) {
    let newString = "";
    //replace all the matching character
    for(let i = 0; i < length(str1); i++){
        if(str1[i] === value) newString += newValue;
        else newString += str1[i];
    }
    return newString;
}
console.log(replaceAll("pizza", "z", "$")); // Output: pi$$a