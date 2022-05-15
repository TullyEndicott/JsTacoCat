//get string from app page
// controller function
function getValues(){
    hideAlert(); //makes sure div id='alert' invisible on start
    let userString = document.getElementById('userString').value;
    //let revString = reverseString(userString);
    let revString = palindrome(userString);
    displayString(revString);
}

//reverse string
//logic function
/*
function reverseString(userString){
    let revString = []; //allow array functions

    for (let index = userString.length-1; index >= 0; index--) {
       revString += userString[index]; //pust into revString
        
    }
    return revString;
}
*/
// from https://stackoverflow.com/questions/46276224/how-to-remove-all-non-alphabet-characters-javascript#46276295
function palindrome(userString) {
    userString = userString.toLowerCase().replace(/[^a-z]/g, '');
    let max = userString.length - 1;
    for (let i = Math.floor(max / 2); i >= 0; i--) { //returns false on 1st mismatch
      if (userString[i] != userString[max - i]) {
        //return false;

        return userString = 'Not palindrome';
      }
    }
    //return true;
    return userString;
  }
  
  ///palindrome("inabcbani"); //true
  //palindrome("abcddcba"); //true
  //palindrome("a*#$(b)&^@%@%(*a"); //true
  //palindrome("abba"); //true
  //palindrome("abcdba"); //false

//display result and message
//View function
function displayString(revString){
    //write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    //show alert div
    document.getElementById("alert").classList.remove("invisible");
}

function hideAlert(){  //hide 'alert' div
    document.getElementById('alert').classList.add('invisible');
}

/********Inline script in app.html
 * 
 *   <script>
        document.getElementById("btnSubmit").addEventListener("click", getValue)
    </script>
    <script>
        document.getElementById("btnReset").addEventListener("click", hideAlert)
    </script>
 */