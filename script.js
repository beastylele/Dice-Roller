document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button'); // gets the button
    let dice = document.getElementById('dice'); // gets the dice
    let value = document.getElementById('value'); // gets the value

    function changeImage() {
        let diceChosen = Math.floor(Math.random() * 6) + 1; 
        // gets a random number

        dice.src = 'dice_' + diceChosen + '.png';
        // changes the dice to number it gets

        value.innerText = 'Your value is ' + diceChosen;
    }   

    button.addEventListener('click', changeImage);
    // adds the function when button is clicked
});