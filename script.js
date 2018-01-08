var sel = false;
var turn = "b";
var firstCell, secondCell;

//controllo dinamico immagine
function getUrl(x){
  var ch = x.search("code/")+5;
  return (x.substr(0,ch)+"img/");
}

var url = getUrl(window.location.href); //"file:///E:/1.Scacchi/code/index.html


function Piece(path){



}

function select(x,y){

  if(!sel){
    //cella selezionata, aspettare secondo click
    firstCell = document.getElementById(x.toString()+y.toString()).firstChild;

    //se è bianca ed è il turno dei bianchi
    if(firstCell.src.search("b.png") != -1 && turn == "b"){

      if(firstCell.src != url+"vuota.png"){
        sel = true;
        turn = "n";
        firstCell.parentElement.style.boxShadow ="inset 0px -1px 19px 9px rgba(250,236,85,1)";
      }

    }//se è nera ed è il turno dei neri
    else if(firstCell.src.search("n.png") != -1 && turn == "n"){

      if(firstCell.src != url+"vuota.png"){
        sel = true;
        turn = "b";
        firstCell.parentElement.style.boxShadow ="inset 0px -1px 19px 9px rgba(250,236,85,1)";
      }

    }

  }
  else{
    //Secondo click, spostare la pedina

    secondCell= document.getElementById(x.toString()+y.toString()).firstChild;

    //controllo deselezione di una stessa pedina
    if(firstCell.src == secondCell.src){
      firstCell.parentElement.style.boxShadow = "";
      sel = false;
    }

    if(firstCell.src.search("b.png")!=-1){//Se la prima cella è bianca
      if(secondCell.src.search("b.png")==-1){// e la seconda è nera
        secondCell.src = firstCell.src;
        firstCell.src = "img/vuota.png";
        firstCell.parentElement.style.boxShadow = "";
        sel = false;
      }
    }
    else{
      //visto che la prima è nera
      if(secondCell.src.search("n.png")==-1){// e la seconda è bianca
        secondCell.src = firstCell.src;
        firstCell.src = "img/vuota.png";
        firstCell.parentElement.style.boxShadow = "";
        sel = false;
      }
    }
  }


}
