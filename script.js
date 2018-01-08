var sel = false;
var firstCell;

function select(x,y){
  //alert(x.toString()+","+y.toString());

  if(!sel){
    //cella selezionata, aspettare secondo click
    firstCell = document.getElementById(x.toString()+y.toString()).firstChild;
    //Cella selezionata solo se non è vuota
    if(firstCell.src != "file:///E:/1.Scacchi/code/img/vuota.png")
      sel = true;
  }
  else{
    //Secondo click, spostare la pedina
    sel = false;
    document.getElementById(x.toString()+y.toString()).firstChild.src = firstCell.src;
    firstCell.src = "img/vuota.png";
  }

}
