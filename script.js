// Rock paper scissors game logic
    let totalchances = 1;
    function play(userChoice){
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (userChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = "You win!";
      totalchances++;
    } else {
      result = "You lose!";
      totalchances++;
    }
    if (totalchances === 5) {
    document.getElementById('result').textContent = `You played all your chances ${totalchances}`;
      totalchances === 0;
    } else {
    document.getElementById('result').textContent =
    `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}
}


