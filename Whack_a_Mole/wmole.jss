

// Prompt player1 by clicking the start button


// -------------logic and function of the game
                // declaring all the variables
// select all the circles
// select the mole
// select time
// select score
// store result 
// declare the click of mole as hit position
// declare current time as 60

        //   write the functions 
// function to display and remove mole randomly in each the circle  based on timer
// function to store the value for each click and increase the score
// function to decrease the counter and stop timer further when stopped 

    //   call the functions and display in web page
// display the result of player1 and store the result
// display the result of player2 and store the result

// compare the result of both players and prompt the winner



const circles = document.querySelectorAll('.circle')
const mole = document.querySelector('.mole')
const score= document.querySelector('#score')
const timeLeft= document.querySelector('#time')
let currentTime = 60
let result=0


function randomCircle(){
   circles.forEach(circle => {
       circle.classList.remove('mole')
   })
    let randomCircle = circles[Math.floor(Math.random() * 9)]

    
}
// console.log(randomCircle)
// console.log(Math.floor(Math.random() * 9))
















function player1(){
 let player1 = prompt("Enter your name"," ");
 if(player1 !== null)
 {
     alert(`Welcome ${player1} !!  Start your game by clicking the moles!!!` )
//     play1= document.getElementById("start").innerHTML;
//    console.log("Hello" +  play1  + "Start your game!!!") 
// text= "Hello" +  player1  + "Start your game!!!"
// document.getElementById("start").innerHTML;
 }
 else{
     alert(`Please enter your name!!!`)
 }
 }

