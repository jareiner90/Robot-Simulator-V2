document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // [x] create listener so listen for arrow keys being pressed 
    // [x] push the string of "direction" into an array that can get called with a later function 

  // [] render the list of moves to the 'moves-container'
    // loop over each element of the moveArray and append the li to the move-container
  
  // create an event listener for the "move" button to be clicked

  // When move is clicked, loop over the array again 
    // "pop" off each move string update the move list
    // apply the poped off move to the board 


  const movesContainer = document.getElementById('moves-container')
  let moveArray = []
  const moveButton = document.getElementById('move-button')

  // function renderList(moveArray) {
  //   moveArray.forEach(move => {
  //     console.log(`${move}`)
  //   })
  // }

  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 37:
        li = document.createElement('li')
        listedMove = movesContainer.appendChild(li)
        listedMove.innerHTML = 'left'
        moveArray.push('left')
        // renderList(moveArray)

        break;

      case 38: 
        li = document.createElement('li')
        listedMove = movesContainer.appendChild(li)
        listedMove.innerHTML = 'up'
        moveArray.push('up')
        // renderList(moveArray)

      break;

      case 39: 
        li = document.createElement('li')
        listedMove = movesContainer.appendChild(li)
        listedMove.innerHTML = 'right'
        moveArray.push('right')
        // renderList(moveArray)

      break;

      case 40:
        li = document.createElement('li')
        listedMove = movesContainer.appendChild(li)
        listedMove.innerHTML = 'down'
        moveArray.push('down')
        // renderList(moveArray)

      break;




      default:
        break;
    }
  }
  

  moveButton.addEventListener('click', function (event) {
    event = event.target 
    moveArray.forEach(element => {
      move(`${element}`)
    })
  })

  

})
