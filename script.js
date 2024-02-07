const submitEvent = document.getElementById("submitEvent");
submitEvent.addEventListener("submit", function palindrom(){ 
    const word=document.getElementById("word").value;
    wordToCheck=word.toLowerCase();
    if (wordToCheck === wordToCheck.split("").reverse().join("")) {
        alert(word+" jest palindromem");
    }
    else {
        alert(word+" nie jest palindromem."); 
    }
    });
