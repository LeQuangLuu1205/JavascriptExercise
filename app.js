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

 */

