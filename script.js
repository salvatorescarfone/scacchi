var sel = false;
var firstCell, secondCell;

//controllo dinamico immagine

function getUrl(x){
  var ch = x.search("code/")+5;
  return (x.substr(0,ch)+"img/");
}

var url = getUrl(window.location.href); //"file:///E:/1.Scacchi/code/index.html


var Piece = function(){



}

function select(x,y){

  if(!sel){
    //cella selezionata, aspettare secondo click
    firstCell = document.getElementById(x.toString()+y.toString()).firstChild;

    if(firstCell.src != url+"vuota.png"){
      sel = true;
      //document.getElementById(x.toString()+y.toString()).style.backgroundColor = "yellow";
    }

  }
  else{
    //Secondo click, spostare la pedina
    sel = false;
    secondCell= document.getElementById(x.toString()+y.toString()).firstChild;


    if(firstCell.src.search("b.png")!=-1){//Se la prima cella è bianca
      if(secondCell.src.search("b.png")==-1){// e la seconda è nera
        secondCell.src = firstCell.src;
        firstCell.src = "img/vuota.png";
      }
    }
    else{
      //visto che la prima è nera
      if(secondCell.src.search("n.png")==-1){// e la seconda è bianca
        secondCell.src = firstCell.src;
        firstCell.src = "img/vuota.png";
      }
    }

  }

}
