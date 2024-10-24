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
    this.load.json('gameData', './propositions.json');


}

let data;



function nextproposal() {
    console.log("entered");
    currentIndex += 1;
    afficherProjetEtOperateur();
}

function create() {

    data = this.cache.json.get('gameData');

    let background = this.add.image(0, 0, 'background');
    background.setOrigin(0, 0);

    //buttons
    const accept = this.add.image(788, 500, 'buttonaccept');
    accept.setInteractive();
    accept.setOrigin(0, 0);
    accept.on('pointerdown', () => nextproposal());

    afficherProjetEtOperateur();
}




function update() {
    // Logique du jeu
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
    }
}



function verifierReponse(index) {
    let currentProjet = data.projets[currentIndex];

    if (index === currentProjet.goodProposal) {
        console.log("Bonne réponse !");
        console.log("Information : " + currentProjet.information);
    } else {
        console.log("Mauvaise réponse, essayez encore !");
    }

    // Passer au projet suivant
    currentIndex++;
    afficherProjetEtOperateur();


}


