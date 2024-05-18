function deleteInvalids(array){
    const inputArray =[];

    if (Array.isArray(array) === false) {
        return "Please Insert An Array Instead";
      }

    for (let arry of array) {
        if (typeof arry === "number" && Number.isNaN(arry) === false) {
            inputArray.push(arry);
        }
      }

      return inputArray;
}

console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] ));
console.log(deleteInvalids(["1", { num: 2 }, NaN]));