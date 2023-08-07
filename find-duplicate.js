const arr = ["s", "e", "r", "g", "s", "r", "m", "h", "b", "d", "o", "g", "m", "k"];

function removeDuplicate(names){
    if( !Array.isArray){
        return "please provide an array"
    }
    else{
        let duplicateNames = [];
        for(let i = 0; i < names.length; i++ ){
          const name = names[i];
          if(duplicateNames.includes(name) === false){
            duplicateNames.push(name)
          }

        
        }
        return duplicateNames;



    }

}
const result = removeDuplicate(arr);
console.log(result);