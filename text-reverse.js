function textReversed(text){

    for (let i = 0; i < text.length; i++){
        const line1 = text[i];
        console.log(line1);
    }
     return ""
}
const result = textReversed("i am a girl");
console.log(result);

//
function textReversed1(text){

    for (let i = text.length-1; i >=0; i--){
        const line = text[i];
        console.log(line);
    }
    return ""
   
}
const result1 = textReversed1("i am a girl");
console.log(result1);