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

function Piece(path,x,y){

  this.path = path;
  this.x = x;
  this.y = y;

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
  this.setType = function(){

    var z = "";
    z = this.path.replace(url,"");

    if(this.team == "b")
      z = z.replace("_b.png","");
    else
      z = z.replace("_n.png","");

    return z;
  }

  this.team = this.setTeam();
  this.type = this.setType();

  this.move = function(x2,y2){

    var mossa = false;

    /*
    alert(this.x);
    alert(this.y);
    alert(x2);
    alert(y2);
    */

    switch(this.type){

      case "pedone":
        var first = false;

        if(this.team == "b"){

          if(this.x == x2+1){
            if(this.y == y2){
              if(pezzo2.team == "v")
                mossa = true;
            }
            else
              if(pezzo2.team != "v")
                mossa = true;

          }

        }
        else{

          if(this.x == x2-1){
            if(this.y == y2){
              if(pezzo2.team == "v")
                mossa=true;
            }
            else
              if(pezzo2.team != "v")
                mossa = true;

          }

        }

        break;

      case "torre":

        break;

      case "cavallo":

        break;

      case "alfiere":

        break;

      case "regina":

        break;

      case "re":

        break;
    }

    return mossa;

  }

}

function select(x,y){

  if(!sel){
    //cella selezionata, aspettare secondo click
    firstCell = document.getElementById(x.toString()+y.toString()).firstChild;

    //Creazione primo pezzo
    pezzo1 = new Piece(firstCell.src,x,y);

    //se la pedina selezionata rispetta il turno
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
    pezzo2 = new Piece(secondCell.src,x,y);

    //controllo deselezione di una stessa pedina
    if(pezzo1.team == pezzo2.team){
      firstCell.parentElement.style.boxShadow = "";
      sel = false;
    }
  	else{

        if(pezzo1.move(x,y)){
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
}

