function palindrom(){
    let word=document.getElementById("word").value;
    word_to_check=word.toLowerCase();
    let length_word=word_to_check.length;
    let sprawdz=true;
    if (length_word===0)                
        alert("Nic nie wpisałeś!");   
        else {
    for (var i=0; i<length_word; i++ ) 
        {
        if (word_to_check.charAt(i)!=word_to_check.charAt(length_word-i-1))  
            sprawdz=false;
        }
            
        if (sprawdz==true)  
            alert(word+ " jest palindromem."); 
        else 
            alert(word+" nie jest palindromem."); 
        }
        }

