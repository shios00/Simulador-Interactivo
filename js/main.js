let cancion = prompt("¿Acordes de que canción quieres saber? A,B,C,D. Si quieres salir escribir ESC");

while(cancion != "ESC"){
    switch(cancion){
        case "A":
         console.log("Los acordes son Do-Sol-Re-Sol");
         break;
    
        case "B":
            console.log("Los acordes son Sol - Re - La - Mi");
            break;
    
        case "C":
            console.log("Los acordes son Mi - Re - La - Mi");
            break;
    
        case "D":
            console.log("Los acordes son Re - Fa - Re - Mi");
            break;
            
        default:
            alert("Esa cancion no esta registrada")
            break;   
    
    }
    cancion = prompt("¿Acordes de que canción quieres saber? A,B,C,D");
}




