// Funtion to reverse the String
function reverseString(str) {
    let chars = str.split("");
    let reversed = "";

    for(let i= chars.length-1;i>=0;i--)
    {
        reversed += chars[i];
    }
    console.log("Reversed String:",reversed);
}

function isPalindrome(str)
{
    let reversedStr = reverseString(str)
    {
        if(str === reversedStr)
        {
            return true;
        } else {
            return false;
        }
    }
}
    let testStrings = ["madam","racecar","hello","level","javascript"];
    for (let i=0;i<testStrings.length;i++) {
        console.log("\nOriginal String:",testStrings[i]);
        console.log("Is Palindrome?:",isPalindrome(testStrings[i]));
    }


