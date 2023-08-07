const myInfo = {
    name : "shermin",
    age : 30,
    address : "Finland",
    occupation : "none"

}

function information(info){

    const sentence = "My Name" +" " + info.name + " My age " + info.age + " My address " + info.address + " I am doing " + info.occupation;

    return sentence
}
const result = information(myInfo);
console.log(result);