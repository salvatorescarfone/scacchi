var sel = false;
var turn = "b";
var firstCell, secondCell;
var pezzo1,pezzo2;

//controllo dinamico immagine
function getUrl(x){
  var ch = x.search("code/")+5;
  return (x.substr(0,ch)+"img/");
}

var url = getUrl(window.location.href); //"file:///E:/1.Scacchi/code/index.html


function Piece(path){

  this.path = path;

  this.setType = function(){

    var x = this.path.replace(url,"");

    if(this.team == "b")
      x.replace("_b.png","");
    else
      x.replace("_n.png","");

    return x;
  }
  this.setTeam = function(){
    if(this.path.search("b.png") != -1)
      return "b";
    else{
      if(this.path.search("n.png") != -1)
        return "n";
      else
        return "v";
    }
  }

  this.type = this.setType();
  this.team = this.setTeam();


  //alert(this.type + " " + this.team);

  this.move = function(){

    switch(this.type){

    }

  }

}

function select(x,y){

  if(!sel){
    //cella selezionata, aspettare secondo click
    firstCell = document.getElementById(x.toString()+y.toString()).firstChild;

    //Creazione primo pezzo
    pezzo1 = new Piece(firstCell.src);

    //se è bianca ed è il turno dei bianchi
    if(pezzo1.team == turn){
      if(pezzo1.team != "v"){
        sel = true;
        firstCell.parentElement.style.boxShadow ="inset 0px -1px 19px 9px rgba(250,236,85,1)";
      }

    }

  }
  else{
    //Secondo click, spostare la pedina

    secondCell= document.getElementById(x.toString()+y.toString()).firstChild;
    pezzo2 = new Piece(secondCell.src);

    //controllo deselezione di una stessa pedina
    if(pezzo1.team == pezzo2.team){
      firstCell.parentElement.style.boxShadow = "";
      sel = false;
    }
  	else{

  			secondCell.src = firstCell.src;
  			firstCell.src = "img/vuota.png";
  			firstCell.parentElement.style.boxShadow = "";
  			sel = false;

  			if (pezzo1.team == "b"){
    			turn = "n";
    			document.getElementById("turno").innerHTML = "Turno dei neri.";
  			}
        else{
    			turn = "b";
    			document.getElementById("turno").innerHTML = "Turno dei bianchi.";
  			}
  		}
	}
}
