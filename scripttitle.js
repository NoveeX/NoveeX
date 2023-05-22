var q = 0;


function changetile(){
    if(q == 0){
        document.title = "\\ NoveeX \\"
        q++;
    }
    else if(q == 1){
        document.title = "| NoveeX |"
        q++;
    }
    else if(q == 2){
        document.title = "/ NoveeX /"
        q++;
    }
    else if(q == 3){
        document.title = "- NoveeX -"
        q++;
    }
    else if(q == 4){
        document.title = "\\ NoveeX \\"
        q++;
    }
    else if(q == 5){
        document.title = "/ NoveeX /"
        q++;
    }
    else if(q == 6){
        document.title = "- NoveeX -"
        q = 0;
    }
    else{
        q = 0;
    }
    setTimeout(changetile, 500);
}
changetile()