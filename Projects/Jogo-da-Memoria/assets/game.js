let game = {

    lockMode: false,
    firstCard: null, 
    secondCard: null,

    setCard: function (id) {
        let card = this.cards.filter(card => card.id === id) [0];

        if (card.flipped || this.lockMode) {
            return false;
        }

        if (!this.firstCard){
            this.firstCard = card;
            return true;
        } else {
            this.secondCard = card;
            this.lockMode = true;
            return true;
        }
    },

    checkMatch: function() {
        return this.firstCard.icon === this.secondCard.icon;

    },

    clearCards: function() {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    hogwarts: [
        'dumbledore',
        'harry',
        'rony',
        'hermione',
        'youKnowWho',
        'luna',
        'snape',
        'chapeuSeletor',
        'dobby',
        'patrono'],

    cards: null,

    createCardsFromHogwarts: function () {
        this.cards = [];
    
        game.hogwarts.forEach((character) => {
            this.cards.push(this.createPairFromHogwarts(character));
        })
        // for(let character of characters){
        //     cards.push(createPairFromHogwarts(character))
        // }
    
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards;
    },
    
    createPairFromHogwarts: function (character){
    
        return [{
            id: this.createIdWithCharacter(character),
            icon: character,
            flipped: false,
        }, {
            id: this.createIdWithCharacter(character),
            icon: character,
            flipped: false,
        }]
    },
    
    createIdWithCharacter: function (character) {
        return character + parseInt(Math.random() * 1000);
    }, 

    shuffleCards: function (cards) {
        let currentIndex = this.cards.length;
        let randomIndex = 0;
    
        while(currentIndex !== 0) {
    
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--;
    
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
    
        }
    }
    

}