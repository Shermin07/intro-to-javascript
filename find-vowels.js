
const sentence = "i am a girl i want to My cOuntry i miss my fAmily";

function findVowel(s){
if(typeof s !== "string"){
    return "please provide a string";
}
else{
       let vowel = 0;
       let consonent = 0;
       let space = 0;
     
        for(let i = 0; i < s.length; i++){
            const v = s[i].toLowerCase();
            if ( v === "a" ||  v === "e" ||  v === "i" ||  v === "o" || v === "u" ){
                 vowel++ ;
                 
                
            }
            else if(v !== " "){ 
                 consonent++;
                    }
            else{
               space++;
            }
            
            
        }
}
return vowel;

}

const result = findVowel(sentence);
console.log(result);