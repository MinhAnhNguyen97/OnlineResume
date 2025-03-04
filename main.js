console.log("Hello, world");
console.log("I am " + 25 + " years old.");

function getFullName(lastname, firstname) {
     return firstname + " " + lastname;
}
let fullname = getFullName("Minh Anh", "Nguyen")
console.log(fullname)


function getMean(arr)  {
    let total = 0;
    for(let i = 0; i<arr.length;i++) {
        total += arr[i];
    }
    return total/arr.length;
}

    const a = [1,2,3]
    let Mean = getMean(a)
console.log(Mean)


function getStairs(num) {
    let spaces = "";
    for (let i = 0; i < num; i++) {
        console.log( spaces + i)
        spaces += " ";
    }
}
    const num = 7
    let Stairs = getStairs(num)
console.log(Stairs)
