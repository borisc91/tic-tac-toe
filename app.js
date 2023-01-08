const igra = document.querySelectorAll('button')

let koIgra = true;
var kraj = false;

function brisanje () {

}

igra.forEach(button => {
    
    button.addEventListener('click', function xe() {

        
        
    if(!kraj) {
        
        if(koIgra === true){
            
            button.innerText = 'X'
            button.removeEventListener('click', xe)
            koIgra = !koIgra;
        }

       
    
        else {
            button.innerText = 'O'
            button.removeEventListener('click', xe)
            koIgra = !koIgra;
        }
    }
        
        console.log(kraj)
        
        
       if(rezultat()){
           if(koIgra === false){
               alert("pobedio je x")
           } else {
               alert("pobedio je o")
           }
           
        return;
       }
        
    
        button.style.fontSize = "20px"
       
        
        
    })
    
    
});

console.log(true)




function rezultat() {
    if((igra[0].innerText === igra[1].innerText && igra[1].innerText === igra[2].innerText && igra[0].innerText !== "Klikni" ) ||  
     (igra[0].innerText === igra[4].innerText && igra[4].innerText=== igra[8].innerText && igra[8].innerText !== "Klikni") ||
     (igra[0].innerText === igra[3].innerText && igra[3].innerText=== igra[6].innerText && igra[6].innerText !== "Klikni")){
        console.log("pobeda")
       
        kraj = true;
        return kraj;
                    
    }
    
}
   

