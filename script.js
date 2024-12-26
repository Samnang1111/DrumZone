var buttons = document.querySelectorAll('.drum'); // .drum is a class, so we can do querySelector.
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleClick);

}
function handleClick() {
    var thisButtonsHTML = this.innerHTML;
    switch (thisButtonsHTML) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            break;
    }
}

function handleShortcut(event) {
    if (event.key === "w") {
        event.preventDefault();
        // Your action to perform when the key is pressed
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
    } else if (event.key === "a") {
        event.preventDefault();

        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
    } else if (event.key === "s") {
        event.preventDefault();

        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
    } else if (event.key === "d") {
        event.preventDefault();

        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
    } else if (event.key === "j") {
        event.preventDefault();

        var snare = new Audio('sounds/snare.mp3');
        snare.play();
    } else if (event.key === "k") {
        event.preventDefault();

        var crash = new Audio('sounds/crash.mp3');
        crash.play();
    } else if (event.key === "l") {
        event.preventDefault();

        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
    }
};
document.addEventListener("keydown", handleShortcut);

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
// this.style.color = 'white';

function addButtonsAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    if (activeButton) {
        activeButton.classList.add('pressed');
        setTimeout(function () {
            activeButton.classList.remove('pressed');
        }, 100);  // Removes 'pressed' class after 300ms
    }
};

document.addEventListener('keydown', function (event) {
    addButtonsAnimation(event.key);  // Calls the animation function based on the key pressed
});
