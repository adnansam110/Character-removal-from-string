var str1 = prompt("Enter string");
if (str1.length>=3)
{
    var lastThreeChar = str1.substring(str1.length-3,str1.length);
    var str2 = lastThreeChar + str1 + lastThreeChar;
    document.write(str2);
}
