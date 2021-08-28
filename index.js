// Restart Game Button
var count = 2;
var restart = document.querySelector('#b');

// Grab all the squares
var squares = document.querySelectorAll("td");



// Clear Squares Function
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
      count = 2;
  }

}
restart.addEventListener('click',clearBoard)




// Create a function that will check the square marker
function changeMarker(){
    if(this.textContent === ''){
      if(count % 2 === 0)
      {
        this.textContent = 'X';
        count++;
      }
      else
      {
        this.textContent ='O';
        count++;
      }
      // console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
    if (squares[0].textContent == "X" && squares[1].textContent == "X" && squares[2].textContent == "X")
  {
    alert ("X won the game! Press restart button to play again!");   
  }
  if (squares[0].textContent == "X" && squares[3].textContent == "X" && squares[6].textContent == "X")
  {
    alert ("X won the game! Press restart button to play again!");
  }
  if (squares[0].textContent == "X" && squares[4].textContent == "X" && squares[8].textContent == "X")
  {
    alert ("X won the game! Press restart button to play again!"); 
  }
  if (squares[1].textContent == "X" && squares[4].textContent == "X" && squares[7].textContent == "X")
  {
    alert ("X won the game! Press restart button to play again!");
  }
  if (squares[2].textContent == "X" && squares[5].textContent == "X" && squares[8].textContent == "X")
  {
    alert ("X won the game! Press restart button to play again!");
  }
  if (squares[2].textContent == "X" && squares[4].textContent == "X" && squares[6].textContent == "X")
  {
    alert ("X won the game! Press restart button to play again!");
  }
  if (squares[3].textContent == "X" && squares[4].textContent == "X" && squares[5].textContent == "X")
  {
    alert ("X won the game! Press restart button to play again!");   
  }
  if (squares[3].textContent == "X" && squares[4].textContent == "X" && squares[5].textContent == "X")
  {
    alert ("X won the game! Press restart button to play again!");   
  }

  if (squares[0].textContent == "O" && squares[1].textContent == "O" && squares[2].textContent == "O")
  {
    alert ("O won the game! Press restart button to play again!");
  }
  if (squares[0].textContent == "O" && squares[3].textContent == "O" && squares[6].textContent == "O")
  {
    alert ("O won the game! Press restart button to play again!");
  }
  if (squares[0].textContent == "O" && squares[4].textContent == "O" && squares[8].textContent == "O")
  {
    alert ("O won the game! Press restart button to play again!");
  }
  if (squares[1].textContent == "O" && squares[4].textContent == "O" && squares[7].textContent == "O")
  {
    alert ("O won the game! Press restart button to play again!"); 
  }
  if (squares[2].textContent == "O" && squares[5].textContent == "O" && squares[8].textContent == "O")
  {
    alert ("O won the game! Press restart button to play again!");  
  }
  if (squares[2].textContent == "O" && squares[4].textContent == "O" && squares[6].textContent == "O")
  {
    alert ("O won the game! Press restart button to play again!");   
  }
  if (squares[3].textContent == "O" && squares[4].textContent == "O" && squares[5].textContent == "O")
  {
    alert ("O won the game! Press restart button to play again!");   
  }
  if (squares[3].textContent == "O" && squares[4].textContent == "O" && squares[5].textContent == "O")
  {
    alert ("O won the game! Press restart button to play again!");   
  }
};



// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
  
}
