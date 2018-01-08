var sel = false;
var firstCell;
var ch;

var url = window.location.href; //"file:///E:/1.Scacchi/code/index.html
ch = url.search("code/")+5;
url = url.substr(0,ch)+"img/";

function select(x,y){
  //alert(x.toString()+","+y.toString());

  if(!sel){
    //cella selezionata, aspettare secondo click
    firstCell = document.getElementById(x.toString()+y.toString()).firstChild;

    if(firstCell.src != url+"vuota.png")
      sel = true;
  }
  else{
    //Secondo click, spostare la pedina
    sel = false;
    document.getElementById(x.toString()+y.toString()).firstChild.src = firstCell.src;
    firstCell.src = "img/vuota.png";
  }

}
