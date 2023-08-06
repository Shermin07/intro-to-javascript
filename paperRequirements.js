// paperRequirements:

function bookPageQuantity(book1, book2, book3){
    const book1Page = 100;
    const book2Page = 200;
    const book3Page = 300;
    const totalBook1Page = book1Page * book1;
    const totalBook2Page = book2Page * book2;
    const totalBook3Page = book3Page * book3;

    const totalPge = totalBook1Page + totalBook2Page + totalBook3Page;

    return totalPge;

}
const result = bookPageQuantity(3, 4, 5);
console.log(result);