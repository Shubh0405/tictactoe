
var winnerList = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var activeplayer,player1,player2;
startbtn();


function arrayCheck(arr1,arr2){
  for(j=0;j<arr1.length;j++){
    if(arr2.indexOf(arr1[j])===-1){
      return false;
    }
  }
  return true;
}

function resultCheck(arr){
  for(i=0;i<winnerList.length;i++){
    if(arrayCheck(winnerList[i],arr)===true){
      return true;
    }
  }
  return false;
}

function tieCheck(){
  for(i=0;i<9;i++){
    var box = document.getElementById('box-' + i);
    if(box.textContent===""){
      return false;
    }
  }
  return true;
}


function winnerCheck(){
  if(resultCheck(player1)===true){
    document.getElementById('rslt_show').innerHTML = "PLAYER 1 HAVE WON THE GAME. PRESS RESTART BUTTON TO PLAY AGAIN.";
  }else if(resultCheck(player2)===true){
    document.getElementById('rslt_show').innerHTML = "PLAYER 2 HAVE WON THE GAME. PRESS RESTART BUTTON TO PLAY AGAIN.";
  }else{
    if(tieCheck()===true){
      document.getElementById('rslt_show').innerHTML = "IT'S AN TIE. PRESS RESTART BUTTON TO PLAY AGAIN. ";
    }else{
    document.getElementById('rslt_show').innerHTML = "PLAYER" + activeplayer + "'S TURN";
    }
  }
}

function changeContent(){
  if(this.textContent===""){
    if(activeplayer===1){
      this.textContent="X";
      var num = this.id.slice(-1);
      player1[player1.length] = parseInt(num);
      activeplayer=2;
    }else{
      this.textContent="O";
      var num = this.id.slice(-1);
      player2[player2.length] = parseInt(num);
      activeplayer=1;
    }
  }
  console.log(player1);
  console.log(player2);
}

for(i=0;i<9;i++){
  var box = document.getElementById('box-'+i);
  box.addEventListener('click',changeContent);
  box.addEventListener('click',winnerCheck);
}


function startbtn(){
  activeplayer = 1;
  player1 = [];
  player2 = [];

  for(i=0;i<9;i++){
    var bxct = document.getElementById('box-'+i);
    bxct.textContent = "";
  }

 document.getElementById('rslt_show').innerHTML = "LET'S PLAY.PLAYER 1'S TURN";
}

var restartbtn = document.getElementById('btn_restart');
restartbtn.addEventListener('click',startbtn);
