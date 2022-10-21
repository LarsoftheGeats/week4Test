let goals = [];//empty goals container
let goalsInList = 0;

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
        let index = findIndex(+deleteId)
        goals.splice(index,1)
        res.status(200).send(goals)

    },//end delete goal block

    //change goal takes an argument, type, and data the thing to change,
    //idd is the goal to change.  
    // changeGoal: ((req,res) => {
    //     const type = req.body.type;
    //     let id = req.params.id;

    //     let index=goals.findIndex( element => element.goalNum === +id)
    //     if (type === 'changeDate'){
    //         goals[index].date = req.body.data;//update your date of completion
    //         res.status(200).send(goals)
    //     }
    //     if (type === 'changeGoal'){
    //         goals[index].goal=req.body.data;
    //         res.status(200).send(goals)//update your goal
    //     }
    //     else{
    //         res.status(400)//catchall
    //     }
    // })

    

}