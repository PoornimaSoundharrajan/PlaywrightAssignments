

let gendertype = `male` // Global Variable

function printGender(){
    let color=`brown`
    if(gendertype ===`female`){
        var age=30
        let color=`pink`
        console.log("Color inside if block:",color);
    }
    console.log("Age outside if block:", age);
    console.log("Color outside if block:", color);
}
printGender();

console.log(gendertype);
console.log("GendeType:", gendertype);
    