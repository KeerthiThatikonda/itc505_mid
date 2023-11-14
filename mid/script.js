const storyTextElement = document.getElementById('story-text');
const optionsContainer = document.getElementById('options-container');

let player = {
    courage: 0,
    wit: 0,
    diplomacy: 0,
    dead: 0
};

function startGame() {
    // Initialization code
    showStory("You wake up in an unfamiliar forest...");
    showOptions([
        { text: "Continue", action: act1 }
    ]);
}

// Modify the showStory function to accept an array of image paths
function showStory(text, images = [], imageSize = { width: 200, height: 150 }) {
    storyTextElement.innerHTML = `<p>${text}</p>`;

    // Append images if provided
    if (images.length > 0) {
        images.forEach((imagePath) => {
            const imageElement = document.createElement('img');
            imageElement.src = imagePath;
            
            // Set the size of the image
            imageElement.width = imageSize.width;
            imageElement.height = imageSize.height;

            storyTextElement.appendChild(imageElement);
        });
    }
}



function showOptions(options) {
    optionsContainer.innerHTML = "";
    options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.addEventListener('click', option.action);
        optionsContainer.appendChild(button);
    });
}


function act1() {
    showStory("As you explore, a mystical guide appears...",['bridge in forest.jpg', 'alternate route.avif'] );

    showOptions([
        { text: "Brave the bridge", action: pathOfCourage },
        { text: "Seek an alternative route", action: alternativeRoute }
    ]);
}

function pathOfCourage() {
    player.courage++;
    showStory("You bravely cross the treacherous bridge...", ['A-dense-forest.webp', 'riverbank.jpg']);

    // Continue the story
    showOptions([
        { text: "Continue through the dense forest", action: denseForest },
        { text: "Rest by the riverbank", action: restByRiver }
    ]);
}


function alternativeRoute() {
    player.wit++;
    showStory("You find a hidden path and avoid the bridge...", ['cave.jpeg', 'hill.jpeg']);

    // Continue the story
    showOptions([
        { text: "Explore a mysterious cave",action: witdead},
        { text: "Climb a hill for a better view",action: witdead}
    ]);
}

function witdead(){
    player.dead++;
    showStory("I the cave there is a mysterious creature u fought with that regorusly but luck is not ur side you are dead....", ['cave.jpeg', 'hill.jpeg']);

    showOptions([
        {text: "Restart the game", action: startGame}
    ]);
}

// Continue building functions for other story paths...

// Additional Choices and Outcomes
function denseForest() {
    player.courage++;
    showStory("Pushing through the dense forest, you encounter a magical creature...", ['communicate with creature.jpeg', 'hunter-with-weapon.jpg']);

    // Continue the story
    showOptions([
        { text: "Attempt to communicate with the creature", action: map},
        { text: "Draw your weapon and prepare for a fight", action: couragedead }
    ]);
}

function map() {
    player.wit++;
    showStory("You got the map that sents you to the mystical realm", ['mystical realm.jpg'])

    showOptions([
        {text: "Go to the mystical realm", action: finalAct}
    ]);
}

function couragedead(){
    player.dead++;
    showStory("The creatures are strong enoufgh to kill you. You took the wrong path. You are dead");

    showOptions([
        {text: "Restart the Game", action: startGame}
    ]);
}

function restByRiver() {
    player.diplomacy++;
    showStory("While resting by the river, you spot a group of travelers...");

    // Continue the story
    showOptions([
        { text: "Approach the travelers peacefully", action: diplomacydead},
        { text: "Hide and observe their actions", action: observeTravelers}
    ]);
}

function diplomacydead(){
    player.dead++;
    showStory("The travelars are on the same path and they killed you");

    showOptions([
        {text: "Restart the Game", action: startGame}
    ]);
}

function observeTravelers() {
    player.wit++;
    showStory("You found a paper on the boat.")

    showOptions([
        {text: "Go get the mystary map from the boat", action: gotoboat}
    ]);
}

function gotoboat(){
    player.courage++;
    showStory("You got the map that sents you to the mystical realm")

    showOptions([
        {text: "Go to the mystical realm", action: finalAct}
    ]);
}
// Add more functions for other paths and outcomes...

// Final Act
function finalAct() {
    showStory("You reach the heart of the mystical realm where destiny awaits...");

    // Continue the story
    showOptions([
        { text: "Engage in the final battle", action: engageInBattle },
        { text: "Negotiate for a peaceful resolution", action: peacefulResolution }
    ]);
}

function engageInBattle(){
    showStory("You killed the finall Boss. You got the treasure that you are looking for.")

    showOptions([

    ])
}

function peacefulResolution(){
    showStory("The treasure keeper dint listend to you.")

    showOptions([
        {text: "Challenge him for a fight", action: engageInBattle}
    ])
}


// Call startGame to begin the game
startGame();


// Continue building functions for other story paths...

// Call startGame to begin the game
startGame();
