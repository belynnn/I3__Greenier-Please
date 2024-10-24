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

const game = new Phaser.Game(config);


function preload() {
    this.load.image('background', './assets/BG.png');
    this.load.image('buttonaccept', './assets/acceptbutton.png');
    this.load.json('gameData', './GAME/propositions.json');
    this.load.image('paper','./assets/Paper.png' );
    this.load.image('closeup','./assets/PaperCloseUp.png' );
    this.load.image('winscreen','./assets/WinScreen.png');
    this.load.image('lostscreen','./assets/GameOverScreen.png');
    //this.load.image('closebutton','./assets/CloseCross.png' );
    
    
}

let data;
let paper1;
let paper2;
let paper3;
let index;
let compteur = 0;
let closeup;
let makeclosup = false;
let didyouwin;



function nextproposal()
{
    console.log("entered")
    currentIndex += 1;
    afficherProjetEtOperateur();
}

function create() {

    data = this.cache.json.get('gameData');

    let background = this.add.image(0, 0, 'background');
    background.setOrigin(0, 0);

    afficherProjetEtOperateur()

    //buttons
    const accept = this.add.image(788, 500, 'buttonaccept');
    accept.setInteractive();
    accept.setOrigin(0, 0);
    accept.on('pointerdown', () => verifierReponse(index))
    accept.on('pointerup', ()=> makeclosup = false)

}

function propal1()
{
    data.projets[currentIndex].proposal[0];
    console.log(data.projets[currentIndex].proposal[0]);
    index = 0;
    console.log(index);
}

function propal2()
{
    data.projets[currentIndex].proposal[1];
    console.log(data.projets[currentIndex].proposal[1]);
    index = 1;
    console.log(index);
}

function propal3()
{
    data.projets[currentIndex].proposal[2];
    console.log(data.projets[currentIndex].proposal[2]);
    index = 2;
    console.log(index);
}

function update() {

    if (makeclosup == true)
        {
            closeup = this.add.image(250, -150, 'closeup');
            closeup.setOrigin(0,0);
            closeup.setInteractive();
            closeup.on('pointerdown', () => closeup.setVisible(true))
            
        }

        if (didyouwin == true)
            {

            }

    let paper1 = this.add.image(150, 450, 'paper');
    paper1.setInteractive();
    paper1.setOrigin(0, 0);
    paper1.setInteractive();
    paper1.on('pointerdown', () => propal1())
    paper1.on('pointerup', () => makeclosup = true)
    
    let paper2 = this.add.image(300, 450, 'paper');
    paper2.setInteractive();
    paper2.setOrigin(0, 0);
    paper2.setInteractive();
    paper2.on('pointerdown', () => propal2());
    paper2.on('pointerup', () => makeclosup = true);

    let paper3 = this.add.image(450, 450, 'paper');
    paper3.setInteractive();
    paper3.setOrigin(0, 0);
    paper3.setInteractive();
    paper3.on('pointerdown', () => propal3())
    paper3.on('pointerup', () => makeclosup = true)

}

function afficherProjetEtOperateur() {

    // Vérifie si nous avons encore des projets à afficher
    if (currentIndex < data.projets.length) {
         //Sélectionner l'opérateur et le projet actuels
        let currentOperateur = data.operators[currentIndex];
        let currentProjet = data.projets[currentIndex];

        console.log("Opérateur: " + currentOperateur);
        console.log("Projet: " + currentProjet.title);

       
    } else {
        // Si tous les projets ont été traités
        console.log("Tous les projets ont été traités.");
        if (compteur <= 0)
            {
                didyouwin = true;
                console.log("gagné")
            }else if(compteur > 0)
            {
                console.log("perdu")
                didyouwin = false;
            }
    }
}



function verifierReponse(index) {
    let currentProjet = data.projets[currentIndex];

    console.log(index);

    if (index == currentProjet.goodProposal) {
        console.log("Bonne réponse !");
        console.log("Information : " + currentProjet.information);
        compteur -= 1;
        console.log("compteur " + compteur);
    } else {
        console.log("Mauvaise réponse, essayez encore !");
        compteur += 1
        console.log("compteur " + compteur);
    }

     nextproposal();
   
}


