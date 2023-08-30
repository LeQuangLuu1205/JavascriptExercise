function checkNumber(x,y) {
    if (x==100||y==100)
        return true;
    else 
        if ((x+y)==100)
            return true;
        else
         return false;
}
//console.log(checkNumber(10,91))

const isEqualTo100 = (a,b) => a===100 || b===100 || (a+b)==100;
//console.log(isEqualTo100(80,10))


/*
---------------------------------
EX2: Write a JavaScript program to get the extension of a filename
*/
const getFileExtension = (str) => str.slice(str.lastIndexOf(".")+1);
//console.log(getFileExtension("index.html"))

/*
EX3: Write a JavaScript program to replace every character in a given string 
with the character following it in the alphabet
 */
function replaceCharacter(str) {
    var len1 = str.length;
    var str2 = "";
    for(let i=0; i < len1; i++) {
        str2 = str2.concat(String.fromCharCode(str.charCodeAt(i)+1));
    }
    return str2;
}

const moveCharsForward = (str) => 
        str
        .split("")
        .map(char => String.fromCharCode(char.charCodeAt(0)+1))
        .join("");
console.log(moveCharsForward("modelero"));        

