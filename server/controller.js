module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Do not be afraid of competition.", "You love peace.", "Enjoy being a spaceman.", "The good news is there is no bad news.", "Snakes fear you.", "Batman thinks you need to mellow out a bit.", "The Rock follows you for workout tips."];
        let rndmIndx = Math.floor(Math.random() *fortunes.length);
        let rndmFortune = fortunes[rndmIndx];

        res.status(200).send(rndmFortune);

    }

}