const names = ["abul", "shahin", "babul", "limon", "abul", "shahin", "golam", "sajid", "alia", "limon", "bulbul", "sajid", "limon", "bulbul"];

function removeDuplivateNames(arrNames){
    let uniqueNames = [];
for( let i = 0; i < arrNames.length; i++){
    
    const newNames = arrNames[i];
    if(uniqueNames.includes(newNames) === false){
        uniqueNames.push(newNames);
    }
}
return uniqueNames;
}
const result = removeDuplivateNames(names);
console.log(result);

//again

const names1 = ["shumi", "rima", "tasnim", "juma", "lipa", "moonni", "mou", "shima", "rima", "shumi", "tasnim", "juma", "lipa"];

function removeDuplicate(names){
     let specialNames = [];
    for(let i = 0; i < names.length; i++){
        const allNames = names[i];
        if(specialNames.includes(allNames) === false)
          specialNames.push(allNames);
    }
    return specialNames;
}
const output = removeDuplicate(names1);
console.log(output);