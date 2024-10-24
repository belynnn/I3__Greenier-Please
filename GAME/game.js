const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 650,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
 
let currentIndex = 0;
let data;
let paper1, paper2, paper3, closeup, closeupText, accept;
let compteur = 0;
let makeclosup = false;
let didyouwin;
let winscreen, lostscreen;
let index; 
let thermometer;
let ingamewindow;
let projectTitleText, operatorText;  

let clickCount = localStorage.setItem('clickCount', 0);
 
let game ;

function startgame()
{
    if (!game)
        {
            game = new Phaser.Game(config);
        }
}
 
function preload() {
    this.load.image('background', './assets/BG.png');
    this.load.image('buttonaccept', './assets/acceptbutton.png');
    this.load.json('gameData', './GAME/propositions.json');
    this.load.image('paper', './assets/Paper.png');
    this.load.image('closeup', './assets/PaperCloseUp.png');
    this.load.image('winscreen', './assets/WinScreen.png');
    this.load.image('lostscreen', './assets/GameOverScreen.png');
    this.load.image('firstthermomether', './assets/NeutralThermometer.png');
    this.load.image('seccondthermomether', './assets/SecondThermometer.png');
    this.load.image('thirdthermomether', './assets/ThirdThermometer.png');
    this.load.image('neutralwindow', './assets/NeutralWindow.png');
    this.load.image('elli', './assets/PNG.png');
    //this.load.image('elli', './assets/PNG.png');

    clickCount = 0;
}
 
function create() {

    data = this.cache.json.get('gameData');
 

    let background = this.add.image(0, 0, 'background');
    background.setOrigin(0, 0);

    thermometer = this.add.image(925, 25, 'seccondthermomether').setOrigin(0, 0);
    ingamewindow = this.add.image(642, 20, 'neutralwindow').setOrigin(0, 0).setScale(0.97);
    npc = this.add.image(100, 125, 'elli').setOrigin(0, 0).setScale(0.8)

    closeup = this.add.image(250, -150, 'closeup').setOrigin(0, 0).setVisible(false);
    closeupText = this.add.text(300, 200, '', { 
        fontSize: '18px', 
        fill: '#2E8B57', 
        fontFamily: 'courier new', 
        fontStyle: 'bold', 
        wordWrap: { width: closeup.width - 50 }
    }).setOrigin(0, 0).setVisible(false);
 

    winscreen = this.add.image(100, 100, 'winscreen').setOrigin(0, 0).setInteractive().setVisible(false);
    lostscreen = this.add.image(100, 100, 'lostscreen').setOrigin(0, 0).setInteractive().setVisible(false);
 

    accept = this.add.image(788, 500, 'buttonaccept').setInteractive().setOrigin(0, 0);
    accept.on('pointerdown', () => {makeclosup = false;clickCount++;});
    accept.on('pointerup', () => verifierReponse(index));
 
    paper1 = createPaper(this, 150, 450, 0);
    paper2 = createPaper(this, 300, 450, 1);
    paper3 = createPaper(this, 450, 450, 2);

    operatorText = this.add.text(20, 20, '', { fontSize: '14px', fill: '#000000', fontFamily: 'Courier New', fontStyle: 'bold' });
    projectTitleText = this.add.text(20, 50, '', { fontSize: '14px', fill: '#000000', fontFamily: 'Courier New', fontStyle: 'bold' })

    afficherProjetEtOperateur.call(this);
}
 
function update() {

    closeup.setVisible(makeclosup);
    closeupText.setVisible(makeclosup);
 
    if (didyouwin !== undefined) {
        winscreen.setVisible(didyouwin);
        lostscreen.setVisible(!didyouwin);
 
        paper1.setVisible(false);
        paper2.setVisible(false);
        paper3.setVisible(false);
    }

    thermometer.setVisible(false)

    if (compteur < 0) {

        thermometer = this.add.image(925, 25, 'firstthermomether').setOrigin(0, 0);
        
    } else if (compteur > 0) {

        thermometer = this.add.image(925, 25, 'thirdthermomether').setOrigin(0, 0);
        
    } else {

        thermometer = this.add.image(925, 25, 'seccondthermomether').setOrigin(0, 0);

    }
}
 
function createPaper(scene, x, y, propalIndex) {
    let paper = scene.add.image(x, y, 'paper').setInteractive().setOrigin(0, 0).setVisible(true);
    paper.on('pointerdown', () => selectProposal(propalIndex));
    paper.on('pointerup', () => makeclosup = true);
    return paper;
}
 
function selectProposal(propalIndex) {
    index = propalIndex;
    const proposition = data.projets[currentIndex].proposal[propalIndex];
    closeupText.setText(proposition);
}
 
function afficherProjetEtOperateur() {
    // Vérifie si nous avons encore des projets à afficher
    if (currentIndex < data.projets.length) {
        // Sélectionne l'opérateur et le projet actuels
        let currentOperateur = data.operators[currentIndex];
        let currentProjet = data.projets[currentIndex];
 
        console.log("Opérateur: " + currentOperateur);
        console.log("Projet: " + currentProjet.title);

        operatorText.setText('Opérateur:\n' + currentOperateur);
        projectTitleText.setText('Projet:\n' + currentProjet.title);
 
    } else {

        console.log("Tous les projets ont été traités.");
        if (compteur <= 0) {

            didyouwin = true;
            console.log("gagné");
        } else if (compteur > 0) {

            console.log("perdu");
            didyouwin = false;
        }
    }
}
 
function verifierReponse(index) {
    let currentProjet = data.projets[currentIndex];
    if (index == currentProjet.goodProposal) {

        console.log("Bonne réponse !");
        compteur -= 1;
        console.log("compteur " + compteur);

    } else {

        console.log("Mauvaise réponse, essayez encore !");
        compteur += 1;
        console.log("compteur " + compteur);
    }
 

    nextproposal();
}
 
function nextproposal() {
    currentIndex += 1;
    afficherProjetEtOperateur.call(this);

    if(currentIndex == 1)
        {
            npc = this.add.image(225, 125, 'elli').setOrigin(0, 0).setScale(0.8)
        }
    
}

function killgame()
{
    if (game)
        {
            game.destroy();
            game = null;
            document.querySelector('canvas[width][height]').remove();
        }
   
}