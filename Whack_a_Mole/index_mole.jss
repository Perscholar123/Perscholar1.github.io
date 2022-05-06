

// select the all the squares 
const circles = document.querySelectorAll('.circle')

// select the mole
const mole = document.querySelector('.mole')

// select time
const timeLeft = document.querySelector('#time')
// console.log(timeLeft)
// select score
const score = document.querySelector('#score')

// storing result
// let scoreResult = 0
let result= 0

// declaring hit position
let hitPosition

let gameTimer = 30
// Declaring current Time as 30
let currentTime = gameTimer

// Declare timerID as null so that each time interval is cleared
let timerId = null

// select play and stop button
const play = document.querySelector('.button #start');
const stop = document.querySelector('.button #stop');

// declare result of player
let playRes1 
let playRes2
var name
let res

// select the players
const p1=document.querySelector('.currentPlayer')
const p2=document.querySelector('#p2')


   
const startGame = play.addEventListener("click", ()=>{ 
     let name = prompt('Enter your name: ')
     if(name){
         alert(`Welcome!!!! ${name} ---start your game by clicking the moles and earn your score!!!`)
     
             // moving mole randomly in all circle
        function randomCircle(){
             circles.forEach(circle => {
              circle.classList.remove('mole')
             })
             // calculate array of circle randomly
              let randomCircle = circles[Math.floor(Math.random() * 9)]
              // retrieve the list of circle and add mole to the circle
              randomCircle.classList.add('mole')
             // for each id random circle store the hit position 
             hitPosition = randomCircle.id
         }

             //for each hit of mole increase the score 
         circles.forEach(circle => {
                 circle.addEventListener('mousedown', ()=>{
                     if (circle.id == hitPosition){
                          result++       
                        //  console.log(result)
                         // replaces the  current value in the element
                      score.textContent= result
                        //   res=Number(score.textContent)
                         hitPosition = null

                     }
                 })
             })

          // To display mole randomly based on time interval 
          function moveMole(){ 
                timerId = setInterval(randomCircle,1000)
           }
         // call the function
          moveMole()

     // to calculate the counter and stop timer from moving further from the set-interval is over
      function countDown(){
                 /*reduce the counter */ /*replace the current value of timer */
                 timeLeft.textContent = --currentTime
                // --currentTime
                //  console.log(currentTime)      
            if(currentTime <= 0) {  
                clearInterval(countDownTimerId)
                clearInterval(timerId)
            //    alert(`GAME OVER! ${name} YOUR FINAL SCORE IS: ${result}`)
            //    console.log(p1.classList)
               //display the result and add the current player class to next player
                if(p1.classList.contains('currentPlayer')) {
                    // console.log("hi im player1")
                    p1.textContent=result
                    playRes1= Number(p1.textContent)
                    alert(`GAME OVER! ${name} YOUR FINAL SCORE IS: ${playRes1}`)

                    // console.log(Number(p1.textContent))
                    p1.classList.remove('currentPlayer')
                    p2.classList.add('currentPlayer')
                    result=0
                    score.textContent=result
                }
                else{
                    // console.log("hi im player2")
                    p2.textContent=result
                    playRes2= Number(p2.textContent)
                    score.textContent = playRes2
                    alert(`GAME OVER! ${name} YOUR FINAL SCORE IS: ${playRes2}`)
                    // console.log(Number(p2.textContent))
                    p2.classList.remove('currentPlayer')
                    p1.classList.add('currentPlayer')
                }
                 currentTime = gameTimer
                 //    return result;
            }
            console.log(playRes1)
            console.log(playRes2)
            if(playRes1 && playRes2)
            {   
                if(playRes1 < playRes2)
                   {
                    alert(`Player2 won the game!!! `)
                   }
                 else if(playRes2 < playRes1) {
                    alert(`Player1 won the game!!! `)
                 } 
                 else {
                    alert(`Both the players have equal scores!!!`)
                   }
            //  let maxScore = Math.max(playRes1, playRes2)
            //     console.log(maxScore)
            // alert(`${maxScore} is the winner!!`)
                 
            }
           
     }
     let countDownTimerId = setInterval(countDown,1000)
        
   } 
      else{
          alert("Input name to play the game!!!!")
        }
})
         const stopGame = stop.addEventListener("click", ()=>{
           alert("Please continue our game")
            })
            // return name;
  


        //    let player1
        //    let player2
        //    console.log(playRes1)
        //    console.log(playRes2)
        //    let playCompare=[player1,player2] 
        //         playCompare.forEach(startGame => {
        //         console.log("loop")
        //         console.log(Math.max(playRes1, playRes2))
        //     // let maxScore = Math.max(playRes1, playRes2)
        //     // console.log(maxScore)
        //     // alert(`${maxScore} is the winner!!`)
        //     })
          
 








//   function player()=>(new playGame(name,result){
//    playerName = this.name 
//     playerResult= this.result
//  }
// player()
//  console.log(playGame)


// let player1 // let player2 // let playCompare=[player1,player2]
// playCompare.forEach(startGame => {
    // console.log("loop")
    // console.log(Math.max(player1,player2))
// let maxScore = Math.max(player1,player2)
// console.log(maxScore)
// alert(`${maxScore} is the winner!!`)
// })
 //    if(p1.textContent > p2.textContent)
 //    {
 //     alert(`Player1 won the game!!! `)
 //  }
 //  else if(p2.textContent > p1.textContent){
 //        alert(`Player2 won the game!!! `)
 //   }
 //  else{
 //    alert(`Both the players have equal scores!!!`)
 //  }

    
// playCompare.forEach(playCompare, startGame => {
//     console.log("loop")
//     let name = prompt('Hello, Player enter your name: ')

// })
  //  compare the results of player
            // let maxScore = Math.max(player1,player2)
            // alert(`${maxScore} is the winner!!`) 
// calling function for 2 players and display max score
// const player1 = startGame
// console.log(player1)
// const player2 = startGame
// console.log(player2)

// let maxScore = Math.max(player1,player2)
// console.log(maxScore)
// alert(`${maxScore} is the winner!!`)


//     if(p1.textContent > p2.textContent)
//     {
//      alert(`Player1 won the game!!! `)
//   }
//   else if(p2.textContent > p1.textContent){
//         alert(`Player2 won the game!!! `)
//    }
//   else{
//     alert(`Both the players have equal scores!!!`)
//   }

// console.log(Math.max(player1,player2))
// let maxScore = playCompare[Math.max(Number(player1),Number(player2))]
// console.log(playCompare[Math.max(Number(player1),Number(player2))])
// alert(`${maxScore} is the winner!!`)
 
