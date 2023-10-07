

console.log('madam, 141, Sunday, mom, listen, dad');
function isPalindrome(str){
    // Change the string into lower case and remove  all non-alphanumeric characters
       var str = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var count = 0;
    // Check whether the string is empty or not
        if(str==="") {
            console.log("Nothing found!");
            return false;
        }
    // Check if the length of the string is even or odd 
        if ((str.length) % 2 === 0) {
            count = (str.length) / 2;
        } else {
    // If the length of the string is 1 then it becomes a palindrome
            if (str.length === 1) {
                console.log(" is a palindrome.");
                return true;
            } else {
    // If the length of the string is odd ignore middle character
                count = (str.length - 1) / 2;
            }
        }
    // Loop through to check the first character to the last character and then move next
        for (var x = 0; x < count; x++) {
    // Compare characters and drop them if they do not match 
            if (str[x] != str.slice(-1-x)[0]) {
                console.log("Is not a palindrome.");
                return false;
            }
        }
        console.log("Is a palindrome.");
        return true;
    }
    isPalindrome('madam');
    isPalindrome('141');
    isPalindrome('Sunday');
    isPalindrome('mom');
    isPalindrome('listen');
    isPalindrome('dad');  