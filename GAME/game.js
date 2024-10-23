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

const game = new Phaser.Game(config);

function preload() {
    this.load.image('background', './I3__Greenier-Please/assets/BG.png');
    this.load.json('gameData', 'hackathon/I3__Greenier-Please/GAME/propositions.json');

}

function create() {
    const data = this.cache.json.get('gameData');

    let background = this.add.image(0, 0, 'background');
    background.setOrigin(0, 0);
    //background.setScale(0.5);

    console.log(data.operators[0]);
    console.log(data.projets[0].title);

    data = this.cache.json.get('gameData');

    afficherProjetEtOperateur();
}




function update() {
    // Logique du jeu
}

function afficherProjetEtOperateur() {
    // Vérifie si nous avons encore des projets à afficher
    if (currentIndex < data.projets.length) {
        // Sélectionner l'opérateur et le projet actuels
        let currentOperateur = data.operators[currentIndex];
        let currentProjet = data.projets[currentIndex];

        console.log("Opérateur: " + currentOperateur);
        console.log("Projet: " + currentProjet.title);

        // Afficher le titre du projet dans le jeu
        this.add.text(100, 100, currentProjet.title, { fontSize: '24px', fill: '#fff' });

        // Boucle sur chaque proposition et créer un bouton
        for (let i = 0; i < currentProjet.proposal.length; i++) {
            let proposition = currentProjet.proposal[i];

            // Créer et positionner le bouton
            let button = this.add.text(100, 150 + i * 50, proposition, { fontSize: '20px', fill: '#fff', backgroundColor: '#000' })
                .setInteractive()  // Rendre le texte interactif (cliquable)
                .on('pointerdown', () => verifierReponse(i))  // Appeler la fonction verifierReponse quand on clique
                .on('pointerover', () => button.setStyle({ fill: '#f39c12' }))  // Changer de couleur quand la souris passe dessus
                .on('pointerout', () => button.setStyle({ fill: '#fff' }));     // Revenir à la couleur blanche quand la souris part
        }
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


