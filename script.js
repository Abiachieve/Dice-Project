    let player1Score = 0;
    let player2Score = 0;
    let currentPlayer = 1;

    function rollDice(player) {
      const dice = document.getElementById('dice');
      const diceValue = Math.floor(Math.random() * 6) +1;
      dice.style.backgroundImage = `url('dice${diceValue}.png')`;
      

      if (player === 1) 
      {
        player1Score += diceValue;
        document.getElementById('player1Score').textContent = player1Score;
        if (player1Score >= 30) 
        {
          alert('Player 1 wins!');
          resetGame();
        } 
        else 
        {
          currentPlayer = 2;
          document.getElementById('player1Button').disabled = true;
          document.getElementById('player2Button').disabled = false;
        }

      } 
      else 
      {
        player2Score += diceValue;
        document.getElementById('player2Score').textContent = player2Score;
        if (player2Score >= 30) 
        {
          alert('Player 2 wins!');
          resetGame();
        } else 
        {
          currentPlayer = 1;
          document.getElementById('player1Button').disabled = false;
          document.getElementById('player2Button').disabled = true;
        }
      }
    }

    function resetGame() {
      player1Score = 0;
      player2Score = 0;
      currentPlayer = 1;
      document.getElementById('player1Score').textContent = player1Score;
      document.getElementById('player2Score').textContent = player2Score;
      document.getElementById('player1Button').disabled = false;
      document.getElementById('player2Button').disabled = true;
      document.getElementById('dice').style.backgroundImage = '';
    }
  
