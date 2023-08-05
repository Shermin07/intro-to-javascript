function sides(side1, side2, side3){

    const s = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
    
    return area;
}
const result = sides(10, 10, 10);
console.log(result);