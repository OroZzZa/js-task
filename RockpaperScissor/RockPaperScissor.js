
let me = JSON.parse (localStorage.getItem('me'))||{
          Win:0,
          Draw:0,
          Lose:0
};
function reset (){
          me.Win=0;
          me.Lose=0;
          me.Draw=0;
          document.querySelector('.FinalResult').innerHTML =`Win:${me.Win}, Lose: ${me.Lose} , Draw: ${me.Draw}  `
}
function ran (){
          let num =Math.random();
          if (num >=0 && num < 1/3){
                    return "Rock";

          }else if (num >=1/3 && num < 2/3){
                    return "Paper";
          }
          else if (num >=2/3 && num < 1){
                    return "Scissor";
          }
}
document.body.addEventListener('keydown' , ()=> {
          console.log('')
})
function random ( str){
          
          let num =Math.random();
          let computerMove ="";
          if (num >=0 && num < 1/3){
                    computerMove ="Rock";

          }else if (num >=1/3 && num < 2/3){
                    computerMove= "Paper";
          }
          else if (num >=2/3 && num < 1){
                    computerMove = "Scissor";
          }

          if (str === "Rock"){
                    if (computerMove === "Paper"){console.log("Lose"); me.Lose++;
                              document.querySelector('.result').innerHTML= 'Lose';
                     }
                    else if (computerMove === "Rock"){console.log("Draw"); me.Draw++;
                              document.querySelector('.result').innerHTML= 'Draw';         

                    }
                    else if (computerMove === "Scissor"){console.log ("Win"); me.Win++;
                              document.querySelector('.result').innerHTML= 'Win';

                    }
                    else {console.log("Error");
                    
                    }
          }

          if (str === "Paper"){
                    if (computerMove === "Paper"){console.log("Draw");  me.Draw++;
                              document.querySelector('.result').innerHTML= 'Draw';

                    }
                    else if (computerMove === "Rock"){console.log("Win"); me.Win++;
                              document.querySelector('.result').innerHTML= 'Win';

                    }
                    else if (computerMove === "Scissor"){console.log ("Lose");me.Lose++;
                              document.querySelector('.result').innerHTML= 'Lose';

                    }
                    else {console.log("Error");}
                    // alert (`your score is Win:${me.Win}, Lose: ${me.Lose} , Draw: ${me.Draw} and the computer picked ${computerMove}` );
          }

          if (str === "Scissor"){
                    if (computerMove === "Paper"){console.log("Win"); me.Win++;
                              document.querySelector('.result').innerHTML= 'Win';

                    }
                    else if (computerMove === "Rock"){console.log("Lose");me.Lose++;
                              document.querySelector('.result').innerHTML= 'Lose';

                    }
                    else if (computerMove === "Scissor"){console.log ("Draw");  me.Draw++;
                              document.querySelector('.result').innerHTML= 'Draw';

                    }
                    else {console.log("Error");}
          }
          document.querySelector('.FinalResult').innerHTML =`Win:${me.Win}, Lose: ${me.Lose} , Draw: ${me.Draw} and the computer picked ${computerMove}`
          localStorage.setItem('me',JSON.stringify(me));
}
let isPlaying =false;
let intervalID;
function autoPlay(){
          if (!isPlaying){
                    intervalID= setInterval( ()=> {

                              random(ran() );
                    },1000);
                    isPlaying=true;
          }else {
                    clearInterval(intervalID);
                    isPlaying=false;
          }
         
}