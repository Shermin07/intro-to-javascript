// length
var myName = "shermin";
const output = myName.length;
console.log(output);

// type
console.log(typeof myName);

// position
const name = "ABC D"
const result = name[0];
console.log(result);

// case
const userName = "shermin Sultana"
const userInput = "Shermin sultanA"

if(userName.toLocaleLowerCase === userInput.toLocaleLowerCase){
    console.log("valid user")
}
else {
    console.log("invalid user")
}

// search........includes:

const lyrics = "la ilaha Illalahu muhammadur rasullah, ashadu allailaha illahu waashadu anna muhammadan abduhu wa rasuluhu,la ilaha illa angta subhanaka inni kuntu minaj jawalamin, subhanallahi wabihamdihi,rabbir hamhuma kama rabba yani sagira."

const doesExists = lyrics.includes("ilaha");
console.log(doesExists);


// indexOf
const doesExists1 = lyrics.indexOf("ilaha");
console.log(doesExists1);

// toLowerCase:
const doesExists2 = lyrics.toLocaleLowerCase().indexOf("illahu".toLocaleLowerCase());
console.log(doesExists2);

//
const doesExists3 = lyrics.toLocaleLowerCase().includes("illahu".toLocaleLowerCase());
console.log(doesExists3);

// charAt:
const findChartecter = lyrics.charAt(1);
console.log(findChartecter);

//
if(lyrics.toLowerCase().indexOf("ilaha".toLowerCase()) !== -1){
    console.log("exists");

}
else{
    console.log("does not exists")
}

// startWith
const isStart = lyrics.startsWith("la ilaha");
console.log(isStart);

// ensWith
const isEnd = lyrics.endsWith("ilaha");
console.log(isEnd);

// replace:
const line = "i am a girl";
const change = line.replace("girl", "boy");
console.log(change);

// split:
const lyrics1 = "la ilaha Illalahu muhammadur rasullah. ashadu allailaha illahu waashadu anna muhammadan abduhu wa rasuluhu.la ilaha illa angta subhanaka inni kuntu minaj jawalamin. subhanallahi wabihamdihi.rabbir hamhuma kama rabba yani sagira."

// word alada korte chaile:
const wordSeparation = lyrics1.split(" ");
console.log(wordSeparation);

// . diye line break korte chaile:
const lineBreak = lyrics1.split(".");
console.log(lineBreak) ;

// latter alada korte chaile:

const wordSeparate = lyrics1.split("");
console.log(wordSeparate);

//slice:
// pizza r moto slice kore nite:: start index, koto porjonto nibo tar ag porjonto asbe ans

const portion = lyrics1.slice(8,17);
console.log(portion);

//substring:
const portion1 = lyrics1.substring(3, 10);
console.log(portion1);

// trim:
const line5 = " Hello World hi";
const output1 = line5.trim();
console.log(output1);

// trimStart:
const line6 = " Hello World ";
const output2 = line6.trimStart();
console.log(output2);

// trimEnd: same as trimStrat

//concat:

const firstLine = "i am a girl"
const secondLine = "i am jobless"

const fullLine = firstLine.concat(" ", secondLine);
console.log(fullLine);

// join:
const lines = ["i am a girl", "i want to do something", "i am jobless now"];
const fullLine2 = lines.join(".")
console.log(fullLine2);

//
