let goals = [];//empty goals container
let goalsInList = 0;
//let completedGoals = []//empty completed List
let user = "anonymous"

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

    },

    addGoal: (req,res) => {
        const {goal, date}=req.body;
        let newGoal = {
            goalNum: goalsInList+1,
            goal,
            date
        }
        goalsInList++
        goals.push(newGoal)
        res.status(200).send(goals)
    },

    deleteGoal: (req,res) => {
        const deleteId = req.params.id;
        //console.log("mae it to delete")
        let index =goals.findIndex( element => element.goalNum === +deleteId)
        goals.splice(index,1)
        res.status(200).send(goals)
      

    },//end delete goal block

    changeUser: (req,res) => {
        user = req.params.userName;
        console.log(user)
        res.status(200).send(user)
    }


    

}