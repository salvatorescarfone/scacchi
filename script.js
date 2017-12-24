var pi='',pf;
function select(x,y){
  //Arena arena = new Arena("arena");
  alert(x.toString()+","+y.toString());
  if(pi="")pi = document.getElementById(x.toString()+y.toString());
  pf = document.getElementById(x.toString()+y.toString());
  pf.innerHTML = 1;
}

var table = document.getElementById("arena");


for(let i=0;i<table.rows.length-1;i++){
  for(let j=0;j<table.cells.length-1;i++){
    table.rows[i].cells[j].innerHTML = "swag";
  }
}
