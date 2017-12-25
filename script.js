var sel = false;
var firstCell;

function select(x,y){
  //alert(x.toString()+","+y.toString());

  if(!sel){
    //cella selezionata, aspettare secondo click
    sel = true;
    firstCell = document.getElementById(x.toString()+y.toString()).firstChild;//oggetto immagine contenuta nella cella
  }
  else{
    //Secondo click, spostare la pedina
    sel = false;
    document.getElementById(x.toString()+y.toString()).firstChild.src = firstCell.src;//imposta src
    firstCell.src = "img/vuota.png";//imposta immagine vuota
  }

}
