let userScore = 0;
        let computerScore = 0;
        let userPoints = 0;
        let userWins = 0;
        let userLosses = 0;

        function playGame(userChoice) {
            const choices = ['rock', 'paper', 'scissors'];
            const computerChoice = choices[Math.floor(Math.random() * 3)];

            const result = getResult(userChoice, computerChoice);

            if (result === 'win') {
                userScore++;
                userWins++;
                if (userWins === 5) {
                    userPoints += 5;
                    userWins = 0;
                }
                if (userScore === 5 || computerScore === 5) {
                    userPoints = 0;
                    userScore = 0;
                    computerScore = 0;
                }
                updateBTCConverter();
            } else if (result === 'lose') {
                computerScore++;
                userLosses++;
                if (userLosses === 5) {
                    userPoints -= 0.5;
                    userLosses = 0;
                }
                if (userScore === 5 || computerScore === 5) {
                    userPoints = 0;
                    userScore = 0;
                    computerScore = 0;
                }
                updateBTCConverter();
            }

            displayResult(userChoice, computerChoice, result);
            updateScore();
        }

        function getResult(user, computer) {
            if (user === computer) {
                return 'draw';
            } else if ((user === 'rock' && computer === 'scissors') ||
                (user === 'paper' && computer === 'rock') ||
                (user === 'scissors' && computer === 'paper')) {
                return 'win';
            } else {
                return 'lose';
            }
        }

        function displayResult(user, computer, result) {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `You chose ${user}, Computer chose ${computer}. You ${result}.`;
        }

        function updateScore() {
            const scoreDiv = document.getElementById('score');
            scoreDiv.textContent = `Score: User ${userScore} - ${computerScore} Computer`;

            const profileDiv = document.getElementById('profile');
            profileDiv.innerHTML = `POINTS: <span id="points">${userPoints}</span>`;
        }

        function updateBTCConverter() {
            const points = userPoints;
            const btcConverter = document.getElementById('btc-converter');
            if (points >= 5) {
                const btc = (points / 5) * 0.02;
                btcConverter.textContent = `ETH: ${btc.toFixed(2)}`;
                btcConverter.classList.add('btc-anim');
            } else {
                btcConverter.textContent = '';
                btcConverter.classList.remove('btc-anim');
            }
            document.getElementById('btc-count').textContent = `BTC: ${btc.toFixed(2)}`;
        }