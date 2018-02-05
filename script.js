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

    switch(this.type){

      case "pedone":
        var first = false;
        var dx = 1;

        if(this.team == "b"){

          if(this.x == 6 && this.x-x2 == 2 && y2 == this.y){
            var pezzox = new Piece(document.getElementById((this.x-1).toString()+this.y.toString()).firstChild.src,this.x-1,this.y);
            var pezzox2 = new Piece(document.getElementById((this.x-2).toString()+this.y.toString()).firstChild.src,this.x-2,this.y);
            if(pezzox.team == "v" && pezzox2.team == "v"){
              mossa = true;
              dx = 2;
            }
          }
          else{

            if(this.x == x2+dx){
              if(this.y == y2){
                if(pezzo2.team == "v")
                  mossa = true;
              }
              else
                if(pezzo2.team != "v")
                  mossa = true;

            }

          }

        }
        else{

          if(this.x == 1 && x2-this.x == 2 && y2 == this.y){
            var pezzox = new Piece(document.getElementById((this.x+1).toString()+this.y.toString()).firstChild.src,this.x+1,this.y);
            var pezzox2 = new Piece(document.getElementById((this.x+2).toString()+this.y.toString()).firstChild.src,this.x+2,this.y);
            if(pezzox.team == "v" && pezzox2.team == "v"){
              mossa = true;
              dx = 2;
            }
          }
          else{

            if(this.x == x2-dx){
              if(this.y == y2){
                if(pezzo2.team == "v")
                  mossa=true;
              }
              else
                if(pezzo2.team != "v")
                  mossa = true;
            }
          }
        }

        break;

      case "torre":

        var fl = true;

        //movimento verticale
        if(this.y == y2){

          if(this.x > x2){

            for(let i=this.x-1;i>x2;i--){
              var pezzox = new Piece(document.getElementById(i.toString()+y2.toString()).firstChild.src,i,y2);
              if(pezzox.team != "v")
                fl = false;
            }

          }
          else{
            for(let i=this.x+1;i<x2;i++){
              var pezzox = new Piece(document.getElementById(i.toString()+y2.toString()).firstChild.src,i,y2);
              if(pezzox.team != "v")
                fl = false;
            }

          }

          mossa = fl;

        }

        //movimento orizzontale
        if(this.x == x2){

          if(this.y < y2){
            for(let i=this.y+1;i<y2;i++){
              var pezzox = new Piece(document.getElementById(x2.toString()+i.toString()).firstChild.src,x2,i);
              if(pezzox.team != "v")
                fl = false;
            }

          }
          else{
            for(let i=this.y-1;i>y2;i--){
              var pezzox = new Piece(document.getElementById(x2.toString()+i.toString()).firstChild.src,x2,i);
              if(pezzox.team != "v")
                fl = false;
            }

          }

          mossa = fl;

        }

        break;

      case "cavallo":

        if((Math.abs(x2-this.x) == 2  && Math.abs(y2-this.y) == 1) || Math.abs(y2-this.y) == 2 && Math.abs(x2-this.x) == 1)
          mossa = true;
        break;

      case "alfiere":

        var fl = true;

        if(Math.abs(this.x - x2) == Math.abs(this.y - y2)){

          if(x2<this.x){//su
            if(y2>this.y){//dx

              //alert("up|dx");

              for(let i=this.x-1, j=this.y+1; i>x2, j<y2; i--, j++){
                  var pezzox = new Piece(document.getElementById(i.toString()+j.toString()).firstChild.src,i,j);
                  if(pezzox.team != "v")
                    fl = false;
              }

            }
            else{//sx

              for(let i=this.x-1, j=this.y-1; i>x2, j>y2; i--, j--){
                  var pezzox = new Piece(document.getElementById(i.toString()+j.toString()).firstChild.src,i,j);
                  if(pezzox.team != "v")
                    fl = false;
              }

            }

            mossa = fl;
          }
          else{//giu
            if(y2>this.y){//dx


              for(let i=this.x+1, j=this.y+1; i<x2, j<y2; i++, j++){
                  var pezzox = new Piece(document.getElementById(i.toString()+j.toString()).firstChild.src,i,j);
                  if(pezzox.team != "v")
                    fl = false;
              }

            }
            else{//sx

              for(let i=this.x+1, j=this.y-1; i<x2, j>y2; i++, j--){
                  var pezzox = new Piece(document.getElementById(i.toString()+j.toString()).firstChild.src,i,j);
                  if(pezzox.team != "v")
                    fl = false;
              }

            }

            mossa = fl;
          }


        }


        break;

      case "regina":
        var fl = true;

        //movimento verticale
        if(this.y == y2){

          if(this.x > x2){

            for(let i=this.x-1;i>x2;i--){
              var pezzox = new Piece(document.getElementById(i.toString()+y2.toString()).firstChild.src,i,y2);
              if(pezzox.team != "v")
                fl = false;
            }

          }
          else{
            for(let i=this.x+1;i<x2;i++){
              var pezzox = new Piece(document.getElementById(i.toString()+y2.toString()).firstChild.src,i,y2);
              if(pezzox.team != "v")
                fl = false;
            }

          }

          mossa = fl;

        }

        //movimento orizzontale
        if(this.x == x2){

          if(this.y < y2){
            for(let i=this.y+1;i<y2;i++){
              var pezzox = new Piece(document.getElementById(x2.toString()+i.toString()).firstChild.src,x2,i);
              if(pezzox.team != "v")
                fl = false;
            }

          }
          else{
            for(let i=this.y-1;i>y2;i--){
              var pezzox = new Piece(document.getElementById(x2.toString()+i.toString()).firstChild.src,x2,i);
              if(pezzox.team != "v")
                fl = false;
            }

          }

          mossa = fl;

        }


        if(Math.abs(this.x - x2) == Math.abs(this.y - y2)){

          if(x2<this.x){//su
            if(y2>this.y){//dx

              //alert("up|dx");

              for(let i=this.x-1, j=this.y+1; i>x2, j<y2; i--, j++){
                  var pezzox = new Piece(document.getElementById(i.toString()+j.toString()).firstChild.src,i,j);
                  if(pezzox.team != "v")
                    fl = false;
              }

            }
            else{//sx

              for(let i=this.x-1, j=this.y-1; i>x2, j>y2; i--, j--){
                  var pezzox = new Piece(document.getElementById(i.toString()+j.toString()).firstChild.src,i,j);
                  if(pezzox.team != "v")
                    fl = false;
              }

            }

            mossa = fl;
          }
          else{//giu
            if(y2>this.y){//dx


              for(let i=this.x+1, j=this.y+1; i<x2, j<y2; i++, j++){
                  var pezzox = new Piece(document.getElementById(i.toString()+j.toString()).firstChild.src,i,j);
                  if(pezzox.team != "v")
                    fl = false;
              }

            }
            else{//sx

              for(let i=this.x+1, j=this.y-1; i<x2, j>y2; i++, j--){
                  var pezzox = new Piece(document.getElementById(i.toString()+j.toString()).firstChild.src,i,j);
                  if(pezzox.team != "v")
                    fl = false;
              }

            }

            mossa = fl;
          }


        }

        break;

      case "re":

        if(Math.abs(this.x-x2)<2 && Math.abs(this.y-y2)<2)
          mossa = true;

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

